// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AllUsersRequest as _user_AllUsersRequest, AllUsersRequestOutput as _user_AllUsersRequestOutput } from '../user/AllUsersRequest';
import type { AllUsersResponse as _user_AllUsersResponse, AllUsersResponseOutput as _user_AllUsersResponseOutput } from '../user/AllUsersResponse';
import type { SetUserOnlineStatusRequest as _user_SetUserOnlineStatusRequest, SetUserOnlineStatusRequestOutput as _user_SetUserOnlineStatusRequestOutput } from '../user/SetUserOnlineStatusRequest';
import type { SetUserOnlineStatusResponse as _user_SetUserOnlineStatusResponse, SetUserOnlineStatusResponseOutput as _user_SetUserOnlineStatusResponseOutput } from '../user/SetUserOnlineStatusResponse';
import type { UserDetailsRequest as _user_UserDetailsRequest, UserDetailsRequestOutput as _user_UserDetailsRequestOutput } from '../user/UserDetailsRequest';
import type { UserDetailsResponse as _user_UserDetailsResponse, UserDetailsResponseOutput as _user_UserDetailsResponseOutput } from '../user/UserDetailsResponse';
import type { UserLoginHistoryRequest as _user_UserLoginHistoryRequest, UserLoginHistoryRequestOutput as _user_UserLoginHistoryRequestOutput } from '../user/UserLoginHistoryRequest';
import type { UserLoginHistoryResponse as _user_UserLoginHistoryResponse, UserLoginHistoryResponseOutput as _user_UserLoginHistoryResponseOutput } from '../user/UserLoginHistoryResponse';
import type { UserLoginInfoRequest as _user_UserLoginInfoRequest, UserLoginInfoRequestOutput as _user_UserLoginInfoRequestOutput } from '../user/UserLoginInfoRequest';
import type { UserLoginInfoResponse as _user_UserLoginInfoResponse, UserLoginInfoResponseOutput as _user_UserLoginInfoResponseOutput } from '../user/UserLoginInfoResponse';

export interface UserServicesClient extends grpc.Client {
  GetAllUsers(argument: _user_AllUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AllUsersResponseOutput>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_AllUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_AllUsersResponseOutput>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_AllUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AllUsersResponseOutput>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_AllUsersRequest, callback: grpc.requestCallback<_user_AllUsersResponseOutput>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_AllUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AllUsersResponseOutput>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_AllUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_AllUsersResponseOutput>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_AllUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AllUsersResponseOutput>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_AllUsersRequest, callback: grpc.requestCallback<_user_AllUsersResponseOutput>): grpc.ClientUnaryCall;
  
  GetUserDetails(argument: _user_UserDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserDetailsResponseOutput>): grpc.ClientUnaryCall;
  GetUserDetails(argument: _user_UserDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserDetailsResponseOutput>): grpc.ClientUnaryCall;
  GetUserDetails(argument: _user_UserDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserDetailsResponseOutput>): grpc.ClientUnaryCall;
  GetUserDetails(argument: _user_UserDetailsRequest, callback: grpc.requestCallback<_user_UserDetailsResponseOutput>): grpc.ClientUnaryCall;
  getUserDetails(argument: _user_UserDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserDetailsResponseOutput>): grpc.ClientUnaryCall;
  getUserDetails(argument: _user_UserDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserDetailsResponseOutput>): grpc.ClientUnaryCall;
  getUserDetails(argument: _user_UserDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserDetailsResponseOutput>): grpc.ClientUnaryCall;
  getUserDetails(argument: _user_UserDetailsRequest, callback: grpc.requestCallback<_user_UserDetailsResponseOutput>): grpc.ClientUnaryCall;
  
