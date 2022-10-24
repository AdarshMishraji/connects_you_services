import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServicesClient as _user_UserServicesClient, UserServicesDefinition as _user_UserServicesDefinition } from './user/UserServices';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user: {
    AllUsersRequest: MessageTypeDefinition
    AllUsersResponse: MessageTypeDefinition
    ClientMetaData: MessageTypeDefinition
    GeoData: MessageTypeDefinition
    RepeatedUserDetails: MessageTypeDefinition
    ResponseStatusEnum: EnumTypeDefinition
    UserDetails: MessageTypeDefinition
    UserDetailsData: MessageTypeDefinition
    UserDetailsRequest: MessageTypeDefinition
    UserDetailsResponse: MessageTypeDefinition
    UserLoginHistoryData: MessageTypeDefinition
    UserLoginHistoryRequest: MessageTypeDefinition
    UserLoginHistoryResponse: MessageTypeDefinition
    UserLoginInfo: MessageTypeDefinition
    UserLoginInfoData: MessageTypeDefinition
    UserLoginInfoRequest: MessageTypeDefinition
    UserLoginInfoResponse: MessageTypeDefinition
    UserServices: SubtypeConstructor<typeof grpc.Client, _user_UserServicesClient> & { service: _user_UserServicesDefinition }
  }
}

