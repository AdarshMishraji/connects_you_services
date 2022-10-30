// Original file: src/proto/room.proto

import type { RoomTypesEnum as _room_RoomTypesEnum } from '../room/RoomTypesEnum';
import type { RoomUsers as _room_RoomUsers, RoomUsersOutput as _room_RoomUsersOutput } from '../room/RoomUsers';

export interface Room {
  'roomId'?: (string);
  'roomName'?: (string);
  'roomLogoUrl'?: (string);
  'roomDescription'?: (string);
  'roomType'?: (_room_RoomTypesEnum | keyof typeof _room_RoomTypesEnum);
  'roomUsers'?: (_room_RoomUsers)[];
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
  'roomUsers': (_room_RoomUsersOutput)[];
  'createdByUserId': (string);
  'createdAt': (string);
  'updatedAt': (string);
  '_roomName': "roomName";
  '_roomLogoUrl': "roomLogoUrl";
  '_roomDescription': "roomDescription";
  '_roomType': "roomType";
}
