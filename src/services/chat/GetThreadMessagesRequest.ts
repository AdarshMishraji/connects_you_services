// Original file: src/proto/chat.proto


export interface GetThreadMessagesRequest {
  'threadId'?: (string);
  'limit'?: (number);
  'offset'?: (number);
}

export interface GetThreadMessagesRequestOutput {
  'threadId': (string);
  'limit': (number);
  'offset': (number);
}
