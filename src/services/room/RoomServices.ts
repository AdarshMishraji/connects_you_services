// Original file: src/proto/room.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddUsersToGroupRoomRequest as _room_AddUsersToGroupRoomRequest, AddUsersToGroupRoomRequestOutput as _room_AddUsersToGroupRoomRequestOutput } from '../room/AddUsersToGroupRoomRequest';
import type { AddUsersToGroupRoomResponse as _room_AddUsersToGroupRoomResponse, AddUsersToGroupRoomResponseOutput as _room_AddUsersToGroupRoomResponseOutput } from '../room/AddUsersToGroupRoomResponse';
import type { CreateGroupRoomRequest as _room_CreateGroupRoomRequest, CreateGroupRoomRequestOutput as _room_CreateGroupRoomRequestOutput } from '../room/CreateGroupRoomRequest';
import type { CreateGroupRoomResponse as _room_CreateGroupRoomResponse, CreateGroupRoomResponseOutput as _room_CreateGroupRoomResponseOutput } from '../room/CreateGroupRoomResponse';
import type { FindOrCreateDuetRoomRequest as _room_FindOrCreateDuetRoomRequest, FindOrCreateDuetRoomRequestOutput as _room_FindOrCreateDuetRoomRequestOutput } from '../room/FindOrCreateDuetRoomRequest';
import type { FindOrCreateDuetRoomResponse as _room_FindOrCreateDuetRoomResponse, FindOrCreateDuetRoomResponseOutput as _room_FindOrCreateDuetRoomResponseOutput } from '../room/FindOrCreateDuetRoomResponse';
import type { GetRoomUsersRequest as _room_GetRoomUsersRequest, GetRoomUsersRequestOutput as _room_GetRoomUsersRequestOutput } from '../room/GetRoomUsersRequest';
import type { GetRoomUsersResponse as _room_GetRoomUsersResponse, GetRoomUsersResponseOutput as _room_GetRoomUsersResponseOutput } from '../room/GetRoomUsersResponse';
import type { GetUserRoomsRequest as _room_GetUserRoomsRequest, GetUserRoomsRequestOutput as _room_GetUserRoomsRequestOutput } from '../room/GetUserRoomsRequest';
import type { GetUserRoomsResponse as _room_GetUserRoomsResponse, GetUserRoomsResponseOutput as _room_GetUserRoomsResponseOutput } from '../room/GetUserRoomsResponse';
import type { RemoveUsersFromGroupRoomRequest as _room_RemoveUsersFromGroupRoomRequest, RemoveUsersFromGroupRoomRequestOutput as _room_RemoveUsersFromGroupRoomRequestOutput } from '../room/RemoveUsersFromGroupRoomRequest';
import type { RemoveUsersFromGroupRoomResponse as _room_RemoveUsersFromGroupRoomResponse, RemoveUsersFromGroupRoomResponseOutput as _room_RemoveUsersFromGroupRoomResponseOutput } from '../room/RemoveUsersFromGroupRoomResponse';
import type { UpdateGroupRoomDetailsRequest as _room_UpdateGroupRoomDetailsRequest, UpdateGroupRoomDetailsRequestOutput as _room_UpdateGroupRoomDetailsRequestOutput } from '../room/UpdateGroupRoomDetailsRequest';
import type { UpdateGroupRoomDetailsResponse as _room_UpdateGroupRoomDetailsResponse, UpdateGroupRoomDetailsResponseOutput as _room_UpdateGroupRoomDetailsResponseOutput } from '../room/UpdateGroupRoomDetailsResponse';
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
  
  FindOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  FindOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  FindOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  FindOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  findOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  findOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  findOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  findOrCreateDuetRoom(argument: _room_FindOrCreateDuetRoomRequest, callback: grpc.requestCallback<_room_FindOrCreateDuetRoomResponseOutput>): grpc.ClientUnaryCall;
  
  GetRoomUsers(argument: _room_GetRoomUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_GetRoomUsersResponseOutput>): grpc.ClientUnaryCall;
  GetRoomUsers(argument: _room_GetRoomUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_GetRoomUsersResponseOutput>): grpc.ClientUnaryCall;
  GetRoomUsers(argument: _room_GetRoomUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_GetRoomUsersResponseOutput>): grpc.ClientUnaryCall;
  GetRoomUsers(argument: _room_GetRoomUsersRequest, callback: grpc.requestCallback<_room_GetRoomUsersResponseOutput>): grpc.ClientUnaryCall;
  getRoomUsers(argument: _room_GetRoomUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_GetRoomUsersResponseOutput>): grpc.ClientUnaryCall;
  getRoomUsers(argument: _room_GetRoomUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_GetRoomUsersResponseOutput>): grpc.ClientUnaryCall;
  getRoomUsers(argument: _room_GetRoomUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_GetRoomUsersResponseOutput>): grpc.ClientUnaryCall;
  getRoomUsers(argument: _room_GetRoomUsersRequest, callback: grpc.requestCallback<_room_GetRoomUsersResponseOutput>): grpc.ClientUnaryCall;
  
  GetUserRooms(argument: _room_GetUserRoomsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_GetUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  GetUserRooms(argument: _room_GetUserRoomsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_GetUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  GetUserRooms(argument: _room_GetUserRoomsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_GetUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  GetUserRooms(argument: _room_GetUserRoomsRequest, callback: grpc.requestCallback<_room_GetUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  getUserRooms(argument: _room_GetUserRoomsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_GetUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  getUserRooms(argument: _room_GetUserRoomsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_GetUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  getUserRooms(argument: _room_GetUserRoomsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_GetUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  getUserRooms(argument: _room_GetUserRoomsRequest, callback: grpc.requestCallback<_room_GetUserRoomsResponseOutput>): grpc.ClientUnaryCall;
  
  RemoveUsersFromGroupRoom(argument: _room_RemoveUsersFromGroupRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_RemoveUsersFromGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  RemoveUsersFromGroupRoom(argument: _room_RemoveUsersFromGroupRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_RemoveUsersFromGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  RemoveUsersFromGroupRoom(argument: _room_RemoveUsersFromGroupRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_RemoveUsersFromGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  RemoveUsersFromGroupRoom(argument: _room_RemoveUsersFromGroupRoomRequest, callback: grpc.requestCallback<_room_RemoveUsersFromGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  removeUsersFromGroupRoom(argument: _room_RemoveUsersFromGroupRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_RemoveUsersFromGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  removeUsersFromGroupRoom(argument: _room_RemoveUsersFromGroupRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_RemoveUsersFromGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  removeUsersFromGroupRoom(argument: _room_RemoveUsersFromGroupRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_RemoveUsersFromGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  removeUsersFromGroupRoom(argument: _room_RemoveUsersFromGroupRoomRequest, callback: grpc.requestCallback<_room_RemoveUsersFromGroupRoomResponseOutput>): grpc.ClientUnaryCall;
  
  UpdateGroupRoomDetails(argument: _room_UpdateGroupRoomDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_UpdateGroupRoomDetailsResponseOutput>): grpc.ClientUnaryCall;
  UpdateGroupRoomDetails(argument: _room_UpdateGroupRoomDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_UpdateGroupRoomDetailsResponseOutput>): grpc.ClientUnaryCall;
  UpdateGroupRoomDetails(argument: _room_UpdateGroupRoomDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_UpdateGroupRoomDetailsResponseOutput>): grpc.ClientUnaryCall;
  UpdateGroupRoomDetails(argument: _room_UpdateGroupRoomDetailsRequest, callback: grpc.requestCallback<_room_UpdateGroupRoomDetailsResponseOutput>): grpc.ClientUnaryCall;
  updateGroupRoomDetails(argument: _room_UpdateGroupRoomDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_UpdateGroupRoomDetailsResponseOutput>): grpc.ClientUnaryCall;
  updateGroupRoomDetails(argument: _room_UpdateGroupRoomDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_UpdateGroupRoomDetailsResponseOutput>): grpc.ClientUnaryCall;
  updateGroupRoomDetails(argument: _room_UpdateGroupRoomDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_UpdateGroupRoomDetailsResponseOutput>): grpc.ClientUnaryCall;
  updateGroupRoomDetails(argument: _room_UpdateGroupRoomDetailsRequest, callback: grpc.requestCallback<_room_UpdateGroupRoomDetailsResponseOutput>): grpc.ClientUnaryCall;
  
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
  
  FindOrCreateDuetRoom: grpc.handleUnaryCall<_room_FindOrCreateDuetRoomRequestOutput, _room_FindOrCreateDuetRoomResponse>;
  
  GetRoomUsers: grpc.handleUnaryCall<_room_GetRoomUsersRequestOutput, _room_GetRoomUsersResponse>;
  
  GetUserRooms: grpc.handleUnaryCall<_room_GetUserRoomsRequestOutput, _room_GetUserRoomsResponse>;
  
  RemoveUsersFromGroupRoom: grpc.handleUnaryCall<_room_RemoveUsersFromGroupRoomRequestOutput, _room_RemoveUsersFromGroupRoomResponse>;
  
  UpdateGroupRoomDetails: grpc.handleUnaryCall<_room_UpdateGroupRoomDetailsRequestOutput, _room_UpdateGroupRoomDetailsResponse>;
  
  UpdateUserRoleInGroupRoom: grpc.handleUnaryCall<_room_UpdateUserRoleInGroupRoomRequestOutput, _room_UpdateUserRoleInGroupRoomResponse>;
  
}

export interface RoomServicesDefinition extends grpc.ServiceDefinition {
  AddUsersToGroupRoom: MethodDefinition<_room_AddUsersToGroupRoomRequest, _room_AddUsersToGroupRoomResponse, _room_AddUsersToGroupRoomRequestOutput, _room_AddUsersToGroupRoomResponseOutput>
  CreateGroupRoom: MethodDefinition<_room_CreateGroupRoomRequest, _room_CreateGroupRoomResponse, _room_CreateGroupRoomRequestOutput, _room_CreateGroupRoomResponseOutput>
  FindOrCreateDuetRoom: MethodDefinition<_room_FindOrCreateDuetRoomRequest, _room_FindOrCreateDuetRoomResponse, _room_FindOrCreateDuetRoomRequestOutput, _room_FindOrCreateDuetRoomResponseOutput>
  GetRoomUsers: MethodDefinition<_room_GetRoomUsersRequest, _room_GetRoomUsersResponse, _room_GetRoomUsersRequestOutput, _room_GetRoomUsersResponseOutput>
  GetUserRooms: MethodDefinition<_room_GetUserRoomsRequest, _room_GetUserRoomsResponse, _room_GetUserRoomsRequestOutput, _room_GetUserRoomsResponseOutput>
  RemoveUsersFromGroupRoom: MethodDefinition<_room_RemoveUsersFromGroupRoomRequest, _room_RemoveUsersFromGroupRoomResponse, _room_RemoveUsersFromGroupRoomRequestOutput, _room_RemoveUsersFromGroupRoomResponseOutput>
  UpdateGroupRoomDetails: MethodDefinition<_room_UpdateGroupRoomDetailsRequest, _room_UpdateGroupRoomDetailsResponse, _room_UpdateGroupRoomDetailsRequestOutput, _room_UpdateGroupRoomDetailsResponseOutput>
  UpdateUserRoleInGroupRoom: MethodDefinition<_room_UpdateUserRoleInGroupRoomRequest, _room_UpdateUserRoleInGroupRoomResponse, _room_UpdateUserRoleInGroupRoomRequestOutput, _room_UpdateUserRoleInGroupRoomResponseOutput>
}
