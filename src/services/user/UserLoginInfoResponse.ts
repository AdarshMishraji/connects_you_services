// Original file: src/proto/user.proto

import type { ResponseStatusEnum as _user_ResponseStatusEnum } from '../user/ResponseStatusEnum';
import type { UserLoginInfoData as _user_UserLoginInfoData, UserLoginInfoDataOutput as _user_UserLoginInfoDataOutput } from '../user/UserLoginInfoData';

export interface UserLoginInfoResponse {
  'responseStatus'?: (_user_ResponseStatusEnum | keyof typeof _user_ResponseStatusEnum);
  'data'?: (_user_UserLoginInfoData | null);
}

export interface UserLoginInfoResponseOutput {
  'responseStatus': (keyof typeof _user_ResponseStatusEnum);
  'data': (_user_UserLoginInfoDataOutput | null);
}