  GetUserLoginHistory(argument: _user_UserLoginHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginHistory(argument: _user_UserLoginHistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginHistory(argument: _user_UserLoginHistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginHistory(argument: _user_UserLoginHistoryRequest, callback: grpc.requestCallback<_user_UserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginHistory(argument: _user_UserLoginHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginHistory(argument: _user_UserLoginHistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginHistory(argument: _user_UserLoginHistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginHistory(argument: _user_UserLoginHistoryRequest, callback: grpc.requestCallback<_user_UserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  
  GetUserLoginInfo(argument: _user_UserLoginInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginInfo(argument: _user_UserLoginInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginInfo(argument: _user_UserLoginInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginInfo(argument: _user_UserLoginInfoRequest, callback: grpc.requestCallback<_user_UserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginInfo(argument: _user_UserLoginInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginInfo(argument: _user_UserLoginInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginInfo(argument: _user_UserLoginInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginInfo(argument: _user_UserLoginInfoRequest, callback: grpc.requestCallback<_user_UserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  
  SetUserOnlineStatus(argument: _user_SetUserOnlineStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SetUserOnlineStatusResponseOutput>): grpc.ClientUnaryCall;
  SetUserOnlineStatus(argument: _user_SetUserOnlineStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SetUserOnlineStatusResponseOutput>): grpc.ClientUnaryCall;
  SetUserOnlineStatus(argument: _user_SetUserOnlineStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SetUserOnlineStatusResponseOutput>): grpc.ClientUnaryCall;
  SetUserOnlineStatus(argument: _user_SetUserOnlineStatusRequest, callback: grpc.requestCallback<_user_SetUserOnlineStatusResponseOutput>): grpc.ClientUnaryCall;
  setUserOnlineStatus(argument: _user_SetUserOnlineStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SetUserOnlineStatusResponseOutput>): grpc.ClientUnaryCall;
  setUserOnlineStatus(argument: _user_SetUserOnlineStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_SetUserOnlineStatusResponseOutput>): grpc.ClientUnaryCall;
  setUserOnlineStatus(argument: _user_SetUserOnlineStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_SetUserOnlineStatusResponseOutput>): grpc.ClientUnaryCall;
  setUserOnlineStatus(argument: _user_SetUserOnlineStatusRequest, callback: grpc.requestCallback<_user_SetUserOnlineStatusResponseOutput>): grpc.ClientUnaryCall;
  
}

export interface UserServicesHandlers extends grpc.UntypedServiceImplementation {
  GetAllUsers: grpc.handleUnaryCall<_user_AllUsersRequestOutput, _user_AllUsersResponse>;
  
  GetUserDetails: grpc.handleUnaryCall<_user_UserDetailsRequestOutput, _user_UserDetailsResponse>;
  
  GetUserLoginHistory: grpc.handleUnaryCall<_user_UserLoginHistoryRequestOutput, _user_UserLoginHistoryResponse>;
  
  GetUserLoginInfo: grpc.handleUnaryCall<_user_UserLoginInfoRequestOutput, _user_UserLoginInfoResponse>;
  
  SetUserOnlineStatus: grpc.handleUnaryCall<_user_SetUserOnlineStatusRequestOutput, _user_SetUserOnlineStatusResponse>;
  
}

export interface UserServicesDefinition extends grpc.ServiceDefinition {
  GetAllUsers: MethodDefinition<_user_AllUsersRequest, _user_AllUsersResponse, _user_AllUsersRequestOutput, _user_AllUsersResponseOutput>
  GetUserDetails: MethodDefinition<_user_UserDetailsRequest, _user_UserDetailsResponse, _user_UserDetailsRequestOutput, _user_UserDetailsResponseOutput>
  GetUserLoginHistory: MethodDefinition<_user_UserLoginHistoryRequest, _user_UserLoginHistoryResponse, _user_UserLoginHistoryRequestOutput, _user_UserLoginHistoryResponseOutput>
  GetUserLoginInfo: MethodDefinition<_user_UserLoginInfoRequest, _user_UserLoginInfoResponse, _user_UserLoginInfoRequestOutput, _user_UserLoginInfoResponseOutput>
  SetUserOnlineStatus: MethodDefinition<_user_SetUserOnlineStatusRequest, _user_SetUserOnlineStatusResponse, _user_SetUserOnlineStatusRequestOutput, _user_SetUserOnlineStatusResponseOutput>
}
