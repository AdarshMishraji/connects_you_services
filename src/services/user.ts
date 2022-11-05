import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServicesClient as _user_UserServicesClient, UserServicesDefinition as _user_UserServicesDefinition } from './user/UserServices';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user: {
    ClientMetaData: MessageTypeDefinition
    GeoData: MessageTypeDefinition
    GetAllUsersRequest: MessageTypeDefinition
    GetAllUsersResponse: MessageTypeDefinition
    GetUserDetailsRequest: MessageTypeDefinition
    GetUserDetailsResponse: MessageTypeDefinition
    GetUserDetailsResponseData: MessageTypeDefinition
    GetUserLoginHistoryRequest: MessageTypeDefinition
    GetUserLoginHistoryResponse: MessageTypeDefinition
    GetUserLoginHistoryResponseData: MessageTypeDefinition
    GetUserLoginInfoRequest: MessageTypeDefinition
    GetUserLoginInfoResponse: MessageTypeDefinition
    GetUserLoginInfoResponseData: MessageTypeDefinition
    RepeatedUserDetails: MessageTypeDefinition
    ResponseStatusEnum: EnumTypeDefinition
    UserDetails: MessageTypeDefinition
    UserLoginInfo: MessageTypeDefinition
    UserServices: SubtypeConstructor<typeof grpc.Client, _user_UserServicesClient> & { service: _user_UserServicesDefinition }
  }
}

