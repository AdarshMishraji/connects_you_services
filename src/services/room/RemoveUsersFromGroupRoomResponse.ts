// Original file: src/proto/room.proto

import type { ResponseStatusEnum as _room_ResponseStatusEnum } from '../room/ResponseStatusEnum';

export interface RemoveUsersFromGroupRoomResponse {
  'status'?: (_room_ResponseStatusEnum | keyof typeof _room_ResponseStatusEnum);
}

export interface RemoveUsersFromGroupRoomResponseOutput {
  'status': (keyof typeof _room_ResponseStatusEnum);
}
