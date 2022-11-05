// Original file: src/proto/chat.proto


export interface DeleteRoomThreadRequest {
  'threadId'?: (string);
  'roomId'?: (string);
  'messageId'?: (string);
}

export interface DeleteRoomThreadRequestOutput {
  'threadId': (string);
  'roomId': (string);
  'messageId': (string);
}
