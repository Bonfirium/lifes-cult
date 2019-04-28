import { send, once } from "./socket";

export interface IStartGameProps {
	first_step: boolean;
	starting_hand: Array<string>;
}

export async function findGame() {
	send('find_game');
	return <IStartGameProps>await once('game_found');
}
