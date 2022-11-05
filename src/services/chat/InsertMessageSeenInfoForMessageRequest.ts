// Original file: src/proto/chat.proto


export interface InsertMessageSeenInfoForMessageRequest {
  'messageId'?: (string);
  'seenByUserId'?: (string);
}

export interface InsertMessageSeenInfoForMessageRequestOutput {
  'messageId': (string);
  'seenByUserId': (string);
}
