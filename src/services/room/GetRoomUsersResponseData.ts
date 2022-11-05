// Original file: src/proto/room.proto

import type { RoomUser as _room_RoomUser, RoomUserOutput as _room_RoomUserOutput } from '../room/RoomUser';

export interface GetRoomUsersResponseData {
  'roomUsers'?: (_room_RoomUser)[];
}

export interface GetRoomUsersResponseDataOutput {
  'roomUsers': (_room_RoomUserOutput)[];
}
