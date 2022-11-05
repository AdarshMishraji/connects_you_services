// Original file: src/proto/room.proto


export interface GetUserRoomsRequest {
  'userId'?: (string);
  'timestamp'?: (string);
  'limit'?: (number);
  'onlyDuets'?: (boolean);
  'onlyGroups'?: (boolean);
  'requiredDetailedRoomUserData'?: (boolean);
  '_timestamp'?: "timestamp";
  '_limit'?: "limit";
  '_onlyDuets'?: "onlyDuets";
  '_onlyGroups'?: "onlyGroups";
  '_requiredDetailedRoomUserData'?: "requiredDetailedRoomUserData";
}

export interface GetUserRoomsRequestOutput {
  'userId': (string);
  'timestamp'?: (string);
  'limit'?: (number);
  'onlyDuets'?: (boolean);
  'onlyGroups'?: (boolean);
  'requiredDetailedRoomUserData'?: (boolean);
  '_timestamp': "timestamp";
  '_limit': "limit";
  '_onlyDuets': "onlyDuets";
  '_onlyGroups': "onlyGroups";
  '_requiredDetailedRoomUserData': "requiredDetailedRoomUserData";
}
