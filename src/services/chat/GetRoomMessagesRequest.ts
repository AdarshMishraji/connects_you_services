// Original file: src/proto/chat.proto


export interface GetRoomMessagesRequest {
  'roomId'?: (string);
  'limit'?: (number);
  'offset'?: (number);
}

export interface GetRoomMessagesRequestOutput {
  'roomId': (string);
  'limit': (number);
  'offset': (number);
}
