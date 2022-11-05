// Original file: src/proto/chat.proto

import type { ResponseStatusEnum as _chat_ResponseStatusEnum } from '../chat/ResponseStatusEnum';
import type { GetThreadMessagesResponseData as _chat_GetThreadMessagesResponseData, GetThreadMessagesResponseDataOutput as _chat_GetThreadMessagesResponseDataOutput } from '../chat/GetThreadMessagesResponseData';

export interface GetThreadMessagesResponse {
  'status'?: (_chat_ResponseStatusEnum | keyof typeof _chat_ResponseStatusEnum);
  'data'?: (_chat_GetThreadMessagesResponseData | null);
}

export interface GetThreadMessagesResponseOutput {
  'status': (keyof typeof _chat_ResponseStatusEnum);
  'data': (_chat_GetThreadMessagesResponseDataOutput | null);
}
