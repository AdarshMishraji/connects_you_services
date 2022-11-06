// Original file: src/proto/chat.proto


export interface InsertMessageSeenInfoForMessagesRequest {
  'messageIds'?: (string)[];
  'seenByUserId'?: (string);
}

export interface InsertMessageSeenInfoForMessagesRequestOutput {
  'messageIds': (string)[];
  'seenByUserId': (string);
}
