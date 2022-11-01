// Original file: src/proto/room.proto


export interface UpdateGroupRoomDataRequest {
  'roomId'?: (string);
  'roomName'?: (string);
  'roomLogoUrl'?: (string);
  'roomDescription'?: (string);
  'adminUserId'?: (string);
  '_roomName'?: "roomName";
  '_roomLogoUrl'?: "roomLogoUrl";
  '_roomDescription'?: "roomDescription";
}

export interface UpdateGroupRoomDataRequestOutput {
  'roomId': (string);
  'roomName'?: (string);
  'roomLogoUrl'?: (string);
  'roomDescription'?: (string);
  'adminUserId': (string);
  '_roomName': "roomName";
  '_roomLogoUrl': "roomLogoUrl";
  '_roomDescription': "roomDescription";
}
