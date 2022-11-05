// Original file: src/proto/chat.proto

import type { MessageTypeEnum as _chat_MessageTypeEnum } from '../chat/MessageTypeEnum';

export interface InsertMessageRequest {
  'messageText'?: (string);
  'messageType'?: (_chat_MessageTypeEnum | keyof typeof _chat_MessageTypeEnum);
  'roomId'?: (string);
  'senderUserId'?: (string);
  'replyToMessageId'?: (string);
  'receiverUserId'?: (string);
  'belongsToThreadId'?: (string);
  '_receiverUserId'?: "receiverUserId";
  '_belongsToThreadId'?: "belongsToThreadId";
}

export interface InsertMessageRequestOutput {
  'messageText': (string);
  'messageType': (keyof typeof _chat_MessageTypeEnum);
  'roomId': (string);
  'senderUserId': (string);
  'replyToMessageId': (string);
  'receiverUserId'?: (string);
  'belongsToThreadId'?: (string);
  '_receiverUserId': "receiverUserId";
  '_belongsToThreadId': "belongsToThreadId";
}
