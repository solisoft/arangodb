////////////////////////////////////////////////////////////////////////////////
/// @brief "safe" barrier container (will not leak resources)
///
/// @file
///
/// DISCLAIMER
///
/// Copyright 2004-2013 triAGENS GmbH, Cologne, Germany
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
/// Copyright holder is triAGENS GmbH, Cologne, Germany
///
/// @author Jan Steemann
/// @author Copyright 2011-2013, triAGENS GmbH, Cologne, Germany
////////////////////////////////////////////////////////////////////////////////

#ifndef TRIAGENS_UTILS_BARRIER_H
#define TRIAGENS_UTILS_BARRIER_H 1

#include "Basics/Common.h"

#include "VocBase/barrier.h"
#include "VocBase/document-collection.h"

namespace triagens {
  namespace arango {

// -----------------------------------------------------------------------------
// --SECTION--                                                     class Barrier
// -----------------------------------------------------------------------------

    class Barrier {

////////////////////////////////////////////////////////////////////////////////
/// @brief Barrier
////////////////////////////////////////////////////////////////////////////////

      private:
        Barrier (const Barrier&);
        Barrier& operator= (const Barrier&);

// -----------------------------------------------------------------------------
// --SECTION--                                      constructors and destructors
// -----------------------------------------------------------------------------

      public:

////////////////////////////////////////////////////////////////////////////////
/// @brief create the barrier
////////////////////////////////////////////////////////////////////////////////

        Barrier (TRI_document_collection_t* document) :
          _barrier(nullptr) {
          _barrier = TRI_CreateBarrierElement(&document->_barrierList);
        }

////////////////////////////////////////////////////////////////////////////////
/// @brief destroy the barrier
////////////////////////////////////////////////////////////////////////////////

        ~Barrier () {
          if (_barrier != nullptr) {
            TRI_FreeBarrier(_barrier);
          }
        }

// -----------------------------------------------------------------------------
// --SECTION--                                                 private variables
// -----------------------------------------------------------------------------

      private:

////////////////////////////////////////////////////////////////////////////////
/// @brief the barrier
////////////////////////////////////////////////////////////////////////////////

        TRI_barrier_t* _barrier;

    };

  }
}

#endif

// Local Variables:
// mode: outline-minor
// outline-regexp: "/// @brief\\|/// {@inheritDoc}\\|/// @addtogroup\\|/// @page\\|// --SECTION--\\|/// @\\}"
// End:
