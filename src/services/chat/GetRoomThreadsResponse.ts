// Original file: src/proto/chat.proto

import type { ResponseStatusEnum as _chat_ResponseStatusEnum } from '../chat/ResponseStatusEnum';
import type { GetRoomThreadsResponseData as _chat_GetRoomThreadsResponseData, GetRoomThreadsResponseDataOutput as _chat_GetRoomThreadsResponseDataOutput } from '../chat/GetRoomThreadsResponseData';

export interface GetRoomThreadsResponse {
  'status'?: (_chat_ResponseStatusEnum | keyof typeof _chat_ResponseStatusEnum);
  'data'?: (_chat_GetRoomThreadsResponseData | null);
}

export interface GetRoomThreadsResponseOutput {
  'status': (keyof typeof _chat_ResponseStatusEnum);
  'data': (_chat_GetRoomThreadsResponseDataOutput | null);
}
