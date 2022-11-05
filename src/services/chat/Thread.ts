// Original file: src/proto/chat.proto


export interface Thread {
  'threadId'?: (string);
  'roomId'?: (string);
  'messageId'?: (string);
}

export interface ThreadOutput {
  'threadId': (string);
  'roomId': (string);
  'messageId': (string);
}
