import * as React from "react";

export default class MainMenu extends React.Component<{ onStartGame: () => any }> {
	render() {
		return (
			<div id="main-menu" className="full-page centered-content">
				<div onClick={() => this.props.onStartGame()}>Начать игру</div>
			</div>
		);
	}
}
