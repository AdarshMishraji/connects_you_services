// Original file: src/proto/room.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddUsersToGroupRoomRequest as _room_AddUsersToGroupRoomRequest, AddUsersToGroupRoomRequestOutput as _room_AddUsersToGroupRoomRequestOutput } from '../room/AddUsersToGroupRoomRequest';
import type { AddUsersToGroupRoomResponse as _room_AddUsersToGroupRoomResponse, AddUsersToGroupRoomResponseOutput as _room_AddUsersToGroupRoomResponseOutput } from '../room/AddUsersToGroupRoomResponse';
import type { CreateGroupRoomRequest as _room_CreateGroupRoomRequest, CreateGroupRoomRequestOutput as _room_CreateGroupRoomRequestOutput } from '../room/CreateGroupRoomRequest';
import type { CreateGroupRoomResponse as _room_CreateGroupRoomResponse, CreateGroupRoomResponseOutput as _room_CreateGroupRoomResponseOutput } from '../room/CreateGroupRoomResponse';
import type { FetchUserRoomsRequest as _room_FetchUserRoomsRequest, FetchUserRoomsRequestOutput as _room_FetchUserRoomsRequestOutput } from '../room/FetchUserRoomsRequest';
import type { FetchUserRoomsResponse as _room_FetchUserRoomsResponse, FetchUserRoomsResponseOutput as _room_FetchUserRoomsResponseOutput } from '../room/FetchUserRoomsResponse';
import type { FindOrCreateDuetRoomRequest as _room_FindOrCreateDuetRoomRequest, FindOrCreateDuetRoomRequestOutput as _room_FindOrCreateDuetRoomRequestOutput } from '../room/FindOrCreateDuetRoomRequest';
import type { FindOrCreateDuetRoomResponse as _room_FindOrCreateDuetRoomResponse, FindOrCreateDuetRoomResponseOutput as _room_FindOrCreateDuetRoomResponseOutput } from '../room/FindOrCreateDuetRoomResponse';
import type { UpdateUserRoleInGroupRoomRequest as _room_UpdateUserRoleInGroupRoomRequest, UpdateUserRoleInGroupRoomRequestOutput as _room_UpdateUserRoleInGroupRoomRequestOutput } from '../room/UpdateUserRoleInGroupRoomRequest';
import type { UpdateUserRoleInGroupRoomResponse as _room_UpdateUserRoleInGroupRoomResponse, UpdateUserRoleInGroupRoomResponseOutput as _room_UpdateUserRoleInGroupRoomResponseOutput } from '../room/UpdateUserRoleInGroupRoomResponse';

