import * as React from "react";
import MainMenu from "./pages/MainMenu";
import Search from "./pages/Search";
import { findGame } from "../actions/game";
import InGame from "./pages/InGame";

enum PAGE {
	MAIN_MENU,
	SEARCH,
	IN_GAME,
};

export default class App extends React.Component<any, { page: PAGE }> {
	constructor(props: any) {
		super(props);
		this.state = { page: PAGE.MAIN_MENU };
	}

	render() {
		switch (this.state.page) {
			case PAGE.MAIN_MENU:
				return <MainMenu onStartGame={async () => {
					this.setState({ page: PAGE.SEARCH });
					await findGame();
					this.setState({ page: PAGE.IN_GAME });
				}} />;
			case PAGE.SEARCH:
				return <Search />;
			case PAGE.IN_GAME:
				return <InGame />;
			default:
				alert(`page ${PAGE} not implemented`);
		}
	}
}
