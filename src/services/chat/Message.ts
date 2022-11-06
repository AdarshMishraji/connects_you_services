// Original file: src/proto/chat.proto

import type { MessageTypeEnum as _chat_MessageTypeEnum } from '../chat/MessageTypeEnum';
import type { Emotion as _chat_Emotion, EmotionOutput as _chat_EmotionOutput } from '../chat/Emotion';
import type { MessageSeenInfo as _chat_MessageSeenInfo, MessageSeenInfoOutput as _chat_MessageSeenInfoOutput } from '../chat/MessageSeenInfo';

export interface Message {
  'messageText'?: (string);
  'messageType'?: (_chat_MessageTypeEnum | keyof typeof _chat_MessageTypeEnum);
  'roomId'?: (string);
  'senderUserId'?: (string);
  'receiverIserId'?: (string);
  'emotionList'?: (_chat_Emotion)[];
  'isDeleted'?: (boolean);
  'haveThreadId'?: (string);
  'belongsToThreadId'?: (string);
  'messageSeenInfo'?: (_chat_MessageSeenInfo)[];
  'createdAt'?: (string);
  'updatedAt'?: (string);
  '_receiverIserId'?: "receiverIserId";
  '_isDeleted'?: "isDeleted";
  '_haveThreadId'?: "haveThreadId";
  '_belongsToThreadId'?: "belongsToThreadId";
}

export interface MessageOutput {
  'messageText': (string);
  'messageType': (keyof typeof _chat_MessageTypeEnum);
  'roomId': (string);
  'senderUserId': (string);
  'receiverIserId'?: (string);
  'emotionList': (_chat_EmotionOutput)[];
  'isDeleted'?: (boolean);
  'haveThreadId'?: (string);
  'belongsToThreadId'?: (string);
  'messageSeenInfo': (_chat_MessageSeenInfoOutput)[];
  'createdAt': (string);
  'updatedAt': (string);
  '_receiverIserId': "receiverIserId";
  '_isDeleted': "isDeleted";
  '_haveThreadId': "haveThreadId";
  '_belongsToThreadId': "belongsToThreadId";
}
