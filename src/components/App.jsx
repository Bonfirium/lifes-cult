import React from "react";
import MainMenu from "./pages/MainMenu";
import Search from "./pages/Search";

const PAGE = {
	MAIN_MENU: 'MAIN_MENU',
	SEARCH: 'SEARCH',
};

export default class App extends React.Component {
	constructor() {
		super();
		this.state = { page: PAGE.MAIN_MENU };
	}

	render() {
		switch (this.state.page) {
			case PAGE.MAIN_MENU:
				return <MainMenu onStartGame={() => this.setState({ page: PAGE.SEARCH })} />;
			case PAGE.SEARCH:
				return <Search />;
			default:
				const errorMessage = `unknown page ${this.state.page}`;
				alert(errorMessage);
				throw new Error(errorMessage);
		}
	}
}
