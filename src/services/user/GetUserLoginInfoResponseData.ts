// Original file: src/proto/user.proto

import type { UserLoginInfo as _user_UserLoginInfo, UserLoginInfoOutput as _user_UserLoginInfoOutput } from '../user/UserLoginInfo';

export interface GetUserLoginInfoResponseData {
  'userLoginInfo'?: (_user_UserLoginInfo | null);
}

export interface GetUserLoginInfoResponseDataOutput {
  'userLoginInfo': (_user_UserLoginInfoOutput | null);
}
