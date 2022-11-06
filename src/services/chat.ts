import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatServicesClient as _chat_ChatServicesClient, ChatServicesDefinition as _chat_ChatServicesDefinition } from './chat/ChatServices';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chat: {
    ChatServices: SubtypeConstructor<typeof grpc.Client, _chat_ChatServicesClient> & { service: _chat_ChatServicesDefinition }
    CreateMessageThreadRequest: MessageTypeDefinition
    CreateMessageThreadResponse: MessageTypeDefinition
    DeleteRoomThreadRequest: MessageTypeDefinition
    DeleteRoomThreadResponse: MessageTypeDefinition
    EditMessageRequest: MessageTypeDefinition
    EditMessageResponse: MessageTypeDefinition
    Emotion: MessageTypeDefinition
    GetRoomMessagesRequest: MessageTypeDefinition
    GetRoomMessagesResponse: MessageTypeDefinition
    GetRoomMessagesResponseData: MessageTypeDefinition
    GetRoomThreadsRequest: MessageTypeDefinition
    GetRoomThreadsResponse: MessageTypeDefinition
    GetRoomThreadsResponseData: MessageTypeDefinition
    GetThreadMessagesRequest: MessageTypeDefinition
    GetThreadMessagesResponse: MessageTypeDefinition
    GetThreadMessagesResponseData: MessageTypeDefinition
    GetUserMessagesRequest: MessageTypeDefinition
    GetUserMessagesResponse: MessageTypeDefinition
    GetUserMessagesResponseData: MessageTypeDefinition
    InsertMessageRequest: MessageTypeDefinition
    InsertMessageResponse: MessageTypeDefinition
    InsertMessageResponseData: MessageTypeDefinition
    InsertMessageSeenInfoForMessagesRequest: MessageTypeDefinition
    InsertMessageSeenInfoForMessagesResponse: MessageTypeDefinition
    Message: MessageTypeDefinition
    MessageSeenInfo: MessageTypeDefinition
    MessageTypeEnum: EnumTypeDefinition
    RemoveMessagesRequest: MessageTypeDefinition
    RemoveMessagesResponse: MessageTypeDefinition
    ResponseStatusEnum: EnumTypeDefinition
    Thread: MessageTypeDefinition
  }
}

export * from './chat/ChatServices';export * from './chat/CreateMessageThreadRequest';export * from './chat/CreateMessageThreadResponse';export * from './chat/DeleteRoomThreadRequest';export * from './chat/DeleteRoomThreadResponse';export * from './chat/EditMessageRequest';export * from './chat/EditMessageResponse';export * from './chat/Emotion';export * from './chat/GetRoomMessagesRequest';export * from './chat/GetRoomMessagesResponse';export * from './chat/GetRoomMessagesResponseData';export * from './chat/GetRoomThreadsRequest';export * from './chat/GetRoomThreadsResponse';export * from './chat/GetRoomThreadsResponseData';export * from './chat/GetThreadMessagesRequest';export * from './chat/GetThreadMessagesResponse';export * from './chat/GetThreadMessagesResponseData';export * from './chat/GetUserMessagesRequest';export * from './chat/GetUserMessagesResponse';export * from './chat/GetUserMessagesResponseData';export * from './chat/InsertMessageRequest';export * from './chat/InsertMessageResponse';export * from './chat/InsertMessageResponseData';export * from './chat/InsertMessageSeenInfoForMessagesRequest';export * from './chat/InsertMessageSeenInfoForMessagesResponse';export * from './chat/Message';export * from './chat/MessageSeenInfo';export * from './chat/MessageTypeEnum';export * from './chat/RemoveMessagesRequest';export * from './chat/RemoveMessagesResponse';export * from './chat/ResponseStatusEnum';export * from './chat/Thread';