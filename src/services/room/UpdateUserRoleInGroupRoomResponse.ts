// Original file: src/proto/room.proto

import type { ResponseStatusEnum as _room_ResponseStatusEnum } from '../room/ResponseStatusEnum';
import type { RoomData as _room_RoomData, RoomDataOutput as _room_RoomDataOutput } from '../room/RoomData';

export interface UpdateUserRoleInGroupRoomResponse {
  'status'?: (_room_ResponseStatusEnum | keyof typeof _room_ResponseStatusEnum);
  'data'?: (_room_RoomData | null);
}

export interface UpdateUserRoleInGroupRoomResponseOutput {
  'status': (keyof typeof _room_ResponseStatusEnum);
  'data': (_room_RoomDataOutput | null);
}
