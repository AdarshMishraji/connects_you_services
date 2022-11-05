// Original file: src/proto/chat.proto

import type { ResponseStatusEnum as _chat_ResponseStatusEnum } from '../chat/ResponseStatusEnum';

export interface CreateMessageThreadResponse {
  'status'?: (_chat_ResponseStatusEnum | keyof typeof _chat_ResponseStatusEnum);
}

export interface CreateMessageThreadResponseOutput {
  'status': (keyof typeof _chat_ResponseStatusEnum);
}
