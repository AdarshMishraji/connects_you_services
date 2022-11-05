// Original file: src/proto/chat.proto

import type { ResponseStatusEnum as _chat_ResponseStatusEnum } from '../chat/ResponseStatusEnum';
import type { GetUserMessagesResponseData as _chat_GetUserMessagesResponseData, GetUserMessagesResponseDataOutput as _chat_GetUserMessagesResponseDataOutput } from '../chat/GetUserMessagesResponseData';

export interface GetUserMessagesResponse {
  'status'?: (_chat_ResponseStatusEnum | keyof typeof _chat_ResponseStatusEnum);
  'data'?: (_chat_GetUserMessagesResponseData | null);
}

export interface GetUserMessagesResponseOutput {
  'status': (keyof typeof _chat_ResponseStatusEnum);
  'data': (_chat_GetUserMessagesResponseDataOutput | null);
}
