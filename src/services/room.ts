import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { RoomServicesClient as _room_RoomServicesClient, RoomServicesDefinition as _room_RoomServicesDefinition } from './room/RoomServices';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  room: {
    AddUsersToGroupRoomRequest: MessageTypeDefinition
    AddUsersToGroupRoomRequestRoomUsers: MessageTypeDefinition
    AddUsersToGroupRoomResponse: MessageTypeDefinition
    CreateGroupRoomRequest: MessageTypeDefinition
    CreateGroupRoomResponse: MessageTypeDefinition
    FetchUserRoomsRequest: MessageTypeDefinition
    FetchUserRoomsResponse: MessageTypeDefinition
    FindOrCreateDuetRoomRequest: MessageTypeDefinition
    FindOrCreateDuetRoomResponse: MessageTypeDefinition
    RepeatedRoomData: MessageTypeDefinition
    ResponseStatusEnum: EnumTypeDefinition
    Room: MessageTypeDefinition
    RoomData: MessageTypeDefinition
    RoomServices: SubtypeConstructor<typeof grpc.Client, _room_RoomServicesClient> & { service: _room_RoomServicesDefinition }
    RoomTypesEnum: EnumTypeDefinition
    RoomUserRoleEnum: EnumTypeDefinition
    RoomUsers: MessageTypeDefinition
    UpdateUserRoleInGroupRoomRequest: MessageTypeDefinition
    UpdateUserRoleInGroupRoomResponse: MessageTypeDefinition
  }
}

