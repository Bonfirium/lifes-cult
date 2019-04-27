import { send, once } from "./socket";

export async function findGame(): Promise<any> {
	send('find_game');
	return await once('game_found');
}
