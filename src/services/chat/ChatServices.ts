// Original file: src/proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateMessageThreadRequest as _chat_CreateMessageThreadRequest, CreateMessageThreadRequestOutput as _chat_CreateMessageThreadRequestOutput } from '../chat/CreateMessageThreadRequest';
import type { CreateMessageThreadResponse as _chat_CreateMessageThreadResponse, CreateMessageThreadResponseOutput as _chat_CreateMessageThreadResponseOutput } from '../chat/CreateMessageThreadResponse';
import type { DeleteRoomThreadRequest as _chat_DeleteRoomThreadRequest, DeleteRoomThreadRequestOutput as _chat_DeleteRoomThreadRequestOutput } from '../chat/DeleteRoomThreadRequest';
import type { DeleteRoomThreadResponse as _chat_DeleteRoomThreadResponse, DeleteRoomThreadResponseOutput as _chat_DeleteRoomThreadResponseOutput } from '../chat/DeleteRoomThreadResponse';
import type { EditMessageRequest as _chat_EditMessageRequest, EditMessageRequestOutput as _chat_EditMessageRequestOutput } from '../chat/EditMessageRequest';
import type { EditMessageResponse as _chat_EditMessageResponse, EditMessageResponseOutput as _chat_EditMessageResponseOutput } from '../chat/EditMessageResponse';
import type { GetRoomMessagesRequest as _chat_GetRoomMessagesRequest, GetRoomMessagesRequestOutput as _chat_GetRoomMessagesRequestOutput } from '../chat/GetRoomMessagesRequest';
import type { GetRoomMessagesResponse as _chat_GetRoomMessagesResponse, GetRoomMessagesResponseOutput as _chat_GetRoomMessagesResponseOutput } from '../chat/GetRoomMessagesResponse';
import type { GetRoomThreadsRequest as _chat_GetRoomThreadsRequest, GetRoomThreadsRequestOutput as _chat_GetRoomThreadsRequestOutput } from '../chat/GetRoomThreadsRequest';
import type { GetRoomThreadsResponse as _chat_GetRoomThreadsResponse, GetRoomThreadsResponseOutput as _chat_GetRoomThreadsResponseOutput } from '../chat/GetRoomThreadsResponse';
import type { GetThreadMessagesRequest as _chat_GetThreadMessagesRequest, GetThreadMessagesRequestOutput as _chat_GetThreadMessagesRequestOutput } from '../chat/GetThreadMessagesRequest';
import type { GetThreadMessagesResponse as _chat_GetThreadMessagesResponse, GetThreadMessagesResponseOutput as _chat_GetThreadMessagesResponseOutput } from '../chat/GetThreadMessagesResponse';
import type { GetUserMessagesRequest as _chat_GetUserMessagesRequest, GetUserMessagesRequestOutput as _chat_GetUserMessagesRequestOutput } from '../chat/GetUserMessagesRequest';
import type { GetUserMessagesResponse as _chat_GetUserMessagesResponse, GetUserMessagesResponseOutput as _chat_GetUserMessagesResponseOutput } from '../chat/GetUserMessagesResponse';
import type { InsertEmotionForMessageRequest as _chat_InsertEmotionForMessageRequest, InsertEmotionForMessageRequestOutput as _chat_InsertEmotionForMessageRequestOutput } from '../chat/InsertEmotionForMessageRequest';
import type { InsertEmotionForMessageResponse as _chat_InsertEmotionForMessageResponse, InsertEmotionForMessageResponseOutput as _chat_InsertEmotionForMessageResponseOutput } from '../chat/InsertEmotionForMessageResponse';
import type { InsertMessageRequest as _chat_InsertMessageRequest, InsertMessageRequestOutput as _chat_InsertMessageRequestOutput } from '../chat/InsertMessageRequest';
import type { InsertMessageResponse as _chat_InsertMessageResponse, InsertMessageResponseOutput as _chat_InsertMessageResponseOutput } from '../chat/InsertMessageResponse';
import type { InsertMessageSeenInfoForMessagesRequest as _chat_InsertMessageSeenInfoForMessagesRequest, InsertMessageSeenInfoForMessagesRequestOutput as _chat_InsertMessageSeenInfoForMessagesRequestOutput } from '../chat/InsertMessageSeenInfoForMessagesRequest';
import type { InsertMessageSeenInfoForMessagesResponse as _chat_InsertMessageSeenInfoForMessagesResponse, InsertMessageSeenInfoForMessagesResponseOutput as _chat_InsertMessageSeenInfoForMessagesResponseOutput } from '../chat/InsertMessageSeenInfoForMessagesResponse';
import type { RemoveEmotionForMessageRequest as _chat_RemoveEmotionForMessageRequest, RemoveEmotionForMessageRequestOutput as _chat_RemoveEmotionForMessageRequestOutput } from '../chat/RemoveEmotionForMessageRequest';
import type { RemoveEmotionForMessageResponse as _chat_RemoveEmotionForMessageResponse, RemoveEmotionForMessageResponseOutput as _chat_RemoveEmotionForMessageResponseOutput } from '../chat/RemoveEmotionForMessageResponse';
import type { RemoveMessagesRequest as _chat_RemoveMessagesRequest, RemoveMessagesRequestOutput as _chat_RemoveMessagesRequestOutput } from '../chat/RemoveMessagesRequest';
import type { RemoveMessagesResponse as _chat_RemoveMessagesResponse, RemoveMessagesResponseOutput as _chat_RemoveMessagesResponseOutput } from '../chat/RemoveMessagesResponse';

