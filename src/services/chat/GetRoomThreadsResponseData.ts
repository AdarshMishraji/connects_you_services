// Original file: src/proto/chat.proto

import type { Thread as _chat_Thread, ThreadOutput as _chat_ThreadOutput } from '../chat/Thread';

export interface GetRoomThreadsResponseData {
  'threads'?: (_chat_Thread)[];
}

export interface GetRoomThreadsResponseDataOutput {
  'threads': (_chat_ThreadOutput)[];
}
