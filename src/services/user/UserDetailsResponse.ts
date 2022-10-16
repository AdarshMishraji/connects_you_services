// Original file: src/proto/user.proto

import type { ResponseStatusEnum as _user_ResponseStatusEnum } from '../user/ResponseStatusEnum';
import type { UserDetailsData as _user_UserDetailsData, UserDetailsDataOutput as _user_UserDetailsDataOutput } from '../user/UserDetailsData';

export interface UserDetailsResponse {
  'responseStatus'?: (_user_ResponseStatusEnum | keyof typeof _user_ResponseStatusEnum);
  'data'?: (_user_UserDetailsData | null);
}

export interface UserDetailsResponseOutput {
  'responseStatus': (keyof typeof _user_ResponseStatusEnum);
  'data': (_user_UserDetailsDataOutput | null);
}