export interface ChatServicesClient extends grpc.Client {
  CreateMessageThread(argument: _chat_CreateMessageThreadRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageThreadResponseOutput>): grpc.ClientUnaryCall;
  CreateMessageThread(argument: _chat_CreateMessageThreadRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_CreateMessageThreadResponseOutput>): grpc.ClientUnaryCall;
  CreateMessageThread(argument: _chat_CreateMessageThreadRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageThreadResponseOutput>): grpc.ClientUnaryCall;
  CreateMessageThread(argument: _chat_CreateMessageThreadRequest, callback: grpc.requestCallback<_chat_CreateMessageThreadResponseOutput>): grpc.ClientUnaryCall;
  createMessageThread(argument: _chat_CreateMessageThreadRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageThreadResponseOutput>): grpc.ClientUnaryCall;
  createMessageThread(argument: _chat_CreateMessageThreadRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_CreateMessageThreadResponseOutput>): grpc.ClientUnaryCall;
  createMessageThread(argument: _chat_CreateMessageThreadRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_CreateMessageThreadResponseOutput>): grpc.ClientUnaryCall;
  createMessageThread(argument: _chat_CreateMessageThreadRequest, callback: grpc.requestCallback<_chat_CreateMessageThreadResponseOutput>): grpc.ClientUnaryCall;
  
  DeleteRoomThread(argument: _chat_DeleteRoomThreadRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomThreadResponseOutput>): grpc.ClientUnaryCall;
  DeleteRoomThread(argument: _chat_DeleteRoomThreadRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_DeleteRoomThreadResponseOutput>): grpc.ClientUnaryCall;
  DeleteRoomThread(argument: _chat_DeleteRoomThreadRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomThreadResponseOutput>): grpc.ClientUnaryCall;
  DeleteRoomThread(argument: _chat_DeleteRoomThreadRequest, callback: grpc.requestCallback<_chat_DeleteRoomThreadResponseOutput>): grpc.ClientUnaryCall;
  deleteRoomThread(argument: _chat_DeleteRoomThreadRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomThreadResponseOutput>): grpc.ClientUnaryCall;
  deleteRoomThread(argument: _chat_DeleteRoomThreadRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_DeleteRoomThreadResponseOutput>): grpc.ClientUnaryCall;
  deleteRoomThread(argument: _chat_DeleteRoomThreadRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_DeleteRoomThreadResponseOutput>): grpc.ClientUnaryCall;
  deleteRoomThread(argument: _chat_DeleteRoomThreadRequest, callback: grpc.requestCallback<_chat_DeleteRoomThreadResponseOutput>): grpc.ClientUnaryCall;
  
