// Original file: src/proto/auth.proto

import type { ResponseStatusEnum as _auth_ResponseStatusEnum } from '../auth/ResponseStatusEnum';
import type { AuthenticateResponseData as _auth_AuthenticateResponseData, AuthenticateResponseDataOutput as _auth_AuthenticateResponseDataOutput } from '../auth/AuthenticateResponseData';

export interface AuthenticateResponse {
  'responseStatus'?: (_auth_ResponseStatusEnum | keyof typeof _auth_ResponseStatusEnum);
  'data'?: (_auth_AuthenticateResponseData | null);
}

export interface AuthenticateResponseOutput {
  'responseStatus': (keyof typeof _auth_ResponseStatusEnum);
  'data': (_auth_AuthenticateResponseDataOutput | null);
}
