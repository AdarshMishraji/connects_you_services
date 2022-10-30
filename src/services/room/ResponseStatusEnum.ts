// Original file: src/proto/room.proto

export enum ResponseStatusEnum {
  SUCCESS = 0,
  PARTIAL_DATA = 1,
  NO_DATA_ERROR = 2,
  BAD_REQUEST_ERROR = 3,
  UNAUTHORIZED_ERROR = 4,
  FORBIDDEN_ERROR = 5,
  NOT_FOUND_ERROR = 6,
  NOT_ACCEPTED_ERROR = 7,
  ALREADY_EXISTS_ERROR = 8,
  INTERNAL_SERVER_ERROR = 9,
}
