// Original file: src/proto/room.proto


export interface UpdateGroupRoomDetailsRequest {
  'roomId'?: (string);
  'roomName'?: (string);
  'roomLogoUrl'?: (string);
  'roomDescription'?: (string);
  '_roomName'?: "roomName";
  '_roomLogoUrl'?: "roomLogoUrl";
  '_roomDescription'?: "roomDescription";
}

export interface UpdateGroupRoomDetailsRequestOutput {
  'roomId': (string);
  'roomName'?: (string);
  'roomLogoUrl'?: (string);
  'roomDescription'?: (string);
  '_roomName': "roomName";
  '_roomLogoUrl': "roomLogoUrl";
  '_roomDescription': "roomDescription";
}
