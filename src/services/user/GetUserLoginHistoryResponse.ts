// Original file: src/proto/user.proto

import type { ResponseStatusEnum as _user_ResponseStatusEnum } from '../user/ResponseStatusEnum';
import type { GetUserLoginHistoryResponseData as _user_GetUserLoginHistoryResponseData, GetUserLoginHistoryResponseDataOutput as _user_GetUserLoginHistoryResponseDataOutput } from '../user/GetUserLoginHistoryResponseData';

export interface GetUserLoginHistoryResponse {
  'responseStatus'?: (_user_ResponseStatusEnum | keyof typeof _user_ResponseStatusEnum);
  'data'?: (_user_GetUserLoginHistoryResponseData | null);
}

export interface GetUserLoginHistoryResponseOutput {
  'responseStatus': (keyof typeof _user_ResponseStatusEnum);
  'data': (_user_GetUserLoginHistoryResponseDataOutput | null);
}
