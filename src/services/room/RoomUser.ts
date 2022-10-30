// Original file: src/proto/room.proto

import type { RoomUserRoleEnum as _room_RoomUserRoleEnum } from '../room/RoomUserRoleEnum';

export interface RoomUser {
  'userId'?: (string);
  'userRole'?: (_room_RoomUserRoleEnum | keyof typeof _room_RoomUserRoleEnum);
  'joinedAt'?: (string);
  'email'?: (string);
  'name'?: (string);
  'photoUrl'?: (string);
  'description'?: (string);
  'publicKey'?: (string);
  '_email'?: "email";
  '_name'?: "name";
  '_photoUrl'?: "photoUrl";
  '_description'?: "description";
  '_publicKey'?: "publicKey";
}

export interface RoomUserOutput {
  'userId': (string);
  'userRole': (keyof typeof _room_RoomUserRoleEnum);
  'joinedAt': (string);
  'email'?: (string);
  'name'?: (string);
  'photoUrl'?: (string);
  'description'?: (string);
  'publicKey'?: (string);
  '_email': "email";
  '_name': "name";
  '_photoUrl': "photoUrl";
  '_description': "description";
  '_publicKey': "publicKey";
}
