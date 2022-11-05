// Original file: src/proto/chat.proto


export interface GetUserMessagesRequest {
  'userId'?: (string);
  'limit'?: (number);
  'offset'?: (number);
}

export interface GetUserMessagesRequestOutput {
  'userId': (string);
  'limit': (number);
  'offset': (number);
}
