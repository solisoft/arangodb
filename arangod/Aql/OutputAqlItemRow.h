////////////////////////////////////////////////////////////////////////////////
/// DISCLAIMER
///
/// Copyright 2018 ArangoDB GmbH, Cologne, Germany
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
/// @author Tobias Gödderz
/// @author Michael Hackstein
/// @author Heiko Kernbach
/// @author Jan Christoph Uhde
////////////////////////////////////////////////////////////////////////////////

#ifndef ARANGOD_AQL_OUTPUT_AQL_ITEM_ROW_H
#define ARANGOD_AQL_OUTPUT_AQL_ITEM_ROW_H

#include "Aql/InputAqlItemRow.h"
#include "Aql/types.h"
#include "Basics/Common.h"

namespace arangodb {
namespace aql {

class OutputAqlItemBlockShell;
struct AqlValue;

/**
 * @brief One row within an AqlItemBlock, for writing.
 *
 * Does not keep a reference to the data.
 * Caller needs to make sure that the underlying
 * AqlItemBlock is not going out of scope.
 */
class OutputAqlItemRow {
 public:
  explicit OutputAqlItemRow(
      std::unique_ptr<OutputAqlItemBlockShell> blockShell);

  void setValue(RegisterId registerId, InputAqlItemRow const& sourceRow,
                AqlValue const&);

  void copyRow(InputAqlItemRow const& sourceRow);

  std::size_t getNrRegisters() const;

  /**
   * @brief May only be called after all output values in the current row have
   * been set, or in case there are zero output registers, after copyRow has
   * been called.
   */
  void advanceRow();

  // returns true if row was produced
  bool produced() const {
    return allValuesWritten() && _inputRowCopied;
  }

  std::unique_ptr<AqlItemBlock> stealBlock();

  bool isFull();

  size_t numRowsWritten() const noexcept {
    if (produced()) {
      return _baseIndex + 1;
    }

    return _baseIndex;
  }

 private:
  /**
   * @brief Underlying AqlItemBlock storing the data.
   */
  std::unique_ptr<OutputAqlItemBlockShell> _blockShell;

  /**
   * @brief The offset into the AqlItemBlock. In other words, the row's index.
   */
  size_t _baseIndex;

  /**
   * @brief Whether the input registers were copied from a source row.
   */
  bool _inputRowCopied;

  /**
   * @brief The last source row seen. Note that this is invalid before the first
   *        source row is seen.
   */
  InputAqlItemRow _lastSourceRow;

  /**
   * @brief Number of setValue() calls. Each entry may be written at most once,
   * so this can be used to check when all values are written.
   */
  size_t _numValuesWritten;

 private:

  size_t nextUnwrittenIndex() const noexcept {
    return numRowsWritten();
  }

  size_t numRegistersToWrite() const;

  bool allValuesWritten() const {
    return _numValuesWritten == numRegistersToWrite();
  };

  bool isOutputRegister(RegisterId regId);

  AqlItemBlock const& block() const;
  AqlItemBlock& block();
};

}  // namespace aql
}  // namespace arangodb

#endif  // ARANGOD_AQL_OUTPUT_AQL_ITEM_ROW_H
