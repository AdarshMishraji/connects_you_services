// Original file: src/proto/room.proto


export interface FetchUserRoomsRequest {
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

export interface FetchUserRoomsRequestOutput {
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
