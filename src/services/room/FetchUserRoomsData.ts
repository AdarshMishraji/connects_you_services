// Original file: src/proto/room.proto

import type { Room as _room_Room, RoomOutput as _room_RoomOutput } from '../room/Room';

export interface FetchUserRoomsData {
  'rooms'?: (_room_Room)[];
}

export interface FetchUserRoomsDataOutput {
  'rooms': (_room_RoomOutput)[];
}
