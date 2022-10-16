// Original file: src/proto/user.proto


export interface AllUsersRequest {
  'limit'?: (number);
  'offset'?: (number);
  'exceptUserId'?: (string);
  '_limit'?: "limit";
  '_offset'?: "offset";
  '_exceptUserId'?: "exceptUserId";
}

export interface AllUsersRequestOutput {
  'limit'?: (number);
  'offset'?: (number);
  'exceptUserId'?: (string);
  '_limit': "limit";
  '_offset': "offset";
  '_exceptUserId': "exceptUserId";
}
