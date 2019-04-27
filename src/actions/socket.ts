import openSocket from "socket.io-client";

let socket: SocketIOClientStatic['Socket'];

export async function connect() {
	socket = openSocket('127.0.0.1:6543');
	await new Promise((resolve) => socket.on('connect', () => resolve()));
}

export async function send(message: string, data?: any) {
	socket.emit(message, data);
}

export async function once(event: string) {
	return await new Promise((resolve) => {
		socket.once(event, (data: any) => resolve(data));
	});
}
