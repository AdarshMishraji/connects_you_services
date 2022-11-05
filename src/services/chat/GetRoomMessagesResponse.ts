// Original file: src/proto/chat.proto

import type { ResponseStatusEnum as _chat_ResponseStatusEnum } from '../chat/ResponseStatusEnum';
import type { GetRoomMessagesResponseData as _chat_GetRoomMessagesResponseData, GetRoomMessagesResponseDataOutput as _chat_GetRoomMessagesResponseDataOutput } from '../chat/GetRoomMessagesResponseData';

export interface GetRoomMessagesResponse {
  'status'?: (_chat_ResponseStatusEnum | keyof typeof _chat_ResponseStatusEnum);
  'data'?: (_chat_GetRoomMessagesResponseData | null);
}

export interface GetRoomMessagesResponseOutput {
  'status': (keyof typeof _chat_ResponseStatusEnum);
  'data': (_chat_GetRoomMessagesResponseDataOutput | null);
}
