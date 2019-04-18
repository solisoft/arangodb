////////////////////////////////////////////////////////////////////////////////
/// DISCLAIMER
///
/// Copyright 2014-2016 ArangoDB GmbH, Cologne, Germany
/// Copyright 2004-2014 triAGENS GmbH, Cologne, Germany
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///
/// Copyright holder is ArangoDB GmbH, Cologne, Germany
///
/// @author Jan Steemann
////////////////////////////////////////////////////////////////////////////////

#include "InitialSyncer.h"
#include "Basics/MutexLocker.h"
#include "Scheduler/Scheduler.h"
#include "Scheduler/SchedulerFeature.h"

namespace arangodb {

InitialSyncer::InitialSyncer(ReplicationApplierConfiguration const& configuration,
                             replutils::ProgressInfo::Setter setter)
    : Syncer(configuration), _progress{setter} {}

InitialSyncer::~InitialSyncer() {
  {
    MUTEX_LOCKER(guard, _batchPingTimerMutex);
    _batchPingTimer.reset();
  }

  try {
    if (!_state.isChildSyncer) {
      _batch.finish(_state.connection, _progress);
    }
  } catch (...) {
  }
}

/// @brief start a recurring task to extend the batch
void InitialSyncer::startRecurringBatchExtension() {
  TRI_ASSERT(!_state.isChildSyncer);
  if (isAborted()) {
    MUTEX_LOCKER(guard, _batchPingTimerMutex);
    _batchPingTimer.reset();
    return;
  }

  int secs = _batch.ttl / 2;
  if (secs < 30) {
    secs = 30;
  }
        
  MUTEX_LOCKER(guard, _batchPingTimerMutex);
  _batchPingTimer = SchedulerFeature::SCHEDULER->queueDelay(
      RequestLane::SERVER_REPLICATION, std::chrono::seconds(secs), [this](bool cancelled) {
        if (!cancelled && _batch.id != 0 && !isAborted()) {
          _batch.extend(_state.connection, _progress);
          startRecurringBatchExtension();
        } else {
          MUTEX_LOCKER(guard, _batchPingTimerMutex);
          _batchPingTimer.reset();
        }
      });
}

}  // namespace arangodb
