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
import type { InsertMessageRequest as _chat_InsertMessageRequest, InsertMessageRequestOutput as _chat_InsertMessageRequestOutput } from '../chat/InsertMessageRequest';
import type { InsertMessageResponse as _chat_InsertMessageResponse, InsertMessageResponseOutput as _chat_InsertMessageResponseOutput } from '../chat/InsertMessageResponse';
import type { InsertMessageSeenInfoForMessageRequest as _chat_InsertMessageSeenInfoForMessageRequest, InsertMessageSeenInfoForMessageRequestOutput as _chat_InsertMessageSeenInfoForMessageRequestOutput } from '../chat/InsertMessageSeenInfoForMessageRequest';
import type { InsertMessageSeenInfoForMessageResponse as _chat_InsertMessageSeenInfoForMessageResponse, InsertMessageSeenInfoForMessageResponseOutput as _chat_InsertMessageSeenInfoForMessageResponseOutput } from '../chat/InsertMessageSeenInfoForMessageResponse';
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
  
  InsertMessage(argument: _chat_InsertMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertMessage(argument: _chat_InsertMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertMessage(argument: _chat_InsertMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertMessage(argument: _chat_InsertMessageRequest, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessage(argument: _chat_InsertMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessage(argument: _chat_InsertMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessage(argument: _chat_InsertMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessage(argument: _chat_InsertMessageRequest, callback: grpc.requestCallback<_chat_InsertMessageResponseOutput>): grpc.ClientUnaryCall;
  
  InsertMessageSeenInfoForMessage(argument: _chat_InsertMessageSeenInfoForMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertMessageSeenInfoForMessage(argument: _chat_InsertMessageSeenInfoForMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertMessageSeenInfoForMessage(argument: _chat_InsertMessageSeenInfoForMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessageResponseOutput>): grpc.ClientUnaryCall;
  InsertMessageSeenInfoForMessage(argument: _chat_InsertMessageSeenInfoForMessageRequest, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessageSeenInfoForMessage(argument: _chat_InsertMessageSeenInfoForMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessageSeenInfoForMessage(argument: _chat_InsertMessageSeenInfoForMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessageSeenInfoForMessage(argument: _chat_InsertMessageSeenInfoForMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessageResponseOutput>): grpc.ClientUnaryCall;
  insertMessageSeenInfoForMessage(argument: _chat_InsertMessageSeenInfoForMessageRequest, callback: grpc.requestCallback<_chat_InsertMessageSeenInfoForMessageResponseOutput>): grpc.ClientUnaryCall;
  
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
  
  InsertMessage: grpc.handleUnaryCall<_chat_InsertMessageRequestOutput, _chat_InsertMessageResponse>;
  
  InsertMessageSeenInfoForMessage: grpc.handleUnaryCall<_chat_InsertMessageSeenInfoForMessageRequestOutput, _chat_InsertMessageSeenInfoForMessageResponse>;
  
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
  InsertMessage: MethodDefinition<_chat_InsertMessageRequest, _chat_InsertMessageResponse, _chat_InsertMessageRequestOutput, _chat_InsertMessageResponseOutput>
  InsertMessageSeenInfoForMessage: MethodDefinition<_chat_InsertMessageSeenInfoForMessageRequest, _chat_InsertMessageSeenInfoForMessageResponse, _chat_InsertMessageSeenInfoForMessageRequestOutput, _chat_InsertMessageSeenInfoForMessageResponseOutput>
  RemoveMessages: MethodDefinition<_chat_RemoveMessagesRequest, _chat_RemoveMessagesResponse, _chat_RemoveMessagesRequestOutput, _chat_RemoveMessagesResponseOutput>
}
