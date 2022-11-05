// Original file: src/proto/user.proto


export interface GetUserLoginHistoryRequest {
  'userId'?: (string);
  'limit'?: (number);
  'offset'?: (number);
  'nonValidAllowed'?: (boolean);
  '_limit'?: "limit";
  '_offset'?: "offset";
  '_nonValidAllowed'?: "nonValidAllowed";
}

export interface GetUserLoginHistoryRequestOutput {
  'userId': (string);
  'limit'?: (number);
  'offset'?: (number);
  'nonValidAllowed'?: (boolean);
  '_limit': "limit";
  '_offset': "offset";
  '_nonValidAllowed': "nonValidAllowed";
}
