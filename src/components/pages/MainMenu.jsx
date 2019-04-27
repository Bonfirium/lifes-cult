import React from "react";
import PropTypes from "prop-types";

export default class MainMenu extends React.Component {
	static propTypes = {
		onStartGame: PropTypes.func.isRequired,
	};

	render() {
		return (
			<div id="main-menu" className="full-page centered-content">
				<div onClick={() => this.props.onStartGame()}>Начать игру</div>
			</div>
		);
	}
}
