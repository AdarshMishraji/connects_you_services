// Original file: src/proto/room.proto

import type { Room as _room_Room, RoomOutput as _room_RoomOutput } from '../room/Room';

export interface GetUserRoomsData {
  'rooms'?: (_room_Room)[];
}

export interface GetUserRoomsDataOutput {
  'rooms': (_room_RoomOutput)[];
}
