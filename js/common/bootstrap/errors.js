/*jshint maxlen: 240 */
/*global require */

/// auto-generated file generated from errors.dat

(function () {
  "use strict";
  var internal = require("internal");

  internal.errors = {
    "ERROR_NO_ERROR"               : { "code" : 0, "message" : "no error" },
    "ERROR_FAILED"                 : { "code" : 1, "message" : "failed" },
    "ERROR_SYS_ERROR"              : { "code" : 2, "message" : "system error" },
    "ERROR_OUT_OF_MEMORY"          : { "code" : 3, "message" : "out of memory" },
    "ERROR_INTERNAL"               : { "code" : 4, "message" : "internal error" },
    "ERROR_ILLEGAL_NUMBER"         : { "code" : 5, "message" : "illegal number" },
    "ERROR_NUMERIC_OVERFLOW"       : { "code" : 6, "message" : "numeric overflow" },
    "ERROR_ILLEGAL_OPTION"         : { "code" : 7, "message" : "illegal option" },
    "ERROR_DEAD_PID"               : { "code" : 8, "message" : "dead process identifier" },
    "ERROR_NOT_IMPLEMENTED"        : { "code" : 9, "message" : "not implemented" },
    "ERROR_BAD_PARAMETER"          : { "code" : 10, "message" : "bad parameter" },
    "ERROR_FORBIDDEN"              : { "code" : 11, "message" : "forbidden" },
    "ERROR_OUT_OF_MEMORY_MMAP"     : { "code" : 12, "message" : "out of memory in mmap" },
    "ERROR_CORRUPTED_CSV"          : { "code" : 13, "message" : "csv is corrupt" },
    "ERROR_FILE_NOT_FOUND"         : { "code" : 14, "message" : "file not found" },
    "ERROR_CANNOT_WRITE_FILE"      : { "code" : 15, "message" : "cannot write file" },
    "ERROR_CANNOT_OVERWRITE_FILE"  : { "code" : 16, "message" : "cannot overwrite file" },
    "ERROR_TYPE_ERROR"             : { "code" : 17, "message" : "type error" },
    "ERROR_LOCK_TIMEOUT"           : { "code" : 18, "message" : "lock timeout" },
    "ERROR_CANNOT_CREATE_DIRECTORY" : { "code" : 19, "message" : "cannot create directory" },
    "ERROR_CANNOT_CREATE_TEMP_FILE" : { "code" : 20, "message" : "cannot create temporary file" },
    "ERROR_REQUEST_CANCELED"       : { "code" : 21, "message" : "canceled request" },
    "ERROR_DEBUG"                  : { "code" : 22, "message" : "intentional debug error" },
    "ERROR_IP_ADDRESS_INVALID"     : { "code" : 25, "message" : "IP address is invalid" },
    "ERROR_FILE_EXISTS"            : { "code" : 27, "message" : "file exists" },
    "ERROR_LOCKED"                 : { "code" : 28, "message" : "locked" },
    "ERROR_DEADLOCK"               : { "code" : 29, "message" : "deadlock detected" },
    "ERROR_SHUTTING_DOWN"          : { "code" : 30, "message" : "shutdown in progress" },
    "ERROR_ONLY_ENTERPRISE"        : { "code" : 31, "message" : "only enterprise version" },
    "ERROR_RESOURCE_LIMIT"         : { "code" : 32, "message" : "resource limit exceeded" },
    "ERROR_ARANGO_ICU_ERROR"       : { "code" : 33, "message" : "icu error: %s" },
    "ERROR_CANNOT_READ_FILE"       : { "code" : 34, "message" : "cannot read file" },
    "ERROR_INCOMPATIBLE_VERSION"   : { "code" : 35, "message" : "incompatible server version" },
    "ERROR_DISABLED"               : { "code" : 36, "message" : "disabled" },
    "ERROR_HTTP_BAD_PARAMETER"     : { "code" : 400, "message" : "bad parameter" },
    "ERROR_HTTP_UNAUTHORIZED"      : { "code" : 401, "message" : "unauthorized" },
    "ERROR_HTTP_FORBIDDEN"         : { "code" : 403, "message" : "forbidden" },
    "ERROR_HTTP_NOT_FOUND"         : { "code" : 404, "message" : "not found" },
    "ERROR_HTTP_METHOD_NOT_ALLOWED" : { "code" : 405, "message" : "method not supported" },
    "ERROR_HTTP_NOT_ACCEPTABLE"    : { "code" : 406, "message" : "request not acceptable" },
    "ERROR_HTTP_PRECONDITION_FAILED" : { "code" : 412, "message" : "precondition failed" },
    "ERROR_HTTP_SERVER_ERROR"      : { "code" : 500, "message" : "internal server error" },
    "ERROR_HTTP_SERVICE_UNAVAILABLE" : { "code" : 503, "message" : "service unavailable" },
    "ERROR_HTTP_GATEWAY_TIMEOUT"   : { "code" : 504, "message" : "gateway timeout" },
    "ERROR_HTTP_CORRUPTED_JSON"    : { "code" : 600, "message" : "invalid JSON object" },
    "ERROR_HTTP_SUPERFLUOUS_SUFFICES" : { "code" : 601, "message" : "superfluous URL suffices" },
    "ERROR_ARANGO_ILLEGAL_STATE"   : { "code" : 1000, "message" : "illegal state" },
    "ERROR_ARANGO_DATAFILE_SEALED" : { "code" : 1002, "message" : "datafile sealed" },
    "ERROR_ARANGO_READ_ONLY"       : { "code" : 1004, "message" : "read only" },
    "ERROR_ARANGO_DUPLICATE_IDENTIFIER" : { "code" : 1005, "message" : "duplicate identifier" },
    "ERROR_ARANGO_DATAFILE_UNREADABLE" : { "code" : 1006, "message" : "datafile unreadable" },
    "ERROR_ARANGO_DATAFILE_EMPTY"  : { "code" : 1007, "message" : "datafile empty" },
    "ERROR_ARANGO_RECOVERY"        : { "code" : 1008, "message" : "logfile recovery error" },
    "ERROR_ARANGO_DATAFILE_STATISTICS_NOT_FOUND" : { "code" : 1009, "message" : "datafile statistics not found" },
    "ERROR_ARANGO_CORRUPTED_DATAFILE" : { "code" : 1100, "message" : "corrupted datafile" },
    "ERROR_ARANGO_ILLEGAL_PARAMETER_FILE" : { "code" : 1101, "message" : "illegal or unreadable parameter file" },
    "ERROR_ARANGO_CORRUPTED_COLLECTION" : { "code" : 1102, "message" : "corrupted collection" },
    "ERROR_ARANGO_MMAP_FAILED"     : { "code" : 1103, "message" : "mmap failed" },
    "ERROR_ARANGO_FILESYSTEM_FULL" : { "code" : 1104, "message" : "filesystem full" },
    "ERROR_ARANGO_NO_JOURNAL"      : { "code" : 1105, "message" : "no journal" },
    "ERROR_ARANGO_DATAFILE_ALREADY_EXISTS" : { "code" : 1106, "message" : "cannot create/rename datafile because it already exists" },
    "ERROR_ARANGO_DATADIR_LOCKED"  : { "code" : 1107, "message" : "database directory is locked" },
    "ERROR_ARANGO_COLLECTION_DIRECTORY_ALREADY_EXISTS" : { "code" : 1108, "message" : "cannot create/rename collection because directory already exists" },
    "ERROR_ARANGO_MSYNC_FAILED"    : { "code" : 1109, "message" : "msync failed" },
    "ERROR_ARANGO_DATADIR_UNLOCKABLE" : { "code" : 1110, "message" : "cannot lock database directory" },
    "ERROR_ARANGO_SYNC_TIMEOUT"    : { "code" : 1111, "message" : "sync timeout" },
    "ERROR_ARANGO_CONFLICT"        : { "code" : 1200, "message" : "conflict" },
    "ERROR_ARANGO_DATADIR_INVALID" : { "code" : 1201, "message" : "invalid database directory" },
    "ERROR_ARANGO_DOCUMENT_NOT_FOUND" : { "code" : 1202, "message" : "document not found" },
    "ERROR_ARANGO_DATA_SOURCE_NOT_FOUND" : { "code" : 1203, "message" : "collection or view not found" },
    "ERROR_ARANGO_COLLECTION_PARAMETER_MISSING" : { "code" : 1204, "message" : "parameter 'collection' not found" },
    "ERROR_ARANGO_DOCUMENT_HANDLE_BAD" : { "code" : 1205, "message" : "illegal document handle" },
    "ERROR_ARANGO_MAXIMAL_SIZE_TOO_SMALL" : { "code" : 1206, "message" : "maximal size of journal too small" },
    "ERROR_ARANGO_DUPLICATE_NAME"  : { "code" : 1207, "message" : "duplicate name" },
    "ERROR_ARANGO_ILLEGAL_NAME"    : { "code" : 1208, "message" : "illegal name" },
    "ERROR_ARANGO_NO_INDEX"        : { "code" : 1209, "message" : "no suitable index known" },
    "ERROR_ARANGO_UNIQUE_CONSTRAINT_VIOLATED" : { "code" : 1210, "message" : "unique constraint violated" },
    "ERROR_ARANGO_INDEX_NOT_FOUND" : { "code" : 1212, "message" : "index not found" },
    "ERROR_ARANGO_CROSS_COLLECTION_REQUEST" : { "code" : 1213, "message" : "cross collection request not allowed" },
    "ERROR_ARANGO_INDEX_HANDLE_BAD" : { "code" : 1214, "message" : "illegal index handle" },
    "ERROR_ARANGO_DOCUMENT_TOO_LARGE" : { "code" : 1216, "message" : "document too large" },
    "ERROR_ARANGO_COLLECTION_NOT_UNLOADED" : { "code" : 1217, "message" : "collection must be unloaded" },
    "ERROR_ARANGO_COLLECTION_TYPE_INVALID" : { "code" : 1218, "message" : "collection type invalid" },
    "ERROR_ARANGO_VALIDATION_FAILED" : { "code" : 1219, "message" : "validator failed" },
    "ERROR_ARANGO_ATTRIBUTE_PARSER_FAILED" : { "code" : 1220, "message" : "parsing attribute name definition failed" },
    "ERROR_ARANGO_DOCUMENT_KEY_BAD" : { "code" : 1221, "message" : "illegal document key" },
    "ERROR_ARANGO_DOCUMENT_KEY_UNEXPECTED" : { "code" : 1222, "message" : "unexpected document key" },
    "ERROR_ARANGO_DATADIR_NOT_WRITABLE" : { "code" : 1224, "message" : "server database directory not writable" },
    "ERROR_ARANGO_OUT_OF_KEYS"     : { "code" : 1225, "message" : "out of keys" },
    "ERROR_ARANGO_DOCUMENT_KEY_MISSING" : { "code" : 1226, "message" : "missing document key" },
    "ERROR_ARANGO_DOCUMENT_TYPE_INVALID" : { "code" : 1227, "message" : "invalid document type" },
    "ERROR_ARANGO_DATABASE_NOT_FOUND" : { "code" : 1228, "message" : "database not found" },
    "ERROR_ARANGO_DATABASE_NAME_INVALID" : { "code" : 1229, "message" : "database name invalid" },
    "ERROR_ARANGO_USE_SYSTEM_DATABASE" : { "code" : 1230, "message" : "operation only allowed in system database" },
    "ERROR_ARANGO_ENDPOINT_NOT_FOUND" : { "code" : 1231, "message" : "endpoint not found" },
    "ERROR_ARANGO_INVALID_KEY_GENERATOR" : { "code" : 1232, "message" : "invalid key generator" },
    "ERROR_ARANGO_INVALID_EDGE_ATTRIBUTE" : { "code" : 1233, "message" : "edge attribute missing or invalid" },
    "ERROR_ARANGO_INDEX_DOCUMENT_ATTRIBUTE_MISSING" : { "code" : 1234, "message" : "index insertion warning - attribute missing in document" },
    "ERROR_ARANGO_INDEX_CREATION_FAILED" : { "code" : 1235, "message" : "index creation failed" },
    "ERROR_ARANGO_WRITE_THROTTLE_TIMEOUT" : { "code" : 1236, "message" : "write-throttling timeout" },
    "ERROR_ARANGO_COLLECTION_TYPE_MISMATCH" : { "code" : 1237, "message" : "collection type mismatch" },
    "ERROR_ARANGO_COLLECTION_NOT_LOADED" : { "code" : 1238, "message" : "collection not loaded" },
    "ERROR_ARANGO_DOCUMENT_REV_BAD" : { "code" : 1239, "message" : "illegal document revision" },
    "ERROR_ARANGO_INCOMPLETE_READ" : { "code" : 1240, "message" : "incomplete read" },
    "ERROR_ARANGO_DATAFILE_FULL"   : { "code" : 1300, "message" : "datafile full" },
    "ERROR_ARANGO_EMPTY_DATADIR"   : { "code" : 1301, "message" : "server database directory is empty" },
    "ERROR_ARANGO_TRY_AGAIN"       : { "code" : 1302, "message" : "operation should be tried again" },
    "ERROR_ARANGO_BUSY"            : { "code" : 1303, "message" : "engine is busy" },
    "ERROR_ARANGO_MERGE_IN_PROGRESS" : { "code" : 1304, "message" : "merge in progress" },
    "ERROR_ARANGO_IO_ERROR"        : { "code" : 1305, "message" : "storage engine I/O error" },
    "ERROR_REPLICATION_NO_RESPONSE" : { "code" : 1400, "message" : "no response" },
    "ERROR_REPLICATION_INVALID_RESPONSE" : { "code" : 1401, "message" : "invalid response" },
    "ERROR_REPLICATION_MASTER_ERROR" : { "code" : 1402, "message" : "master error" },
    "ERROR_REPLICATION_MASTER_INCOMPATIBLE" : { "code" : 1403, "message" : "master incompatible" },
    "ERROR_REPLICATION_MASTER_CHANGE" : { "code" : 1404, "message" : "master change" },
    "ERROR_REPLICATION_LOOP"       : { "code" : 1405, "message" : "loop detected" },
    "ERROR_REPLICATION_UNEXPECTED_MARKER" : { "code" : 1406, "message" : "unexpected marker" },
    "ERROR_REPLICATION_INVALID_APPLIER_STATE" : { "code" : 1407, "message" : "invalid applier state" },
    "ERROR_REPLICATION_UNEXPECTED_TRANSACTION" : { "code" : 1408, "message" : "invalid transaction" },
    "ERROR_REPLICATION_INVALID_APPLIER_CONFIGURATION" : { "code" : 1410, "message" : "invalid replication applier configuration" },
    "ERROR_REPLICATION_RUNNING"    : { "code" : 1411, "message" : "cannot perform operation while applier is running" },
    "ERROR_REPLICATION_APPLIER_STOPPED" : { "code" : 1412, "message" : "replication stopped" },
    "ERROR_REPLICATION_NO_START_TICK" : { "code" : 1413, "message" : "no start tick" },
    "ERROR_REPLICATION_START_TICK_NOT_PRESENT" : { "code" : 1414, "message" : "start tick not present" },
    "ERROR_REPLICATION_WRONG_CHECKSUM" : { "code" : 1416, "message" : "wrong checksum" },
    "ERROR_REPLICATION_SHARD_NONEMPTY" : { "code" : 1417, "message" : "shard not empty" },
    "ERROR_CLUSTER_NO_AGENCY"      : { "code" : 1450, "message" : "could not connect to agency" },
    "ERROR_CLUSTER_NO_COORDINATOR_HEADER" : { "code" : 1451, "message" : "missing coordinator header" },
    "ERROR_CLUSTER_COULD_NOT_LOCK_PLAN" : { "code" : 1452, "message" : "could not lock plan in agency" },
    "ERROR_CLUSTER_COLLECTION_ID_EXISTS" : { "code" : 1453, "message" : "collection ID already exists" },
    "ERROR_CLUSTER_COULD_NOT_CREATE_COLLECTION_IN_PLAN" : { "code" : 1454, "message" : "could not create collection in plan" },
    "ERROR_CLUSTER_COULD_NOT_READ_CURRENT_VERSION" : { "code" : 1455, "message" : "could not read version in current in agency" },
    "ERROR_CLUSTER_COULD_NOT_CREATE_COLLECTION" : { "code" : 1456, "message" : "could not create collection" },
    "ERROR_CLUSTER_TIMEOUT"        : { "code" : 1457, "message" : "timeout in cluster operation" },
    "ERROR_CLUSTER_COULD_NOT_REMOVE_COLLECTION_IN_PLAN" : { "code" : 1458, "message" : "could not remove collection from plan" },
    "ERROR_CLUSTER_COULD_NOT_REMOVE_COLLECTION_IN_CURRENT" : { "code" : 1459, "message" : "could not remove collection from current" },
    "ERROR_CLUSTER_COULD_NOT_CREATE_DATABASE_IN_PLAN" : { "code" : 1460, "message" : "could not create database in plan" },
    "ERROR_CLUSTER_COULD_NOT_CREATE_DATABASE" : { "code" : 1461, "message" : "could not create database" },
    "ERROR_CLUSTER_COULD_NOT_REMOVE_DATABASE_IN_PLAN" : { "code" : 1462, "message" : "could not remove database from plan" },
    "ERROR_CLUSTER_COULD_NOT_REMOVE_DATABASE_IN_CURRENT" : { "code" : 1463, "message" : "could not remove database from current" },
    "ERROR_CLUSTER_SHARD_GONE"     : { "code" : 1464, "message" : "no responsible shard found" },
    "ERROR_CLUSTER_CONNECTION_LOST" : { "code" : 1465, "message" : "cluster internal HTTP connection broken" },
    "ERROR_CLUSTER_MUST_NOT_SPECIFY_KEY" : { "code" : 1466, "message" : "must not specify _key for this collection" },
    "ERROR_CLUSTER_GOT_CONTRADICTING_ANSWERS" : { "code" : 1467, "message" : "got contradicting answers from different shards" },
    "ERROR_CLUSTER_NOT_ALL_SHARDING_ATTRIBUTES_GIVEN" : { "code" : 1468, "message" : "not all sharding attributes given" },
    "ERROR_CLUSTER_MUST_NOT_CHANGE_SHARDING_ATTRIBUTES" : { "code" : 1469, "message" : "must not change the value of a shard key attribute" },
    "ERROR_CLUSTER_UNSUPPORTED"    : { "code" : 1470, "message" : "unsupported operation or parameter" },
    "ERROR_CLUSTER_ONLY_ON_COORDINATOR" : { "code" : 1471, "message" : "this operation is only valid on a coordinator in a cluster" },
    "ERROR_CLUSTER_READING_PLAN_AGENCY" : { "code" : 1472, "message" : "error reading Plan in agency" },
    "ERROR_CLUSTER_COULD_NOT_TRUNCATE_COLLECTION" : { "code" : 1473, "message" : "could not truncate collection" },
    "ERROR_CLUSTER_AQL_COMMUNICATION" : { "code" : 1474, "message" : "error in cluster internal communication for AQL" },
    "ERROR_ARANGO_DOCUMENT_NOT_FOUND_OR_SHARDING_ATTRIBUTES_CHANGED" : { "code" : 1475, "message" : "document not found or sharding attributes changed" },
    "ERROR_CLUSTER_COULD_NOT_DETERMINE_ID" : { "code" : 1476, "message" : "could not determine my ID from my local info" },
    "ERROR_CLUSTER_ONLY_ON_DBSERVER" : { "code" : 1477, "message" : "this operation is only valid on a DBserver in a cluster" },
    "ERROR_CLUSTER_BACKEND_UNAVAILABLE" : { "code" : 1478, "message" : "A cluster backend which was required for the operation could not be reached" },
    "ERROR_CLUSTER_UNKNOWN_CALLBACK_ENDPOINT" : { "code" : 1479, "message" : "An endpoint couldn't be found" },
    "ERROR_CLUSTER_AGENCY_STRUCTURE_INVALID" : { "code" : 1480, "message" : "Invalid agency structure" },
    "ERROR_CLUSTER_AQL_COLLECTION_OUT_OF_SYNC" : { "code" : 1481, "message" : "collection is out of sync" },
    "ERROR_CLUSTER_COULD_NOT_CREATE_INDEX_IN_PLAN" : { "code" : 1482, "message" : "could not create index in plan" },
    "ERROR_CLUSTER_COULD_NOT_DROP_INDEX_IN_PLAN" : { "code" : 1483, "message" : "could not drop index in plan" },
    "ERROR_CLUSTER_CHAIN_OF_DISTRIBUTESHARDSLIKE" : { "code" : 1484, "message" : "chain of distributeShardsLike references" },
    "ERROR_CLUSTER_MUST_NOT_DROP_COLL_OTHER_DISTRIBUTESHARDSLIKE" : { "code" : 1485, "message" : "must not drop collection while another has a distributeShardsLike attribute pointing to it" },
    "ERROR_CLUSTER_UNKNOWN_DISTRIBUTESHARDSLIKE" : { "code" : 1486, "message" : "must not have a distributeShardsLike attribute pointing to an unknown collection" },
    "ERROR_CLUSTER_INSUFFICIENT_DBSERVERS" : { "code" : 1487, "message" : "the number of current dbservers is lower than the requested replicationFactor" },
    "ERROR_CLUSTER_COULD_NOT_DROP_FOLLOWER" : { "code" : 1488, "message" : "a follower could not be dropped in agency" },
    "ERROR_CLUSTER_SHARD_LEADER_REFUSES_REPLICATION" : { "code" : 1489, "message" : "a shard leader refuses to perform a replication operation" },
    "ERROR_CLUSTER_SHARD_FOLLOWER_REFUSES_OPERATION" : { "code" : 1490, "message" : "a shard follower refuses to perform an operation that is not a replication" },
    "ERROR_CLUSTER_SHARD_LEADER_RESIGNED" : { "code" : 1491, "message" : "a (former) shard leader refuses to perform an operation, because it has resigned in the meantime" },
    "ERROR_CLUSTER_AGENCY_COMMUNICATION_FAILED" : { "code" : 1492, "message" : "some agency operation failed" },
    "ERROR_CLUSTER_DISTRIBUTE_SHARDS_LIKE_REPLICATION_FACTOR" : { "code" : 1493, "message" : "conflicting replication factor with distributeShardsLike parameter assignment" },
    "ERROR_CLUSTER_DISTRIBUTE_SHARDS_LIKE_NUMBER_OF_SHARDS" : { "code" : 1494, "message" : "conflicting shard number with distributeShardsLike parameter assignment" },
    "ERROR_CLUSTER_LEADERSHIP_CHALLENGE_ONGOING" : { "code" : 1495, "message" : "leadership challenge is ongoing" },
    "ERROR_CLUSTER_NOT_LEADER"     : { "code" : 1496, "message" : "not a leader" },
    "ERROR_CLUSTER_COULD_NOT_CREATE_VIEW_IN_PLAN" : { "code" : 1497, "message" : "could not create view in plan" },
    "ERROR_CLUSTER_VIEW_ID_EXISTS" : { "code" : 1498, "message" : "view ID already exists" },
    "ERROR_CLUSTER_COULD_NOT_DROP_COLLECTION" : { "code" : 1499, "message" : "could not drop collection in plan" },
    "ERROR_QUERY_KILLED"           : { "code" : 1500, "message" : "query killed" },
    "ERROR_QUERY_PARSE"            : { "code" : 1501, "message" : "%s" },
    "ERROR_QUERY_EMPTY"            : { "code" : 1502, "message" : "query is empty" },
    "ERROR_QUERY_SCRIPT"           : { "code" : 1503, "message" : "runtime error '%s'" },
    "ERROR_QUERY_NUMBER_OUT_OF_RANGE" : { "code" : 1504, "message" : "number out of range" },
    "ERROR_QUERY_INVALID_GEO_VALUE" : { "code" : 1505, "message" : "invalid geo coordinate value" },
    "ERROR_QUERY_VARIABLE_NAME_INVALID" : { "code" : 1510, "message" : "variable name '%s' has an invalid format" },
    "ERROR_QUERY_VARIABLE_REDECLARED" : { "code" : 1511, "message" : "variable '%s' is assigned multiple times" },
    "ERROR_QUERY_VARIABLE_NAME_UNKNOWN" : { "code" : 1512, "message" : "unknown variable '%s'" },
    "ERROR_QUERY_COLLECTION_LOCK_FAILED" : { "code" : 1521, "message" : "unable to read-lock collection %s" },
    "ERROR_QUERY_TOO_MANY_COLLECTIONS" : { "code" : 1522, "message" : "too many collections/shards" },
    "ERROR_QUERY_DOCUMENT_ATTRIBUTE_REDECLARED" : { "code" : 1530, "message" : "document attribute '%s' is assigned multiple times" },
    "ERROR_QUERY_FUNCTION_NAME_UNKNOWN" : { "code" : 1540, "message" : "usage of unknown function '%s()'" },
    "ERROR_QUERY_FUNCTION_ARGUMENT_NUMBER_MISMATCH" : { "code" : 1541, "message" : "invalid number of arguments for function '%s()', expected number of arguments: minimum: %d, maximum: %d" },
    "ERROR_QUERY_FUNCTION_ARGUMENT_TYPE_MISMATCH" : { "code" : 1542, "message" : "invalid argument type in call to function '%s()'" },
    "ERROR_QUERY_INVALID_REGEX"    : { "code" : 1543, "message" : "invalid regex value" },
    "ERROR_QUERY_BIND_PARAMETERS_INVALID" : { "code" : 1550, "message" : "invalid structure of bind parameters" },
    "ERROR_QUERY_BIND_PARAMETER_MISSING" : { "code" : 1551, "message" : "no value specified for declared bind parameter '%s'" },
    "ERROR_QUERY_BIND_PARAMETER_UNDECLARED" : { "code" : 1552, "message" : "bind parameter '%s' was not declared in the query" },
    "ERROR_QUERY_BIND_PARAMETER_TYPE" : { "code" : 1553, "message" : "bind parameter '%s' has an invalid value or type" },
    "ERROR_QUERY_INVALID_LOGICAL_VALUE" : { "code" : 1560, "message" : "invalid logical value" },
    "ERROR_QUERY_INVALID_ARITHMETIC_VALUE" : { "code" : 1561, "message" : "invalid arithmetic value" },
    "ERROR_QUERY_DIVISION_BY_ZERO" : { "code" : 1562, "message" : "division by zero" },
    "ERROR_QUERY_ARRAY_EXPECTED"   : { "code" : 1563, "message" : "array expected" },
    "ERROR_QUERY_FAIL_CALLED"      : { "code" : 1569, "message" : "FAIL(%s) called" },
    "ERROR_QUERY_GEO_INDEX_MISSING" : { "code" : 1570, "message" : "no suitable geo index found for geo restriction on '%s'" },
    "ERROR_QUERY_FULLTEXT_INDEX_MISSING" : { "code" : 1571, "message" : "no suitable fulltext index found for fulltext query on '%s'" },
    "ERROR_QUERY_INVALID_DATE_VALUE" : { "code" : 1572, "message" : "invalid date value" },
    "ERROR_QUERY_MULTI_MODIFY"     : { "code" : 1573, "message" : "multi-modify query" },
    "ERROR_QUERY_INVALID_AGGREGATE_EXPRESSION" : { "code" : 1574, "message" : "invalid aggregate expression" },
    "ERROR_QUERY_COMPILE_TIME_OPTIONS" : { "code" : 1575, "message" : "query options must be readable at query compile time" },
    "ERROR_QUERY_EXCEPTION_OPTIONS" : { "code" : 1576, "message" : "query options expected" },
    "ERROR_QUERY_FORCED_INDEX_HINT_UNUSABLE" : { "code" : 1577, "message" : "could not use forced index hint" },
    "ERROR_QUERY_DISALLOWED_DYNAMIC_CALL" : { "code" : 1578, "message" : "disallowed dynamic call to '%s'" },
    "ERROR_QUERY_ACCESS_AFTER_MODIFICATION" : { "code" : 1579, "message" : "access after data-modification by %s" },
    "ERROR_QUERY_FUNCTION_INVALID_NAME" : { "code" : 1580, "message" : "invalid user function name" },
    "ERROR_QUERY_FUNCTION_INVALID_CODE" : { "code" : 1581, "message" : "invalid user function code" },
    "ERROR_QUERY_FUNCTION_NOT_FOUND" : { "code" : 1582, "message" : "user function '%s()' not found" },
    "ERROR_QUERY_FUNCTION_RUNTIME_ERROR" : { "code" : 1583, "message" : "user function runtime error: %s" },
    "ERROR_QUERY_BAD_JSON_PLAN"    : { "code" : 1590, "message" : "bad execution plan JSON" },
    "ERROR_QUERY_NOT_FOUND"        : { "code" : 1591, "message" : "query ID not found" },
    "ERROR_QUERY_IN_USE"           : { "code" : 1592, "message" : "query with this ID is in use" },
    "ERROR_QUERY_USER_ASSERT"      : { "code" : 1593, "message" : "%s" },
    "ERROR_QUERY_USER_WARN"        : { "code" : 1594, "message" : "%s" },
    "ERROR_CURSOR_NOT_FOUND"       : { "code" : 1600, "message" : "cursor not found" },
    "ERROR_CURSOR_BUSY"            : { "code" : 1601, "message" : "cursor is busy" },
    "ERROR_TRANSACTION_INTERNAL"   : { "code" : 1650, "message" : "internal transaction error" },
    "ERROR_TRANSACTION_NESTED"     : { "code" : 1651, "message" : "nested transactions detected" },
    "ERROR_TRANSACTION_UNREGISTERED_COLLECTION" : { "code" : 1652, "message" : "unregistered collection used in transaction" },
    "ERROR_TRANSACTION_DISALLOWED_OPERATION" : { "code" : 1653, "message" : "disallowed operation inside transaction" },
    "ERROR_TRANSACTION_ABORTED"    : { "code" : 1654, "message" : "transaction aborted" },
    "ERROR_TRANSACTION_NOT_FOUND"  : { "code" : 1655, "message" : "transaction not found" },
    "ERROR_USER_INVALID_NAME"      : { "code" : 1700, "message" : "invalid user name" },
    "ERROR_USER_INVALID_PASSWORD"  : { "code" : 1701, "message" : "invalid password" },
    "ERROR_USER_DUPLICATE"         : { "code" : 1702, "message" : "duplicate user" },
    "ERROR_USER_NOT_FOUND"         : { "code" : 1703, "message" : "user not found" },
    "ERROR_USER_EXTERNAL"          : { "code" : 1705, "message" : "user is external" },
    "ERROR_SERVICE_INVALID_NAME"   : { "code" : 1750, "message" : "invalid service name" },
    "ERROR_SERVICE_INVALID_MOUNT"  : { "code" : 1751, "message" : "invalid mount" },
    "ERROR_SERVICE_DOWNLOAD_FAILED" : { "code" : 1752, "message" : "service download failed" },
    "ERROR_SERVICE_UPLOAD_FAILED"  : { "code" : 1753, "message" : "service upload failed" },
    "ERROR_LDAP_CANNOT_INIT"       : { "code" : 1800, "message" : "cannot init a LDAP connection" },
    "ERROR_LDAP_CANNOT_SET_OPTION" : { "code" : 1801, "message" : "cannot set a LDAP option" },
    "ERROR_LDAP_CANNOT_BIND"       : { "code" : 1802, "message" : "cannot bind to a LDAP server" },
    "ERROR_LDAP_CANNOT_UNBIND"     : { "code" : 1803, "message" : "cannot unbind from a LDAP server" },
    "ERROR_LDAP_CANNOT_SEARCH"     : { "code" : 1804, "message" : "cannot issue a LDAP search" },
    "ERROR_LDAP_CANNOT_START_TLS"  : { "code" : 1805, "message" : "cannot start a TLS LDAP session" },
    "ERROR_LDAP_FOUND_NO_OBJECTS"  : { "code" : 1806, "message" : "LDAP didn't found any objects" },
    "ERROR_LDAP_NOT_ONE_USER_FOUND" : { "code" : 1807, "message" : "LDAP found zero ore more than one user" },
    "ERROR_LDAP_USER_NOT_IDENTIFIED" : { "code" : 1808, "message" : "LDAP found a user, but its not the desired one" },
    "ERROR_LDAP_INVALID_MODE"      : { "code" : 1820, "message" : "invalid ldap mode" },
    "ERROR_TASK_INVALID_ID"        : { "code" : 1850, "message" : "invalid task id" },
    "ERROR_TASK_DUPLICATE_ID"      : { "code" : 1851, "message" : "duplicate task id" },
    "ERROR_TASK_NOT_FOUND"         : { "code" : 1852, "message" : "task not found" },
    "ERROR_GRAPH_INVALID_GRAPH"    : { "code" : 1901, "message" : "invalid graph" },
    "ERROR_GRAPH_COULD_NOT_CREATE_GRAPH" : { "code" : 1902, "message" : "could not create graph" },
    "ERROR_GRAPH_INVALID_VERTEX"   : { "code" : 1903, "message" : "invalid vertex" },
    "ERROR_GRAPH_COULD_NOT_CREATE_VERTEX" : { "code" : 1904, "message" : "could not create vertex" },
    "ERROR_GRAPH_COULD_NOT_CHANGE_VERTEX" : { "code" : 1905, "message" : "could not change vertex" },
    "ERROR_GRAPH_INVALID_EDGE"     : { "code" : 1906, "message" : "invalid edge" },
    "ERROR_GRAPH_COULD_NOT_CREATE_EDGE" : { "code" : 1907, "message" : "could not create edge" },
    "ERROR_GRAPH_COULD_NOT_CHANGE_EDGE" : { "code" : 1908, "message" : "could not change edge" },
    "ERROR_GRAPH_TOO_MANY_ITERATIONS" : { "code" : 1909, "message" : "too many iterations - try increasing the value of 'maxIterations'" },
    "ERROR_GRAPH_INVALID_FILTER_RESULT" : { "code" : 1910, "message" : "invalid filter result" },
    "ERROR_GRAPH_COLLECTION_MULTI_USE" : { "code" : 1920, "message" : "multi use of edge collection in edge def" },
    "ERROR_GRAPH_COLLECTION_USE_IN_MULTI_GRAPHS" : { "code" : 1921, "message" : "edge collection already used in edge def" },
    "ERROR_GRAPH_CREATE_MISSING_NAME" : { "code" : 1922, "message" : "missing graph name" },
    "ERROR_GRAPH_CREATE_MALFORMED_EDGE_DEFINITION" : { "code" : 1923, "message" : "malformed edge definition" },
    "ERROR_GRAPH_NOT_FOUND"        : { "code" : 1924, "message" : "graph '%s' not found" },
    "ERROR_GRAPH_DUPLICATE"        : { "code" : 1925, "message" : "graph already exists" },
    "ERROR_GRAPH_VERTEX_COL_DOES_NOT_EXIST" : { "code" : 1926, "message" : "vertex collection does not exist or is not part of the graph" },
    "ERROR_GRAPH_WRONG_COLLECTION_TYPE_VERTEX" : { "code" : 1927, "message" : "not a vertex collection" },
    "ERROR_GRAPH_NOT_IN_ORPHAN_COLLECTION" : { "code" : 1928, "message" : "not in orphan collection" },
    "ERROR_GRAPH_COLLECTION_USED_IN_EDGE_DEF" : { "code" : 1929, "message" : "collection already used in edge def" },
    "ERROR_GRAPH_EDGE_COLLECTION_NOT_USED" : { "code" : 1930, "message" : "edge collection not used in graph" },
    "ERROR_GRAPH_NO_GRAPH_COLLECTION" : { "code" : 1932, "message" : "collection _graphs does not exist" },
    "ERROR_GRAPH_INVALID_EXAMPLE_ARRAY_OBJECT_STRING" : { "code" : 1933, "message" : "Invalid example type. Has to be String, Array or Object" },
    "ERROR_GRAPH_INVALID_EXAMPLE_ARRAY_OBJECT" : { "code" : 1934, "message" : "Invalid example type. Has to be Array or Object" },
    "ERROR_GRAPH_INVALID_NUMBER_OF_ARGUMENTS" : { "code" : 1935, "message" : "Invalid number of arguments. Expected: " },
    "ERROR_GRAPH_INVALID_PARAMETER" : { "code" : 1936, "message" : "Invalid parameter type." },
    "ERROR_GRAPH_INVALID_ID"       : { "code" : 1937, "message" : "Invalid id" },
    "ERROR_GRAPH_COLLECTION_USED_IN_ORPHANS" : { "code" : 1938, "message" : "collection used in orphans" },
    "ERROR_GRAPH_EDGE_COL_DOES_NOT_EXIST" : { "code" : 1939, "message" : "edge collection does not exist or is not part of the graph" },
    "ERROR_GRAPH_EMPTY"            : { "code" : 1940, "message" : "empty graph" },
    "ERROR_GRAPH_INTERNAL_DATA_CORRUPT" : { "code" : 1941, "message" : "internal graph data corrupt" },
    "ERROR_GRAPH_INTERNAL_EDGE_COLLECTION_ALREADY_SET" : { "code" : 1942, "message" : "edge collection already set" },
    "ERROR_GRAPH_CREATE_MALFORMED_ORPHAN_LIST" : { "code" : 1943, "message" : "malformed orphan list" },
    "ERROR_GRAPH_EDGE_DEFINITION_IS_DOCUMENT" : { "code" : 1944, "message" : "edge definition collection is a document collection" },
    "ERROR_SESSION_UNKNOWN"        : { "code" : 1950, "message" : "unknown session" },
    "ERROR_SESSION_EXPIRED"        : { "code" : 1951, "message" : "session expired" },
    "SIMPLE_CLIENT_UNKNOWN_ERROR"  : { "code" : 2000, "message" : "unknown client error" },
    "SIMPLE_CLIENT_COULD_NOT_CONNECT" : { "code" : 2001, "message" : "could not connect to server" },
    "SIMPLE_CLIENT_COULD_NOT_WRITE" : { "code" : 2002, "message" : "could not write to server" },
    "SIMPLE_CLIENT_COULD_NOT_READ" : { "code" : 2003, "message" : "could not read from server" },
    "COMMUNICATOR_REQUEST_ABORTED" : { "code" : 2100, "message" : "Request aborted" },
    "COMMUNICATOR_DISABLED"        : { "code" : 2101, "message" : "Communication was disabled" },
    "ERROR_INTERNAL_AQL"           : { "code" : 2200, "message" : "General internal AQL error" },
    "ERROR_WROTE_TOO_FEW_OUTPUT_REGISTERS" : { "code" : 2201, "message" : "An AQL block wrote too few output registers" },
    "ERROR_WROTE_TOO_MANY_OUTPUT_REGISTERS" : { "code" : 2202, "message" : "An AQL block wrote too many output registers" },
    "ERROR_WROTE_OUTPUT_REGISTER_TWICE" : { "code" : 2203, "message" : "An AQL block wrote an output register twice" },
    "ERROR_WROTE_IN_WRONG_REGISTER" : { "code" : 2204, "message" : "An AQL block wrote in a register that is not its output" },
    "ERROR_INPUT_REGISTERS_NOT_COPIED" : { "code" : 2205, "message" : "An AQL block did not copy its input registers" },
    "ERROR_MALFORMED_MANIFEST_FILE" : { "code" : 3000, "message" : "failed to parse manifest file" },
    "ERROR_INVALID_SERVICE_MANIFEST" : { "code" : 3001, "message" : "manifest file is invalid" },
    "ERROR_SERVICE_FILES_MISSING"  : { "code" : 3002, "message" : "service files missing" },
    "ERROR_SERVICE_FILES_OUTDATED" : { "code" : 3003, "message" : "service files outdated" },
    "ERROR_INVALID_FOXX_OPTIONS"   : { "code" : 3004, "message" : "service options are invalid" },
    "ERROR_INVALID_MOUNTPOINT"     : { "code" : 3007, "message" : "invalid mountpath" },
    "ERROR_SERVICE_NOT_FOUND"      : { "code" : 3009, "message" : "service not found" },
    "ERROR_SERVICE_NEEDS_CONFIGURATION" : { "code" : 3010, "message" : "service needs configuration" },
    "ERROR_SERVICE_MOUNTPOINT_CONFLICT" : { "code" : 3011, "message" : "service already exists" },
    "ERROR_SERVICE_MANIFEST_NOT_FOUND" : { "code" : 3012, "message" : "missing manifest file" },
    "ERROR_SERVICE_OPTIONS_MALFORMED" : { "code" : 3013, "message" : "failed to parse service options" },
    "ERROR_SERVICE_SOURCE_NOT_FOUND" : { "code" : 3014, "message" : "source path not found" },
    "ERROR_SERVICE_SOURCE_ERROR"   : { "code" : 3015, "message" : "error resolving source" },
    "ERROR_SERVICE_UNKNOWN_SCRIPT" : { "code" : 3016, "message" : "unknown script" },
    "ERROR_MODULE_NOT_FOUND"       : { "code" : 3100, "message" : "cannot locate module" },
    "ERROR_MODULE_SYNTAX_ERROR"    : { "code" : 3101, "message" : "syntax error in module" },
    "ERROR_MODULE_FAILURE"         : { "code" : 3103, "message" : "failed to invoke module" },
    "ERROR_NO_SMART_COLLECTION"    : { "code" : 4000, "message" : "collection is not smart" },
    "ERROR_NO_SMART_GRAPH_ATTRIBUTE" : { "code" : 4001, "message" : "smart graph attribute not given" },
    "ERROR_CANNOT_DROP_SMART_COLLECTION" : { "code" : 4002, "message" : "cannot drop this smart collection" },
    "ERROR_KEY_MUST_BE_PREFIXED_WITH_SMART_GRAPH_ATTRIBUTE" : { "code" : 4003, "message" : "in smart vertex collections _key must be prefixed with the value of the smart graph attribute" },
    "ERROR_ILLEGAL_SMART_GRAPH_ATTRIBUTE" : { "code" : 4004, "message" : "attribute cannot be used as smart graph attribute" },
    "ERROR_SMART_GRAPH_ATTRIBUTE_MISMATCH" : { "code" : 4005, "message" : "smart graph attribute mismatch" },
    "ERROR_INVALID_SMART_JOIN_ATTRIBUTE" : { "code" : 4006, "message" : "invalid smart join attribute declaration" },
    "ERROR_KEY_MUST_BE_PREFIXED_WITH_SMART_JOIN_ATTRIBUTE" : { "code" : 4007, "message" : "shard key value must be prefixed with the value of the smart join attribute" },
    "ERROR_NO_SMART_JOIN_ATTRIBUTE" : { "code" : 4008, "message" : "smart join attribute not given or invalid" },
    "ERROR_CLUSTER_MUST_NOT_CHANGE_SMART_JOIN_ATTRIBUTE" : { "code" : 4009, "message" : "must not change the value of the smartJoinAttribute" },
    "ERROR_CLUSTER_REPAIRS_FAILED" : { "code" : 5000, "message" : "error during cluster repairs" },
    "ERROR_CLUSTER_REPAIRS_NOT_ENOUGH_HEALTHY" : { "code" : 5001, "message" : "not enough (healthy) db servers" },
    "ERROR_CLUSTER_REPAIRS_REPLICATION_FACTOR_VIOLATED" : { "code" : 5002, "message" : "replication factor violated during cluster repairs" },
    "ERROR_CLUSTER_REPAIRS_NO_DBSERVERS" : { "code" : 5003, "message" : "no dbservers during cluster repairs" },
    "ERROR_CLUSTER_REPAIRS_MISMATCHING_LEADERS" : { "code" : 5004, "message" : "mismatching leaders during cluster repairs" },
    "ERROR_CLUSTER_REPAIRS_MISMATCHING_FOLLOWERS" : { "code" : 5005, "message" : "mismatching followers during cluster repairs" },
    "ERROR_CLUSTER_REPAIRS_INCONSISTENT_ATTRIBUTES" : { "code" : 5006, "message" : "inconsistent attributes during cluster repairs" },
    "ERROR_CLUSTER_REPAIRS_MISMATCHING_SHARDS" : { "code" : 5007, "message" : "mismatching shards during cluster repairs" },
    "ERROR_CLUSTER_REPAIRS_JOB_FAILED" : { "code" : 5008, "message" : "move shard job failed during cluster repairs" },
    "ERROR_CLUSTER_REPAIRS_JOB_DISAPPEARED" : { "code" : 5009, "message" : "move shard job disappeared during cluster repairs" },
    "ERROR_CLUSTER_REPAIRS_OPERATION_FAILED" : { "code" : 5010, "message" : "agency transaction failed during cluster repairs" },
    "ERROR_AGENCY_INQUIRY_SYNTAX"  : { "code" : 20001, "message" : "Illegal inquiry syntax" },
    "ERROR_AGENCY_INFORM_MUST_BE_OBJECT" : { "code" : 20011, "message" : "Inform message must be an object." },
    "ERROR_AGENCY_INFORM_MUST_CONTAIN_TERM" : { "code" : 20012, "message" : "Inform message must contain uint parameter 'term'" },
    "ERROR_AGENCY_INFORM_MUST_CONTAIN_ID" : { "code" : 20013, "message" : "Inform message must contain string parameter 'id'" },
    "ERROR_AGENCY_INFORM_MUST_CONTAIN_ACTIVE" : { "code" : 20014, "message" : "Inform message must contain array 'active'" },
    "ERROR_AGENCY_INFORM_MUST_CONTAIN_POOL" : { "code" : 20015, "message" : "Inform message must contain object 'pool'" },
    "ERROR_AGENCY_INFORM_MUST_CONTAIN_MIN_PING" : { "code" : 20016, "message" : "Inform message must contain object 'min ping'" },
    "ERROR_AGENCY_INFORM_MUST_CONTAIN_MAX_PING" : { "code" : 20017, "message" : "Inform message must contain object 'max ping'" },
    "ERROR_AGENCY_INFORM_MUST_CONTAIN_TIMEOUT_MULT" : { "code" : 20018, "message" : "Inform message must contain object 'timeoutMult'" },
    "ERROR_AGENCY_INQUIRE_CLIENT_ID_MUST_BE_STRING" : { "code" : 20020, "message" : "Inquiry failed" },
    "ERROR_AGENCY_CANNOT_REBUILD_DBS" : { "code" : 20021, "message" : "Cannot rebuild readDB and spearHead" },
    "ERROR_SUPERVISION_GENERAL_FAILURE" : { "code" : 20501, "message" : "general supervision failure" },
    "ERROR_DISPATCHER_IS_STOPPING" : { "code" : 21001, "message" : "dispatcher stopped" },
    "ERROR_QUEUE_UNKNOWN"          : { "code" : 21002, "message" : "named queue does not exist" },
    "ERROR_QUEUE_FULL"             : { "code" : 21003, "message" : "named queue is full" },
    "ERROR_ACTION_ALREADY_REGISTERED" : { "code" : 6001, "message" : "maintenance action already registered" },
    "ERROR_ACTION_OPERATION_UNABORTABLE" : { "code" : 6002, "message" : "this maintenance action cannot be stopped" },
    "ERROR_ACTION_UNFINISHED"      : { "code" : 6003, "message" : "maintenance action still processing" },
    "ERROR_NO_SUCH_ACTION"         : { "code" : 6004, "message" : "no such maintenance action" }
  };

  // For compatibility with <= 3.3
  internal.errors.ERROR_ARANGO_COLLECTION_NOT_FOUND = internal.errors.ERROR_ARANGO_DATA_SOURCE_NOT_FOUND;
}());

