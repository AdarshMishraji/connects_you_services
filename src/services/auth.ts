import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServicesClient as _auth_AuthServicesClient, AuthServicesDefinition as _auth_AuthServicesDefinition } from './auth/AuthServices';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  auth: {
    AuthServices: SubtypeConstructor<typeof grpc.Client, _auth_AuthServicesClient> & { service: _auth_AuthServicesDefinition }
    AuthTypeEnum: EnumTypeDefinition
    AuthenticateRequest: MessageTypeDefinition
    AuthenticateResponse: MessageTypeDefinition
    AuthenticateResponseData: MessageTypeDefinition
    AuthenticatedUser: MessageTypeDefinition
    ClientMetaData: MessageTypeDefinition
    GeoData: MessageTypeDefinition
    RefreshTokenRequest: MessageTypeDefinition
    RefreshTokenResponse: MessageTypeDefinition
    RefreshTokenResponseData: MessageTypeDefinition
    ResponseStatusEnum: EnumTypeDefinition
    SignoutRequest: MessageTypeDefinition
    SignoutResponse: MessageTypeDefinition
    TokenTypesEnum: EnumTypeDefinition
    UpdateFcmTokenRequest: MessageTypeDefinition
    UpdateFcmTokenResponse: MessageTypeDefinition
    UserLoginInfo: MessageTypeDefinition
  }
}

