// Original file: src/proto/user.proto

import type { ResponseStatusEnum as _user_ResponseStatusEnum } from '../user/ResponseStatusEnum';

export interface SetUserOnlineStatusResponse {
  'responseStatus'?: (_user_ResponseStatusEnum | keyof typeof _user_ResponseStatusEnum);
}

export interface SetUserOnlineStatusResponseOutput {
  'responseStatus': (keyof typeof _user_ResponseStatusEnum);
}