  EditMessage(argument: _chat_EditMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_EditMessageResponseOutput>): grpc.ClientUnaryCall;
  EditMessage(argument: _chat_EditMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_EditMessageResponseOutput>): grpc.ClientUnaryCall;
  EditMessage(argument: _chat_EditMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_EditMessageResponseOutput>): grpc.ClientUnaryCall;
  EditMessage(argument: _chat_EditMessageRequest, callback: grpc.requestCallback<_chat_EditMessageResponseOutput>): grpc.ClientUnaryCall;
  editMessage(argument: _chat_EditMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_EditMessageResponseOutput>): grpc.ClientUnaryCall;
  editMessage(argument: _chat_EditMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_EditMessageResponseOutput>): grpc.ClientUnaryCall;
  editMessage(argument: _chat_EditMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_EditMessageResponseOutput>): grpc.ClientUnaryCall;
  editMessage(argument: _chat_EditMessageRequest, callback: grpc.requestCallback<_chat_EditMessageResponseOutput>): grpc.ClientUnaryCall;
  
  GetRoomMessages(argument: _chat_GetRoomMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetRoomMessagesResponseOutput>): grpc.ClientUnaryCall;
  GetRoomMessages(argument: _chat_GetRoomMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_GetRoomMessagesResponseOutput>): grpc.ClientUnaryCall;
  GetRoomMessages(argument: _chat_GetRoomMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetRoomMessagesResponseOutput>): grpc.ClientUnaryCall;
  GetRoomMessages(argument: _chat_GetRoomMessagesRequest, callback: grpc.requestCallback<_chat_GetRoomMessagesResponseOutput>): grpc.ClientUnaryCall;
  getRoomMessages(argument: _chat_GetRoomMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetRoomMessagesResponseOutput>): grpc.ClientUnaryCall;
  getRoomMessages(argument: _chat_GetRoomMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_GetRoomMessagesResponseOutput>): grpc.ClientUnaryCall;
  getRoomMessages(argument: _chat_GetRoomMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetRoomMessagesResponseOutput>): grpc.ClientUnaryCall;
  getRoomMessages(argument: _chat_GetRoomMessagesRequest, callback: grpc.requestCallback<_chat_GetRoomMessagesResponseOutput>): grpc.ClientUnaryCall;
  
  GetRoomThreads(argument: _chat_GetRoomThreadsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetRoomThreadsResponseOutput>): grpc.ClientUnaryCall;
  GetRoomThreads(argument: _chat_GetRoomThreadsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_GetRoomThreadsResponseOutput>): grpc.ClientUnaryCall;
  GetRoomThreads(argument: _chat_GetRoomThreadsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetRoomThreadsResponseOutput>): grpc.ClientUnaryCall;
  GetRoomThreads(argument: _chat_GetRoomThreadsRequest, callback: grpc.requestCallback<_chat_GetRoomThreadsResponseOutput>): grpc.ClientUnaryCall;
  getRoomThreads(argument: _chat_GetRoomThreadsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetRoomThreadsResponseOutput>): grpc.ClientUnaryCall;
  getRoomThreads(argument: _chat_GetRoomThreadsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_GetRoomThreadsResponseOutput>): grpc.ClientUnaryCall;
  getRoomThreads(argument: _chat_GetRoomThreadsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetRoomThreadsResponseOutput>): grpc.ClientUnaryCall;
  getRoomThreads(argument: _chat_GetRoomThreadsRequest, callback: grpc.requestCallback<_chat_GetRoomThreadsResponseOutput>): grpc.ClientUnaryCall;
  
