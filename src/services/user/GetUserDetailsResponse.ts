// Original file: src/proto/user.proto

import type { ResponseStatusEnum as _user_ResponseStatusEnum } from '../user/ResponseStatusEnum';
import type { GetUserDetailsResponseData as _user_GetUserDetailsResponseData, GetUserDetailsResponseDataOutput as _user_GetUserDetailsResponseDataOutput } from '../user/GetUserDetailsResponseData';

export interface GetUserDetailsResponse {
  'responseStatus'?: (_user_ResponseStatusEnum | keyof typeof _user_ResponseStatusEnum);
  'data'?: (_user_GetUserDetailsResponseData | null);
}

export interface GetUserDetailsResponseOutput {
  'responseStatus': (keyof typeof _user_ResponseStatusEnum);
  'data': (_user_GetUserDetailsResponseDataOutput | null);
}
