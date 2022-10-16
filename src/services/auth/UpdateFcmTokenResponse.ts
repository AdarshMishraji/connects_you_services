// Original file: src/proto/auth.proto

import type { ResponseStatusEnum as _auth_ResponseStatusEnum } from '../auth/ResponseStatusEnum';

export interface UpdateFcmTokenResponse {
  'responseStatus'?: (_auth_ResponseStatusEnum | keyof typeof _auth_ResponseStatusEnum);
}

export interface UpdateFcmTokenResponseOutput {
  'responseStatus': (keyof typeof _auth_ResponseStatusEnum);
}