  GetThreadMessages(argument: _chat_GetThreadMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetThreadMessagesResponseOutput>): grpc.ClientUnaryCall;
  GetThreadMessages(argument: _chat_GetThreadMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_GetThreadMessagesResponseOutput>): grpc.ClientUnaryCall;
  GetThreadMessages(argument: _chat_GetThreadMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetThreadMessagesResponseOutput>): grpc.ClientUnaryCall;
  GetThreadMessages(argument: _chat_GetThreadMessagesRequest, callback: grpc.requestCallback<_chat_GetThreadMessagesResponseOutput>): grpc.ClientUnaryCall;
  getThreadMessages(argument: _chat_GetThreadMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetThreadMessagesResponseOutput>): grpc.ClientUnaryCall;
  getThreadMessages(argument: _chat_GetThreadMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_GetThreadMessagesResponseOutput>): grpc.ClientUnaryCall;
  getThreadMessages(argument: _chat_GetThreadMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetThreadMessagesResponseOutput>): grpc.ClientUnaryCall;
  getThreadMessages(argument: _chat_GetThreadMessagesRequest, callback: grpc.requestCallback<_chat_GetThreadMessagesResponseOutput>): grpc.ClientUnaryCall;
  
  GetUserMessages(argument: _chat_GetUserMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetUserMessagesResponseOutput>): grpc.ClientUnaryCall;
  GetUserMessages(argument: _chat_GetUserMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_GetUserMessagesResponseOutput>): grpc.ClientUnaryCall;
  GetUserMessages(argument: _chat_GetUserMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetUserMessagesResponseOutput>): grpc.ClientUnaryCall;
  GetUserMessages(argument: _chat_GetUserMessagesRequest, callback: grpc.requestCallback<_chat_GetUserMessagesResponseOutput>): grpc.ClientUnaryCall;
  getUserMessages(argument: _chat_GetUserMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetUserMessagesResponseOutput>): grpc.ClientUnaryCall;
  getUserMessages(argument: _chat_GetUserMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_GetUserMessagesResponseOutput>): grpc.ClientUnaryCall;
  getUserMessages(argument: _chat_GetUserMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_GetUserMessagesResponseOutput>): grpc.ClientUnaryCall;
  getUserMessages(argument: _chat_GetUserMessagesRequest, callback: grpc.requestCallback<_chat_GetUserMessagesResponseOutput>): grpc.ClientUnaryCall;
  
