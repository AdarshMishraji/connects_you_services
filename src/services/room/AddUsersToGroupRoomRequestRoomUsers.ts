// Original file: src/proto/room.proto

import type { RoomUserRoleEnum as _room_RoomUserRoleEnum } from '../room/RoomUserRoleEnum';

export interface AddUsersToGroupRoomRequestRoomUsers {
  'userId'?: (string);
  'userRole'?: (_room_RoomUserRoleEnum | keyof typeof _room_RoomUserRoleEnum);
}

export interface AddUsersToGroupRoomRequestRoomUsersOutput {
  'userId': (string);
  'userRole': (keyof typeof _room_RoomUserRoleEnum);
}
