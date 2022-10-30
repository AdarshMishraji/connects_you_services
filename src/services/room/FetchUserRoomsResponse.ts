// Original file: src/proto/room.proto

import type { ResponseStatusEnum as _room_ResponseStatusEnum } from '../room/ResponseStatusEnum';
import type { FetchUserRoomsData as _room_FetchUserRoomsData, FetchUserRoomsDataOutput as _room_FetchUserRoomsDataOutput } from '../room/FetchUserRoomsData';

export interface FetchUserRoomsResponse {
  'status'?: (_room_ResponseStatusEnum | keyof typeof _room_ResponseStatusEnum);
  'data'?: (_room_FetchUserRoomsData | null);
}

export interface FetchUserRoomsResponseOutput {
  'status': (keyof typeof _room_ResponseStatusEnum);
  'data': (_room_FetchUserRoomsDataOutput | null);
}
