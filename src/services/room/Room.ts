// Original file: src/proto/room.proto

import type { RoomTypesEnum as _room_RoomTypesEnum } from '../room/RoomTypesEnum';
import type { RoomUser as _room_RoomUser, RoomUserOutput as _room_RoomUserOutput } from '../room/RoomUser';

export interface Room {
  'roomId'?: (string);
  'roomName'?: (string);
  'roomLogoUrl'?: (string);
  'roomDescription'?: (string);
  'roomType'?: (_room_RoomTypesEnum | keyof typeof _room_RoomTypesEnum);
  'roomUsers'?: (_room_RoomUser)[];
  'createdByUserId'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  '_roomName'?: "roomName";
  '_roomLogoUrl'?: "roomLogoUrl";
  '_roomDescription'?: "roomDescription";
  '_roomType'?: "roomType";
}

export interface RoomOutput {
  'roomId': (string);
  'roomName'?: (string);
  'roomLogoUrl'?: (string);
  'roomDescription'?: (string);
  'roomType'?: (keyof typeof _room_RoomTypesEnum);
  'roomUsers': (_room_RoomUserOutput)[];
  'createdByUserId': (string);
  'createdAt': (string);
  'updatedAt': (string);
  '_roomName': "roomName";
  '_roomLogoUrl': "roomLogoUrl";
  '_roomDescription': "roomDescription";
  '_roomType': "roomType";
}
