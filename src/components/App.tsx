import * as React from "react";
import MainMenu from "./pages/MainMenu";
import Search from "./pages/Search";
import { findGame, IStartGameProps } from "../actions/game";
import InGame from "./pages/InGame";

enum PAGE {
	MAIN_MENU,
	SEARCH,
	IN_GAME,
};

export default class App extends React.Component<any, { page: PAGE, game_props?: IStartGameProps }> {
	constructor(props: any) {
		super(props);
		this.state = { page: PAGE.MAIN_MENU };
	}

	render() {
		switch (this.state.page) {
			case PAGE.MAIN_MENU:
				return <MainMenu onStartGame={async () => {
					this.setState({ page: PAGE.SEARCH });
					this.setState({ page: PAGE.IN_GAME, game_props: await findGame() });
				}} />;
			case PAGE.SEARCH:
				return <Search />;
			case PAGE.IN_GAME:
				return (
					<InGame
						first_step={this.state.game_props!.first_step}
						starting_hand={this.state.game_props!.starting_hand}
					/>
				);
			default:
				alert(`page ${PAGE} not implemented`);
		}
	}
}
