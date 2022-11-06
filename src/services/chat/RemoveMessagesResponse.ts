// Original file: src/proto/chat.proto

import type { ResponseStatusEnum as _chat_ResponseStatusEnum } from '../chat/ResponseStatusEnum';

export interface RemoveMessagesResponse {
  'status'?: (_chat_ResponseStatusEnum | keyof typeof _chat_ResponseStatusEnum);
}

export interface RemoveMessagesResponseOutput {
  'status': (keyof typeof _chat_ResponseStatusEnum);
}
