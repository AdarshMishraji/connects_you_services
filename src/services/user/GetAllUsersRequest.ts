// Original file: src/proto/user.proto


export interface GetAllUsersRequest {
  'limit'?: (number);
  'offset'?: (number);
  'exceptUserId'?: (string);
  '_limit'?: "limit";
  '_offset'?: "offset";
  '_exceptUserId'?: "exceptUserId";
}

export interface GetAllUsersRequestOutput {
  'limit'?: (number);
  'offset'?: (number);
  'exceptUserId'?: (string);
  '_limit': "limit";
  '_offset': "offset";
  '_exceptUserId': "exceptUserId";
}
