import path from 'path';

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

export type TServiceRecord = 'auth' | 'user' | 'room';

export const ServicesRecord: Record<TServiceRecord, string> = {
	auth: './proto/auth.proto',
	user: './proto/user.proto',
	room: './proto/room.proto',
};

export const getServiceProvider = (service: TServiceRecord) => {
	const packageDef = protoLoader.loadSync(path.resolve(__dirname, ServicesRecord[service]), {
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true,
	});
	return grpc.loadPackageDefinition(packageDef);
};


export {grpc, protoLoader};
