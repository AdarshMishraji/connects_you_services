// Original file: src/proto/room.proto

import type { Room as _room_Room, RoomOutput as _room_RoomOutput } from '../room/Room';

export interface RoomData {
  'rooms'?: (_room_Room | null);
}

export interface RoomDataOutput {
  'rooms': (_room_RoomOutput | null);
}
