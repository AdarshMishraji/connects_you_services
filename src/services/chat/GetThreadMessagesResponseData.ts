// Original file: src/proto/chat.proto

import type { Message as _chat_Message, MessageOutput as _chat_MessageOutput } from '../chat/Message';

export interface GetThreadMessagesResponseData {
  'messages'?: (_chat_Message)[];
}

export interface GetThreadMessagesResponseDataOutput {
  'messages': (_chat_MessageOutput)[];
}
