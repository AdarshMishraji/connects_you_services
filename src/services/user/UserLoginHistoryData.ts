// Original file: src/proto/user.proto

import type { UserLoginInfo as _user_UserLoginInfo, UserLoginInfoOutput as _user_UserLoginInfoOutput } from '../user/UserLoginInfo';

export interface UserLoginHistoryData {
  'userLoginHistory'?: (_user_UserLoginInfo)[];
  'total'?: (number);
}

export interface UserLoginHistoryDataOutput {
  'userLoginHistory': (_user_UserLoginInfoOutput)[];
  'total': (number);
}
