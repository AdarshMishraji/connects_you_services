// Original file: src/proto/room.proto

import type { RoomUserRoleEnum as _room_RoomUserRoleEnum } from '../room/RoomUserRoleEnum';

export interface RoomUsers {
  'userId'?: (string);
  'userRole'?: (_room_RoomUserRoleEnum | keyof typeof _room_RoomUserRoleEnum);
  'joinedAt'?: (string);
}

export interface RoomUsersOutput {
  'userId': (string);
  'userRole': (keyof typeof _room_RoomUserRoleEnum);
  'joinedAt': (string);
}
