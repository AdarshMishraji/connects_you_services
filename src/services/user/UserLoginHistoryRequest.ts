// Original file: src/proto/user.proto


export interface UserLoginHistoryRequest {
  'userId'?: (string);
  'limit'?: (number);
  'offset'?: (number);
  'nonValidAllowed'?: (boolean);
  '_limit'?: "limit";
  '_offset'?: "offset";
  '_nonValidAllowed'?: "nonValidAllowed";
}

export interface UserLoginHistoryRequestOutput {
  'userId': (string);
  'limit'?: (number);
  'offset'?: (number);
  'nonValidAllowed'?: (boolean);
  '_limit': "limit";
  '_offset': "offset";
  '_nonValidAllowed': "nonValidAllowed";
}
