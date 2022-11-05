// Original file: src/proto/chat.proto

import type { Message as _chat_Message, MessageOutput as _chat_MessageOutput } from '../chat/Message';

export interface GetUserMessagesResponseData {
  'messages'?: (_chat_Message)[];
}

export interface GetUserMessagesResponseDataOutput {
  'messages': (_chat_MessageOutput)[];
}