  InsertEmotionForMessage(argument: _chat_InsertEmotionForMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertEmotionForMessage(argument: _chat_InsertEmotionForMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_InsertEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertEmotionForMessage(argument: _chat_InsertEmotionForMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertEmotionForMessage(argument: _chat_InsertEmotionForMessageRequest, callback: grpc.requestCallback<_chat_InsertEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  insertEmotionForMessage(argument: _chat_InsertEmotionForMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  insertEmotionForMessage(argument: _chat_InsertEmotionForMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_InsertEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  insertEmotionForMessage(argument: _chat_InsertEmotionForMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  insertEmotionForMessage(argument: _chat_InsertEmotionForMessageRequest, callback: grpc.requestCallback<_chat_InsertEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  
  InsertMessage(argument: _chat_InsertMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertMessage(argument: _chat_InsertMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertMessage(argument: _chat_InsertMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertMessage(argument: _chat_InsertMessageRequest, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessage(argument: _chat_InsertMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessage(argument: _chat_InsertMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessage(argument: _chat_InsertMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessage(argument: _chat_InsertMessageRequest, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  
  InsertMessageSeenInfoForMessages(argument: _chat_InsertMessageSeenInfoForMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessagesResponseOutput>): grpc.ClientUnaryCall;
  InsertMessageSeenInfoForMessages(argument: _chat_InsertMessageSeenInfoForMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessagesResponseOutput>): grpc.ClientUnaryCall;
  InsertMessageSeenInfoForMessages(argument: _chat_InsertMessageSeenInfoForMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessagesResponseOutput>): grpc.ClientUnaryCall;
  InsertMessageSeenInfoForMessages(argument: _chat_InsertMessageSeenInfoForMessagesRequest, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessagesResponseOutput>): grpc.ClientUnaryCall;
  insertMessageSeenInfoForMessages(argument: _chat_InsertMessageSeenInfoForMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessagesResponseOutput>): grpc.ClientUnaryCall;
  insertMessageSeenInfoForMessages(argument: _chat_InsertMessageSeenInfoForMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessagesResponseOutput>): grpc.ClientUnaryCall;
  insertMessageSeenInfoForMessages(argument: _chat_InsertMessageSeenInfoForMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessagesResponseOutput>): grpc.ClientUnaryCall;
  insertMessageSeenInfoForMessages(argument: _chat_InsertMessageSeenInfoForMessagesRequest, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessagesResponseOutput>): grpc.ClientUnaryCall;
  
  RemoveEmotionForMessage(argument: _chat_RemoveEmotionForMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_RemoveEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  RemoveEmotionForMessage(argument: _chat_RemoveEmotionForMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_RemoveEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  RemoveEmotionForMessage(argument: _chat_RemoveEmotionForMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_RemoveEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  RemoveEmotionForMessage(argument: _chat_RemoveEmotionForMessageRequest, callback: grpc.requestCallback<_chat_RemoveEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  removeEmotionForMessage(argument: _chat_RemoveEmotionForMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_RemoveEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  removeEmotionForMessage(argument: _chat_RemoveEmotionForMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_RemoveEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  removeEmotionForMessage(argument: _chat_RemoveEmotionForMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_RemoveEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  removeEmotionForMessage(argument: _chat_RemoveEmotionForMessageRequest, callback: grpc.requestCallback<_chat_RemoveEmotionForMessageResponseOutput>): grpc.ClientUnaryCall;
  
  RemoveMessages(argument: _chat_RemoveMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_RemoveMessagesResponseOutput>): grpc.ClientUnaryCall;
  RemoveMessages(argument: _chat_RemoveMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_RemoveMessagesResponseOutput>): grpc.ClientUnaryCall;
  RemoveMessages(argument: _chat_RemoveMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_RemoveMessagesResponseOutput>): grpc.ClientUnaryCall;
  RemoveMessages(argument: _chat_RemoveMessagesRequest, callback: grpc.requestCallback<_chat_RemoveMessagesResponseOutput>): grpc.ClientUnaryCall;
  removeMessages(argument: _chat_RemoveMessagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_RemoveMessagesResponseOutput>): grpc.ClientUnaryCall;
  removeMessages(argument: _chat_RemoveMessagesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_RemoveMessagesResponseOutput>): grpc.ClientUnaryCall;
  removeMessages(argument: _chat_RemoveMessagesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_RemoveMessagesResponseOutput>): grpc.ClientUnaryCall;
  removeMessages(argument: _chat_RemoveMessagesRequest, callback: grpc.requestCallback<_chat_RemoveMessagesResponseOutput>): grpc.ClientUnaryCall;
  
}

export interface ChatServicesHandlers extends grpc.UntypedServiceImplementation {
  CreateMessageThread: grpc.handleUnaryCall<_chat_CreateMessageThreadRequestOutput, _chat_CreateMessageThreadResponse>;
  
  DeleteRoomThread: grpc.handleUnaryCall<_chat_DeleteRoomThreadRequestOutput, _chat_DeleteRoomThreadResponse>;
  
  EditMessage: grpc.handleUnaryCall<_chat_EditMessageRequestOutput, _chat_EditMessageResponse>;
  
  GetRoomMessages: grpc.handleUnaryCall<_chat_GetRoomMessagesRequestOutput, _chat_GetRoomMessagesResponse>;
  
  GetRoomThreads: grpc.handleUnaryCall<_chat_GetRoomThreadsRequestOutput, _chat_GetRoomThreadsResponse>;
  
  GetThreadMessages: grpc.handleUnaryCall<_chat_GetThreadMessagesRequestOutput, _chat_GetThreadMessagesResponse>;
  
  GetUserMessages: grpc.handleUnaryCall<_chat_GetUserMessagesRequestOutput, _chat_GetUserMessagesResponse>;
  
  InsertEmotionForMessage: grpc.handleUnaryCall<_chat_InsertEmotionForMessageRequestOutput, _chat_InsertEmotionForMessageResponse>;
  
  InsertMessage: grpc.handleUnaryCall<_chat_InsertMessageRequestOutput, _chat_InsertMessageResponse>;
  
  InsertMessageSeenInfoForMessages: grpc.handleUnaryCall<_chat_InsertMessageSeenInfoForMessagesRequestOutput, _chat_InsertMessageSeenInfoForMessagesResponse>;
  
  RemoveEmotionForMessage: grpc.handleUnaryCall<_chat_RemoveEmotionForMessageRequestOutput, _chat_RemoveEmotionForMessageResponse>;
  
  RemoveMessages: grpc.handleUnaryCall<_chat_RemoveMessagesRequestOutput, _chat_RemoveMessagesResponse>;
  
}

export interface ChatServicesDefinition extends grpc.ServiceDefinition {
  CreateMessageThread: MethodDefinition<_chat_CreateMessageThreadRequest, _chat_CreateMessageThreadResponse, _chat_CreateMessageThreadRequestOutput, _chat_CreateMessageThreadResponseOutput>
  DeleteRoomThread: MethodDefinition<_chat_DeleteRoomThreadRequest, _chat_DeleteRoomThreadResponse, _chat_DeleteRoomThreadRequestOutput, _chat_DeleteRoomThreadResponseOutput>
  EditMessage: MethodDefinition<_chat_EditMessageRequest, _chat_EditMessageResponse, _chat_EditMessageRequestOutput, _chat_EditMessageResponseOutput>
  GetRoomMessages: MethodDefinition<_chat_GetRoomMessagesRequest, _chat_GetRoomMessagesResponse, _chat_GetRoomMessagesRequestOutput, _chat_GetRoomMessagesResponseOutput>
  GetRoomThreads: MethodDefinition<_chat_GetRoomThreadsRequest, _chat_GetRoomThreadsResponse, _chat_GetRoomThreadsRequestOutput, _chat_GetRoomThreadsResponseOutput>
  GetThreadMessages: MethodDefinition<_chat_GetThreadMessagesRequest, _chat_GetThreadMessagesResponse, _chat_GetThreadMessagesRequestOutput, _chat_GetThreadMessagesResponseOutput>
  GetUserMessages: MethodDefinition<_chat_GetUserMessagesRequest, _chat_GetUserMessagesResponse, _chat_GetUserMessagesRequestOutput, _chat_GetUserMessagesResponseOutput>
  InsertEmotionForMessage: MethodDefinition<_chat_InsertEmotionForMessageRequest, _chat_InsertEmotionForMessageResponse, _chat_InsertEmotionForMessageRequestOutput, _chat_InsertEmotionForMessageResponseOutput>
  InsertMessage: MethodDefinition<_chat_InsertMessageRequest, _chat_InsertMessageResponse, _chat_InsertMessageRequestOutput, _chat_InsertMessageResponseOutput>
  InsertMessageSeenInfoForMessages: MethodDefinition<_chat_InsertMessageSeenInfoForMessagesRequest, _chat_InsertMessageSeenInfoForMessagesResponse, _chat_InsertMessageSeenInfoForMessagesRequestOutput, _chat_InsertMessageSeenInfoForMessagesResponseOutput>
  RemoveEmotionForMessage: MethodDefinition<_chat_RemoveEmotionForMessageRequest, _chat_RemoveEmotionForMessageResponse, _chat_RemoveEmotionForMessageRequestOutput, _chat_RemoveEmotionForMessageResponseOutput>
  RemoveMessages: MethodDefinition<_chat_RemoveMessagesRequest, _chat_RemoveMessagesResponse, _chat_RemoveMessagesRequestOutput, _chat_RemoveMessagesResponseOutput>
}
