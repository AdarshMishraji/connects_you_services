// Original file: src/proto/user.proto

import type { ResponseStatusEnum as _user_ResponseStatusEnum } from '../user/ResponseStatusEnum';
import type { RepeatedUserDetails as _user_RepeatedUserDetails, RepeatedUserDetailsOutput as _user_RepeatedUserDetailsOutput } from '../user/RepeatedUserDetails';

export interface GetAllUsersResponse {
  'responseStatus'?: (_user_ResponseStatusEnum | keyof typeof _user_ResponseStatusEnum);
  'data'?: (_user_RepeatedUserDetails | null);
}

export interface GetAllUsersResponseOutput {
  'responseStatus': (keyof typeof _user_ResponseStatusEnum);
  'data': (_user_RepeatedUserDetailsOutput | null);
}
