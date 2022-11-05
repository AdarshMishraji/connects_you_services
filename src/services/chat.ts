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
    InsertMessageSeenInfoForMessageRequest: MessageTypeDefinition
    InsertMessageSeenInfoForMessageResponse: MessageTypeDefinition
    Message: MessageTypeDefinition
    MessageSeenInfo: MessageTypeDefinition
    MessageTypeEnum: EnumTypeDefinition
    RemoveMessagesRequest: MessageTypeDefinition
    RemoveMessagesResponse: MessageTypeDefinition
    RemoveMessagesResponseData: MessageTypeDefinition
    ResponseStatusEnum: EnumTypeDefinition
    Thread: MessageTypeDefinition
  }
}

