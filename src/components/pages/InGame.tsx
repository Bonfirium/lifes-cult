import * as React from "react";

export default class InGame extends React.Component {
	render() {
		return (
			<div id="in-game" className="full-page">
				<div id="left">
					<div>Могилка</div>
					<div>Колода</div>
				</div>
				<div id="center">
					<div>Рука врага</div>
					<div>Монстры врага</div>
					<div>Твои монстры</div>
					<div>Твоя рука</div>
				</div>
				<div id="right">
					<div id="opponent-info">
						<div>Жизни врага</div>
						<div>Инвентарь врага</div>
					</div>
					<div id="player-info">
						<div>Твои жизни</div>
						<div>Твой инвентарь</div>
					</div>
				</div>
			</div>
		);
	}
};
