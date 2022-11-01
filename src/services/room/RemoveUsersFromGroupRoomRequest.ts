// Original file: src/proto/room.proto


export interface RemoveUsersFromGroupRoomRequest {
  'roomId'?: (string);
  'userIds'?: (string)[];
  'adminUserId'?: (string);
}

export interface RemoveUsersFromGroupRoomRequestOutput {
  'roomId': (string);
  'userIds': (string)[];
  'adminUserId': (string);
}
