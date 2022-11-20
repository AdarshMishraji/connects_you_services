// Original file: src/proto/chat.proto


export interface InsertEmotionForMessageRequest {
  'messageId'?: (string);
  'emotionString'?: (string);
  'emotionSendByUserId'?: (string);
}

export interface InsertEmotionForMessageRequestOutput {
  'messageId': (string);
  'emotionString': (string);
  'emotionSendByUserId': (string);
}
