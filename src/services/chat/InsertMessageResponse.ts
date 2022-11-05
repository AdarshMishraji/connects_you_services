// Original file: src/proto/chat.proto

import type { ResponseStatusEnum as _chat_ResponseStatusEnum } from '../chat/ResponseStatusEnum';
import type { InsertMessageResponseData as _chat_InsertMessageResponseData, InsertMessageResponseDataOutput as _chat_InsertMessageResponseDataOutput } from '../chat/InsertMessageResponseData';

export interface InsertMessageResponse {
  'status'?: (_chat_ResponseStatusEnum | keyof typeof _chat_ResponseStatusEnum);
  'data'?: (_chat_InsertMessageResponseData | null);
}

export interface InsertMessageResponseOutput {
  'status': (keyof typeof _chat_ResponseStatusEnum);
  'data': (_chat_InsertMessageResponseDataOutput | null);
}
