// Original file: src/proto/room.proto


export interface GetRoomUsersRequest {
  'roomId'?: (string);
  'requiredDetailedRoomUserData'?: (boolean);
  '_requiredDetailedRoomUserData'?: "requiredDetailedRoomUserData";
}

export interface GetRoomUsersRequestOutput {
  'roomId': (string);
  'requiredDetailedRoomUserData'?: (boolean);
  '_requiredDetailedRoomUserData': "requiredDetailedRoomUserData";
}
