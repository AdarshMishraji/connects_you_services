// Original file: src/proto/room.proto

import type { AddUsersToGroupRoomRequestRoomUsers as _room_AddUsersToGroupRoomRequestRoomUsers, AddUsersToGroupRoomRequestRoomUsersOutput as _room_AddUsersToGroupRoomRequestRoomUsersOutput } from '../room/AddUsersToGroupRoomRequestRoomUsers';

export interface AddUsersToGroupRoomRequest {
  'roomId'?: (string);
  'roomUsers'?: (_room_AddUsersToGroupRoomRequestRoomUsers)[];
  'creatorUserId'?: (string);
}

export interface AddUsersToGroupRoomRequestOutput {
  'roomId': (string);
  'roomUsers': (_room_AddUsersToGroupRoomRequestRoomUsersOutput)[];
  'creatorUserId': (string);
}
