// Original file: src/proto/user.proto

import type { ClientMetaData as _user_ClientMetaData, ClientMetaDataOutput as _user_ClientMetaDataOutput } from '../user/ClientMetaData';

export interface UserLoginInfo {
  'userId'?: (string);
  'loginId'?: (string);
  'loginMetaData'?: (_user_ClientMetaData | null);
  'isValid'?: (boolean);
  'createdAt'?: (string);
}

export interface UserLoginInfoOutput {
  'userId': (string);
  'loginId': (string);
  'loginMetaData': (_user_ClientMetaDataOutput | null);
  'isValid': (boolean);
  'createdAt': (string);
}
