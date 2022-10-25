// Original file: src/proto/auth.proto

import type { AuthTypeEnum as _auth_AuthTypeEnum } from '../auth/AuthTypeEnum';
import type { AuthenticatedUser as _auth_AuthenticatedUser, AuthenticatedUserOutput as _auth_AuthenticatedUserOutput } from '../auth/AuthenticatedUser';
import type { UserLoginInfo as _auth_UserLoginInfo, UserLoginInfoOutput as _auth_UserLoginInfoOutput } from '../auth/UserLoginInfo';

export interface AuthenticateResponseData {
  'method'?: (_auth_AuthTypeEnum | keyof typeof _auth_AuthTypeEnum);
  'user'?: (_auth_AuthenticatedUser | null);
  'loginInfo'?: (_auth_UserLoginInfo | null);
}

export interface AuthenticateResponseDataOutput {
  'method': (keyof typeof _auth_AuthTypeEnum);
  'user': (_auth_AuthenticatedUserOutput | null);
  'loginInfo': (_auth_UserLoginInfoOutput | null);
}
