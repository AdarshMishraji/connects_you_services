// Original file: src/proto/user.proto

import type { UserDetails as _user_UserDetails, UserDetailsOutput as _user_UserDetailsOutput } from '../user/UserDetails';

export interface RepeatedUserDetails {
  'users'?: (_user_UserDetails)[];
}

export interface RepeatedUserDetailsOutput {
  'users': (_user_UserDetailsOutput)[];
}
