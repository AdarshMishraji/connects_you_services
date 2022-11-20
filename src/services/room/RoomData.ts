// Original file: src/proto/room.proto

import type { Room as _room_Room, RoomOutput as _room_RoomOutput } from '../room/Room';

export interface RoomData {
  'room'?: (_room_Room | null);
}

export interface RoomDataOutput {
  'room': (_room_RoomOutput | null);
}
