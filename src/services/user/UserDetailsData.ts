// Original file: src/proto/user.proto

import type { UserDetails as _user_UserDetails, UserDetailsOutput as _user_UserDetailsOutput } from '../user/UserDetails';

export interface UserDetailsData {
  'user'?: (_user_UserDetails | null);
}

export interface UserDetailsDataOutput {
  'user': (_user_UserDetailsOutput | null);
}
