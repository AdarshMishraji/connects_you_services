// Original file: src/proto/room.proto

import type { ResponseStatusEnum as _room_ResponseStatusEnum } from '../room/ResponseStatusEnum';
import type { GetUserRoomsData as _room_GetUserRoomsData, GetUserRoomsDataOutput as _room_GetUserRoomsDataOutput } from '../room/GetUserRoomsData';

export interface GetUserRoomsResponse {
  'status'?: (_room_ResponseStatusEnum | keyof typeof _room_ResponseStatusEnum);
  'data'?: (_room_GetUserRoomsData | null);
}

export interface GetUserRoomsResponseOutput {
  'status': (keyof typeof _room_ResponseStatusEnum);
  'data': (_room_GetUserRoomsDataOutput | null);
}
