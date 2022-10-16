// Original file: src/proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AuthenticateRequest as _auth_AuthenticateRequest, AuthenticateRequestOutput as _auth_AuthenticateRequestOutput } from '../auth/AuthenticateRequest';
import type { AuthenticateResponse as _auth_AuthenticateResponse, AuthenticateResponseOutput as _auth_AuthenticateResponseOutput } from '../auth/AuthenticateResponse';
import type { RefreshTokenRequest as _auth_RefreshTokenRequest, RefreshTokenRequestOutput as _auth_RefreshTokenRequestOutput } from '../auth/RefreshTokenRequest';
import type { RefreshTokenResponse as _auth_RefreshTokenResponse, RefreshTokenResponseOutput as _auth_RefreshTokenResponseOutput } from '../auth/RefreshTokenResponse';
import type { SignoutRequest as _auth_SignoutRequest, SignoutRequestOutput as _auth_SignoutRequestOutput } from '../auth/SignoutRequest';
import type { SignoutResponse as _auth_SignoutResponse, SignoutResponseOutput as _auth_SignoutResponseOutput } from '../auth/SignoutResponse';
import type { UpdateFcmTokenRequest as _auth_UpdateFcmTokenRequest, UpdateFcmTokenRequestOutput as _auth_UpdateFcmTokenRequestOutput } from '../auth/UpdateFcmTokenRequest';
import type { UpdateFcmTokenResponse as _auth_UpdateFcmTokenResponse, UpdateFcmTokenResponseOutput as _auth_UpdateFcmTokenResponseOutput } from '../auth/UpdateFcmTokenResponse';

export interface AuthServicesClient extends grpc.Client {
  Authenticate(argument: _auth_AuthenticateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_AuthenticateResponseOutput>): grpc.ClientUnaryCall;
  Authenticate(argument: _auth_AuthenticateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_AuthenticateResponseOutput>): grpc.ClientUnaryCall;
  Authenticate(argument: _auth_AuthenticateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_AuthenticateResponseOutput>): grpc.ClientUnaryCall;
  Authenticate(argument: _auth_AuthenticateRequest, callback: grpc.requestCallback<_auth_AuthenticateResponseOutput>): grpc.ClientUnaryCall;
  authenticate(argument: _auth_AuthenticateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_AuthenticateResponseOutput>): grpc.ClientUnaryCall;
  authenticate(argument: _auth_AuthenticateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_AuthenticateResponseOutput>): grpc.ClientUnaryCall;
  authenticate(argument: _auth_AuthenticateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_AuthenticateResponseOutput>): grpc.ClientUnaryCall;
  authenticate(argument: _auth_AuthenticateRequest, callback: grpc.requestCallback<_auth_AuthenticateResponseOutput>): grpc.ClientUnaryCall;
  
  RefreshToken(argument: _auth_RefreshTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshTokenResponseOutput>): grpc.ClientUnaryCall;
  RefreshToken(argument: _auth_RefreshTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_RefreshTokenResponseOutput>): grpc.ClientUnaryCall;
  RefreshToken(argument: _auth_RefreshTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshTokenResponseOutput>): grpc.ClientUnaryCall;
  RefreshToken(argument: _auth_RefreshTokenRequest, callback: grpc.requestCallback<_auth_RefreshTokenResponseOutput>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshTokenResponseOutput>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_RefreshTokenResponseOutput>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshTokenResponseOutput>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshTokenRequest, callback: grpc.requestCallback<_auth_RefreshTokenResponseOutput>): grpc.ClientUnaryCall;
  
  Signout(argument: _auth_SignoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignoutResponseOutput>): grpc.ClientUnaryCall;
  Signout(argument: _auth_SignoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignoutResponseOutput>): grpc.ClientUnaryCall;
  Signout(argument: _auth_SignoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignoutResponseOutput>): grpc.ClientUnaryCall;
  Signout(argument: _auth_SignoutRequest, callback: grpc.requestCallback<_auth_SignoutResponseOutput>): grpc.ClientUnaryCall;
  signout(argument: _auth_SignoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignoutResponseOutput>): grpc.ClientUnaryCall;
  signout(argument: _auth_SignoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignoutResponseOutput>): grpc.ClientUnaryCall;
  signout(argument: _auth_SignoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignoutResponseOutput>): grpc.ClientUnaryCall;
  signout(argument: _auth_SignoutRequest, callback: grpc.requestCallback<_auth_SignoutResponseOutput>): grpc.ClientUnaryCall;
  
  UpdateFcmToken(argument: _auth_UpdateFcmTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UpdateFcmTokenResponseOutput>): grpc.ClientUnaryCall;
  UpdateFcmToken(argument: _auth_UpdateFcmTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_UpdateFcmTokenResponseOutput>): grpc.ClientUnaryCall;
  UpdateFcmToken(argument: _auth_UpdateFcmTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UpdateFcmTokenResponseOutput>): grpc.ClientUnaryCall;
  UpdateFcmToken(argument: _auth_UpdateFcmTokenRequest, callback: grpc.requestCallback<_auth_UpdateFcmTokenResponseOutput>): grpc.ClientUnaryCall;
  updateFcmToken(argument: _auth_UpdateFcmTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UpdateFcmTokenResponseOutput>): grpc.ClientUnaryCall;
  updateFcmToken(argument: _auth_UpdateFcmTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_UpdateFcmTokenResponseOutput>): grpc.ClientUnaryCall;
  updateFcmToken(argument: _auth_UpdateFcmTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UpdateFcmTokenResponseOutput>): grpc.ClientUnaryCall;
  updateFcmToken(argument: _auth_UpdateFcmTokenRequest, callback: grpc.requestCallback<_auth_UpdateFcmTokenResponseOutput>): grpc.ClientUnaryCall;
  
}

export interface AuthServicesHandlers extends grpc.UntypedServiceImplementation {
  Authenticate: grpc.handleUnaryCall<_auth_AuthenticateRequestOutput, _auth_AuthenticateResponse>;
  
  RefreshToken: grpc.handleUnaryCall<_auth_RefreshTokenRequestOutput, _auth_RefreshTokenResponse>;
  
  Signout: grpc.handleUnaryCall<_auth_SignoutRequestOutput, _auth_SignoutResponse>;
  
  UpdateFcmToken: grpc.handleUnaryCall<_auth_UpdateFcmTokenRequestOutput, _auth_UpdateFcmTokenResponse>;
  
}

export interface AuthServicesDefinition extends grpc.ServiceDefinition {
  Authenticate: MethodDefinition<_auth_AuthenticateRequest, _auth_AuthenticateResponse, _auth_AuthenticateRequestOutput, _auth_AuthenticateResponseOutput>
  RefreshToken: MethodDefinition<_auth_RefreshTokenRequest, _auth_RefreshTokenResponse, _auth_RefreshTokenRequestOutput, _auth_RefreshTokenResponseOutput>
  Signout: MethodDefinition<_auth_SignoutRequest, _auth_SignoutResponse, _auth_SignoutRequestOutput, _auth_SignoutResponseOutput>
  UpdateFcmToken: MethodDefinition<_auth_UpdateFcmTokenRequest, _auth_UpdateFcmTokenResponse, _auth_UpdateFcmTokenRequestOutput, _auth_UpdateFcmTokenResponseOutput>
}
