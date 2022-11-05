// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetAllUsersRequest as _user_GetAllUsersRequest, GetAllUsersRequestOutput as _user_GetAllUsersRequestOutput } from '../user/GetAllUsersRequest';
import type { GetAllUsersResponse as _user_GetAllUsersResponse, GetAllUsersResponseOutput as _user_GetAllUsersResponseOutput } from '../user/GetAllUsersResponse';
import type { GetUserDetailsRequest as _user_GetUserDetailsRequest, GetUserDetailsRequestOutput as _user_GetUserDetailsRequestOutput } from '../user/GetUserDetailsRequest';
import type { GetUserDetailsResponse as _user_GetUserDetailsResponse, GetUserDetailsResponseOutput as _user_GetUserDetailsResponseOutput } from '../user/GetUserDetailsResponse';
import type { GetUserLoginHistoryRequest as _user_GetUserLoginHistoryRequest, GetUserLoginHistoryRequestOutput as _user_GetUserLoginHistoryRequestOutput } from '../user/GetUserLoginHistoryRequest';
import type { GetUserLoginHistoryResponse as _user_GetUserLoginHistoryResponse, GetUserLoginHistoryResponseOutput as _user_GetUserLoginHistoryResponseOutput } from '../user/GetUserLoginHistoryResponse';
import type { GetUserLoginInfoRequest as _user_GetUserLoginInfoRequest, GetUserLoginInfoRequestOutput as _user_GetUserLoginInfoRequestOutput } from '../user/GetUserLoginInfoRequest';
import type { GetUserLoginInfoResponse as _user_GetUserLoginInfoResponse, GetUserLoginInfoResponseOutput as _user_GetUserLoginInfoResponseOutput } from '../user/GetUserLoginInfoResponse';

export interface UserServicesClient extends grpc.Client {
  GetAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponseOutput>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetAllUsersResponseOutput>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_GetAllUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponseOutput>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_GetAllUsersRequest, callback: grpc.requestCallback<_user_GetAllUsersResponseOutput>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponseOutput>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetAllUsersResponseOutput>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponseOutput>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, callback: grpc.requestCallback<_user_GetAllUsersResponseOutput>): grpc.ClientUnaryCall;
  
  GetUserDetails(argument: _user_GetUserDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserDetailsResponseOutput>): grpc.ClientUnaryCall;
  GetUserDetails(argument: _user_GetUserDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserDetailsResponseOutput>): grpc.ClientUnaryCall;
  GetUserDetails(argument: _user_GetUserDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserDetailsResponseOutput>): grpc.ClientUnaryCall;
  GetUserDetails(argument: _user_GetUserDetailsRequest, callback: grpc.requestCallback<_user_GetUserDetailsResponseOutput>): grpc.ClientUnaryCall;
  getUserDetails(argument: _user_GetUserDetailsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserDetailsResponseOutput>): grpc.ClientUnaryCall;
  getUserDetails(argument: _user_GetUserDetailsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserDetailsResponseOutput>): grpc.ClientUnaryCall;
  getUserDetails(argument: _user_GetUserDetailsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserDetailsResponseOutput>): grpc.ClientUnaryCall;
  getUserDetails(argument: _user_GetUserDetailsRequest, callback: grpc.requestCallback<_user_GetUserDetailsResponseOutput>): grpc.ClientUnaryCall;
  
  GetUserLoginHistory(argument: _user_GetUserLoginHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginHistory(argument: _user_GetUserLoginHistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginHistory(argument: _user_GetUserLoginHistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginHistory(argument: _user_GetUserLoginHistoryRequest, callback: grpc.requestCallback<_user_GetUserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginHistory(argument: _user_GetUserLoginHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginHistory(argument: _user_GetUserLoginHistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginHistory(argument: _user_GetUserLoginHistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginHistory(argument: _user_GetUserLoginHistoryRequest, callback: grpc.requestCallback<_user_GetUserLoginHistoryResponseOutput>): grpc.ClientUnaryCall;
  
  GetUserLoginInfo(argument: _user_GetUserLoginInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginInfo(argument: _user_GetUserLoginInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginInfo(argument: _user_GetUserLoginInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  GetUserLoginInfo(argument: _user_GetUserLoginInfoRequest, callback: grpc.requestCallback<_user_GetUserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginInfo(argument: _user_GetUserLoginInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginInfo(argument: _user_GetUserLoginInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginInfo(argument: _user_GetUserLoginInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  getUserLoginInfo(argument: _user_GetUserLoginInfoRequest, callback: grpc.requestCallback<_user_GetUserLoginInfoResponseOutput>): grpc.ClientUnaryCall;
  
}

export interface UserServicesHandlers extends grpc.UntypedServiceImplementation {
  GetAllUsers: grpc.handleUnaryCall<_user_GetAllUsersRequestOutput, _user_GetAllUsersResponse>;
  
  GetUserDetails: grpc.handleUnaryCall<_user_GetUserDetailsRequestOutput, _user_GetUserDetailsResponse>;
  
  GetUserLoginHistory: grpc.handleUnaryCall<_user_GetUserLoginHistoryRequestOutput, _user_GetUserLoginHistoryResponse>;
  
  GetUserLoginInfo: grpc.handleUnaryCall<_user_GetUserLoginInfoRequestOutput, _user_GetUserLoginInfoResponse>;
  
}

export interface UserServicesDefinition extends grpc.ServiceDefinition {
  GetAllUsers: MethodDefinition<_user_GetAllUsersRequest, _user_GetAllUsersResponse, _user_GetAllUsersRequestOutput, _user_GetAllUsersResponseOutput>
  GetUserDetails: MethodDefinition<_user_GetUserDetailsRequest, _user_GetUserDetailsResponse, _user_GetUserDetailsRequestOutput, _user_GetUserDetailsResponseOutput>
  GetUserLoginHistory: MethodDefinition<_user_GetUserLoginHistoryRequest, _user_GetUserLoginHistoryResponse, _user_GetUserLoginHistoryRequestOutput, _user_GetUserLoginHistoryResponseOutput>
  GetUserLoginInfo: MethodDefinition<_user_GetUserLoginInfoRequest, _user_GetUserLoginInfoResponse, _user_GetUserLoginInfoRequestOutput, _user_GetUserLoginInfoResponseOutput>
}
