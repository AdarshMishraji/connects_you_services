// Original file: src/proto/room.proto


export interface CreateGroupRoomRequest {
  'roomName'?: (string);
  'roomLogoUrl'?: (string);
  'roomDescription'?: (string);
  'createdByUserId'?: (string);
  'roomUserIds'?: (string)[];
  '_roomLogoUrl'?: "roomLogoUrl";
  '_roomDescription'?: "roomDescription";
}

export interface CreateGroupRoomRequestOutput {
  'roomName': (string);
  'roomLogoUrl'?: (string);
  'roomDescription'?: (string);
  'createdByUserId': (string);
  'roomUserIds': (string)[];
  '_roomLogoUrl': "roomLogoUrl";
  '_roomDescription': "roomDescription";
}
