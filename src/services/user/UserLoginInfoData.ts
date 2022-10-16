// Original file: src/proto/user.proto

import type { UserLoginInfo as _user_UserLoginInfo, UserLoginInfoOutput as _user_UserLoginInfoOutput } from '../user/UserLoginInfo';

export interface UserLoginInfoData {
  'userLoginInfo'?: (_user_UserLoginInfo | null);
}

export interface UserLoginInfoDataOutput {
  'userLoginInfo': (_user_UserLoginInfoOutput | null);
}
