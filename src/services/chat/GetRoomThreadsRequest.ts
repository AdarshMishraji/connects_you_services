// Original file: src/proto/chat.proto


export interface GetRoomThreadsRequest {
  'roomId'?: (string);
  'limit'?: (number);
  'offset'?: (number);
}

export interface GetRoomThreadsRequestOutput {
  'roomId': (string);
  'limit': (number);
  'offset': (number);
}
