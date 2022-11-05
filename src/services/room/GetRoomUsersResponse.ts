// Original file: src/proto/room.proto

import type { ResponseStatusEnum as _room_ResponseStatusEnum } from '../room/ResponseStatusEnum';
import type { GetRoomUsersResponseData as _room_GetRoomUsersResponseData, GetRoomUsersResponseDataOutput as _room_GetRoomUsersResponseDataOutput } from '../room/GetRoomUsersResponseData';

export interface GetRoomUsersResponse {
  'status'?: (_room_ResponseStatusEnum | keyof typeof _room_ResponseStatusEnum);
  'data'?: (_room_GetRoomUsersResponseData | null);
}

export interface GetRoomUsersResponseOutput {
  'status': (keyof typeof _room_ResponseStatusEnum);
  'data': (_room_GetRoomUsersResponseDataOutput | null);
}
