// Original file: src/proto/room.proto

import type { RoomUserRoleEnum as _room_RoomUserRoleEnum } from '../room/RoomUserRoleEnum';

export interface UpdateUserRoleInGroupRoomRequest {
  'roomId'?: (string);
  'userId'?: (string);
  'userRole'?: (_room_RoomUserRoleEnum | keyof typeof _room_RoomUserRoleEnum);
  'creatorUserId'?: (string);
}

export interface UpdateUserRoleInGroupRoomRequestOutput {
  'roomId': (string);
  'userId': (string);
  'userRole': (keyof typeof _room_RoomUserRoleEnum);
  'creatorUserId': (string);
}
