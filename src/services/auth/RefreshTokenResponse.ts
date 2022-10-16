// Original file: src/proto/auth.proto

import type { ResponseStatusEnum as _auth_ResponseStatusEnum } from '../auth/ResponseStatusEnum';
import type { RefreshTokenResponseData as _auth_RefreshTokenResponseData, RefreshTokenResponseDataOutput as _auth_RefreshTokenResponseDataOutput } from '../auth/RefreshTokenResponseData';

export interface RefreshTokenResponse {
  'responseStatus'?: (_auth_ResponseStatusEnum | keyof typeof _auth_ResponseStatusEnum);
  'data'?: (_auth_RefreshTokenResponseData | null);
}

export interface RefreshTokenResponseOutput {
  'responseStatus': (keyof typeof _auth_ResponseStatusEnum);
  'data': (_auth_RefreshTokenResponseDataOutput | null);
}
