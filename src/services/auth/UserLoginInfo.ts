// Original file: src/proto/auth.proto

import type { ClientMetaData as _auth_ClientMetaData, ClientMetaDataOutput as _auth_ClientMetaDataOutput } from '../auth/ClientMetaData';

export interface UserLoginInfo {
  'userId'?: (string);
  'loginId'?: (string);
  'loginMetaData'?: (_auth_ClientMetaData | null);
  'isValid'?: (boolean);
  'createdAt'?: (string);
}

export interface UserLoginInfoOutput {
  'userId': (string);
  'loginId': (string);
  'loginMetaData': (_auth_ClientMetaDataOutput | null);
  'isValid': (boolean);
  'createdAt': (string);
}
