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
    FindOrCreateDuetRoomRequest: MessageTypeDefinition
    FindOrCreateDuetRoomResponse: MessageTypeDefinition
    GetRoomUsersRequest: MessageTypeDefinition
    GetRoomUsersResponse: MessageTypeDefinition
    GetRoomUsersResponseData: MessageTypeDefinition
    GetUserRoomsData: MessageTypeDefinition
    GetUserRoomsRequest: MessageTypeDefinition
    GetUserRoomsResponse: MessageTypeDefinition
    RemoveUsersFromGroupRoomRequest: MessageTypeDefinition
    RemoveUsersFromGroupRoomResponse: MessageTypeDefinition
    ResponseStatusEnum: EnumTypeDefinition
    Room: MessageTypeDefinition
    RoomData: MessageTypeDefinition
    RoomServices: SubtypeConstructor<typeof grpc.Client, _room_RoomServicesClient> & { service: _room_RoomServicesDefinition }
    RoomTypesEnum: EnumTypeDefinition
    RoomUser: MessageTypeDefinition
    RoomUserRoleEnum: EnumTypeDefinition
    UpdateGroupRoomDetailsRequest: MessageTypeDefinition
    UpdateGroupRoomDetailsResponse: MessageTypeDefinition
    UpdateUserRoleInGroupRoomRequest: MessageTypeDefinition
    UpdateUserRoleInGroupRoomResponse: MessageTypeDefinition
  }
}

export * from './room/AddUsersToGroupRoomRequest';export * from './room/AddUsersToGroupRoomRequestRoomUsers';export * from './room/AddUsersToGroupRoomResponse';export * from './room/CreateGroupRoomRequest';export * from './room/CreateGroupRoomResponse';export * from './room/FindOrCreateDuetRoomRequest';export * from './room/FindOrCreateDuetRoomResponse';export * from './room/GetRoomUsersRequest';export * from './room/GetRoomUsersResponse';export * from './room/GetRoomUsersResponseData';export * from './room/GetUserRoomsData';export * from './room/GetUserRoomsRequest';export * from './room/GetUserRoomsResponse';export * from './room/RemoveUsersFromGroupRoomRequest';export * from './room/RemoveUsersFromGroupRoomResponse';export * from './room/ResponseStatusEnum';export * from './room/Room';export * from './room/RoomData';export * from './room/RoomServices';export * from './room/RoomTypesEnum';export * from './room/RoomUser';export * from './room/RoomUserRoleEnum';export * from './room/UpdateGroupRoomDetailsRequest';export * from './room/UpdateGroupRoomDetailsResponse';export * from './room/UpdateUserRoleInGroupRoomRequest';export * from './room/UpdateUserRoleInGroupRoomResponse';