export interface RoomServicesClient extends grpc.Client {
  AddUsersToGroupRoom(argument: _room_AddUsersToGroupRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_AddUsersToGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  AddUsersToGroupRoom(argument: _room_AddUsersToGroupRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_AddUsersToGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  AddUsersToGroupRoom(argument: _room_AddUsersToGroupRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_AddUsersToGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  AddUsersToGroupRoom(argument: _room_AddUsersToGroupRoomRequest, callback: grpc.requestCallback<_room_AddUsersToGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  addUsersToGroupRoom(argument: _room_AddUsersToGroupRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_AddUsersToGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  addUsersToGroupRoom(argument: _room_AddUsersToGroupRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_AddUsersToGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  addUsersToGroupRoom(argument: _room_AddUsersToGroupRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_AddUsersToGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  addUsersToGroupRoom(argument: _room_AddUsersToGroupRoomRequest, callback: grpc.requestCallback<_room_AddUsersToGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  
  CreateGroupRoom(argument: _room_CreateGroupRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_CreateGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  CreateGroupRoom(argument: _room_CreateGroupRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_CreateGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  CreateGroupRoom(argument: _room_CreateGroupRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_CreateGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  CreateGroupRoom(argument: _room_CreateGroupRoomRequest, callback: grpc.requestCallback<_room_CreateGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  createGroupRoom(argument: _room_CreateGroupRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_CreateGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  createGroupRoom(argument: _room_CreateGroupRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_CreateGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  createGroupRoom(argument: _room_CreateGroupRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_CreateGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  createGroupRoom(argument: _room_CreateGroupRoomRequest, callback: grpc.requestCallback<_room_CreateGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  
  FetchUserRooms(argument: _room_FetchUserRoomsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FetchUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  FetchUserRooms(argument: _room_FetchUserRoomsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_FetchUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  FetchUserRooms(argument: _room_FetchUserRoomsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FetchUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  FetchUserRooms(argument: _room_FetchUserRoomsRequest, callback: grpc.requestCallback<_room_FetchUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  fetchUserRooms(argument: _room_FetchUserRoomsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FetchUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  fetchUserRooms(argument: _room_FetchUserRoomsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_FetchUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  fetchUserRooms(argument: _room_FetchUserRoomsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FetchUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  fetchUserRooms(argument: _room_FetchUserRoomsRequest, callback: grpc.requestCallback<_room_FetchUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  
  FindOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  FindOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  FindOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  FindOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  findOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  findOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  findOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  findOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  
  UpdateUserRoleInGroupRoom(argument: _room_UpdateUserRoleInGroupRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_UpdateUserRoleInGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  UpdateUserRoleInGroupRoom(argument: _room_UpdateUserRoleInGroupRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_UpdateUserRoleInGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  UpdateUserRoleInGroupRoom(argument: _room_UpdateUserRoleInGroupRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_UpdateUserRoleInGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  UpdateUserRoleInGroupRoom(argument: _room_UpdateUserRoleInGroupRoomRequest, callback: grpc.requestCallback<_room_UpdateUserRoleInGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  updateUserRoleInGroupRoom(argument: _room_UpdateUserRoleInGroupRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_UpdateUserRoleInGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  updateUserRoleInGroupRoom(argument: _room_UpdateUserRoleInGroupRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_UpdateUserRoleInGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  updateUserRoleInGroupRoom(argument: _room_UpdateUserRoleInGroupRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_UpdateUserRoleInGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  updateUserRoleInGroupRoom(argument: _room_UpdateUserRoleInGroupRoomRequest, callback: grpc.requestCallback<_room_UpdateUserRoleInGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  
}

export interface RoomServicesHandlers extends grpc.UntypedServiceImplementation {
  AddUsersToGroupRoom: grpc.handleUnaryCall<_room_AddUsersToGroupRoomRequestOutput, _room_AddUsersToGroupRoomResponse>;
  
  CreateGroupRoom: grpc.handleUnaryCall<_room_CreateGroupRoomRequestOutput, _room_CreateGroupRoomResponse>;
  
  FetchUserRooms: grpc.handleUnaryCall<_room_FetchUserRoomsRequestOutput, _room_FetchUserRoomsResponse>;
  
  FindOrCreateDuetRoom: grpc.handleUnaryCall<_room_FindOrCreateDuetRoomRequestOutput, _room_FindOrCreateDuetRoomResponse>;
  
  UpdateUserRoleInGroupRoom: grpc.handleUnaryCall<_room_UpdateUserRoleInGroupRoomRequestOutput, _room_UpdateUserRoleInGroupRoomResponse>;
  
}

export interface RoomServicesDefinition extends grpc.ServiceDefinition {
  AddUsersToGroupRoom: MethodDefinition<_room_AddUsersToGroupRoomRequest, _room_AddUsersToGroupRoomResponse, _room_AddUsersToGroupRoomRequestOutput, _room_AddUsersToGroupRoomResponseOutput>
  CreateGroupRoom: MethodDefinition<_room_CreateGroupRoomRequest, _room_CreateGroupRoomResponse, _room_CreateGroupRoomRequestOutput, _room_CreateGroupRoomResponseOutput>
  FetchUserRooms: MethodDefinition<_room_FetchUserRoomsRequest, _room_FetchUserRoomsResponse, _room_FetchUserRoomsRequestOutput, _room_FetchUserRoomsResponseOutput>
  FindOrCreateDuetRoom: MethodDefinition<_room_FindOrCreateDuetRoomRequest, _room_FindOrCreateDuetRoomResponse, _room_FindOrCreateDuetRoomRequestOutput, _room_FindOrCreateDuetRoomResponseOutput>
  UpdateUserRoleInGroupRoom: MethodDefinition<_room_UpdateUserRoleInGroupRoomRequest, _room_UpdateUserRoleInGroupRoomResponse, _room_UpdateUserRoleInGroupRoomRequestOutput, _room_UpdateUserRoleInGroupRoomResponseOutput>
}
