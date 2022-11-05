// Original file: src/proto/chat.proto

import type { ResponseStatusEnum as _chat_ResponseStatusEnum } from '../chat/ResponseStatusEnum';
import type { RemoveMessagesResponseData as _chat_RemoveMessagesResponseData, RemoveMessagesResponseDataOutput as _chat_RemoveMessagesResponseDataOutput } from '../chat/RemoveMessagesResponseData';

export interface RemoveMessagesResponse {
  'status'?: (_chat_ResponseStatusEnum | keyof typeof _chat_ResponseStatusEnum);
  'data'?: (_chat_RemoveMessagesResponseData | null);
}

export interface RemoveMessagesResponseOutput {
  'status': (keyof typeof _chat_ResponseStatusEnum);
  'data': (_chat_RemoveMessagesResponseDataOutput | null);
}
