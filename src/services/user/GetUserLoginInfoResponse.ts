// Original file: src/proto/user.proto

import type { ResponseStatusEnum as _user_ResponseStatusEnum } from '../user/ResponseStatusEnum';
import type { GetUserLoginInfoResponseData as _user_GetUserLoginInfoResponseData, GetUserLoginInfoResponseDataOutput as _user_GetUserLoginInfoResponseDataOutput } from '../user/GetUserLoginInfoResponseData';

export interface GetUserLoginInfoResponse {
  'responseStatus'?: (_user_ResponseStatusEnum | keyof typeof _user_ResponseStatusEnum);
  'data'?: (_user_GetUserLoginInfoResponseData | null);
}

export interface GetUserLoginInfoResponseOutput {
  'responseStatus': (keyof typeof _user_ResponseStatusEnum);
  'data': (_user_GetUserLoginInfoResponseDataOutput | null);
}
