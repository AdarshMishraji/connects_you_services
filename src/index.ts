import path from 'path';

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

export type TServiceRecord = 'auth' | 'user' | 'room';

export type TInitialiseServiceAsClientParams = {
	service: any,
	address: string,
	deadlineSeconds?: number
};

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

export const initialiseServiceAsClient = ({ service, address, deadlineSeconds = 5 }: TInitialiseServiceAsClientParams) => {
	const client = new service(address, grpc.credentials.createInsecure(), {
		'grpc.max_reconnect_backoff_ms': 10000,
	});
	
	const deadline = new Date();
	deadline.setSeconds(deadline.getSeconds() + deadlineSeconds);
	
	client.waitForReady(deadline, (error) => {
		if (error) {
			return console.log(`${service?.serviceName} ->> ${address} error`, error);
		}
		console.log(`${service?.serviceName} ->> ${address} is ready`);
	});
	return client;
};


export { grpc, protoLoader };
