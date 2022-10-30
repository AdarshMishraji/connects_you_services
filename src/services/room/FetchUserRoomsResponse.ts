// Original file: src/proto/room.proto

import type { ResponseStatusEnum as _room_ResponseStatusEnum } from '../room/ResponseStatusEnum';
import type { RepeatedRoomData as _room_RepeatedRoomData, RepeatedRoomDataOutput as _room_RepeatedRoomDataOutput } from '../room/RepeatedRoomData';

export interface FetchUserRoomsResponse {
  'status'?: (_room_ResponseStatusEnum | keyof typeof _room_ResponseStatusEnum);
  'data'?: (_room_RepeatedRoomData | null);
}

export interface FetchUserRoomsResponseOutput {
  'status': (keyof typeof _room_ResponseStatusEnum);
  'data': (_room_RepeatedRoomDataOutput | null);
}
