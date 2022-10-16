// Original file: src/proto/user.proto

import type { ResponseStatusEnum as _user_ResponseStatusEnum } from '../user/ResponseStatusEnum';
import type { UserLoginHistoryData as _user_UserLoginHistoryData, UserLoginHistoryDataOutput as _user_UserLoginHistoryDataOutput } from '../user/UserLoginHistoryData';

export interface UserLoginHistoryResponse {
  'responseStatus'?: (_user_ResponseStatusEnum | keyof typeof _user_ResponseStatusEnum);
  'data'?: (_user_UserLoginHistoryData | null);
}

export interface UserLoginHistoryResponseOutput {
  'responseStatus': (keyof typeof _user_ResponseStatusEnum);
  'data': (_user_UserLoginHistoryDataOutput | null);
}
