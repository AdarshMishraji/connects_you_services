// Original file: src/proto/auth.proto

import type { ClientMetaData as _auth_ClientMetaData, ClientMetaDataOutput as _auth_ClientMetaDataOutput } from '../auth/ClientMetaData';

export interface AuthenticateRequest {
  'token'?: (string);
  'publicKey'?: (string);
  'fcmToken'?: (string);
  'clientMetaData'?: (_auth_ClientMetaData | null);
  '_clientMetaData'?: "clientMetaData";
}

export interface AuthenticateRequestOutput {
  'token': (string);
  'publicKey': (string);
  'fcmToken': (string);
  'clientMetaData'?: (_auth_ClientMetaDataOutput | null);
  '_clientMetaData': "clientMetaData";
}
