import * as React from "react";
import { IStartGameProps } from "../../actions/game";
import OpenCardLogo from "../cards/OpenCardLogo";
import GraveImg from "../../assets/images/grave.png";

enum STATUS {
	CALL_MONSTER,
}

interface State {
	hand: Array<string>;
	status: STATUS;
	hover_monster_id?: string;
}

function getStatusText(status: STATUS) {
	switch (status) {
		case STATUS.CALL_MONSTER:
			return 'Фаза призыва';
		default:
			throw new Error(`text of status ${status} not implemented`);
	}
}

function getStatusButton(status: STATUS) {
	switch (status) {
		case STATUS.CALL_MONSTER:
			return 'Закончить ход';
		default:
			throw new Error(`button for status ${status} closing not implemented`);
	}
}

export default class InGame extends React.Component<IStartGameProps, State> {
	constructor(props: any) {
		super(props);
		this.state = { hand: this.props.starting_hand, status: STATUS.CALL_MONSTER };
	}

	render() {
		return (
			<div id="in-game" className="full-page">
				<div id="left">
					<div id="opponent-info">
						<div>Жизни врага</div>
						<div>Инвентарь врага</div>
					</div>
					<div id="player-info">
						<div>Твои жизни</div>
						<div>Твой инвентарь</div>
					</div>
				</div>
				<div id="center">
					<div className="flex-inline">{
						new Array(4).fill(0).map(() => <div className="closed-card-logo" />)
					}</div>
					<div>Монстры врага</div>
					<div>Твои монстры</div>
					<div className="flex-inline">
						{
							this.state.hand.map((cardId, index) => {
								return (
									<OpenCardLogo
										key={index}
										id={cardId}
										onMouseEnter={() => this.setState({ hover_monster_id: cardId })}
										onMouseLeave={() => this.setState({ hover_monster_id: undefined })}
									/>
								);
							})
						}
					</div>
				</div>
				<div id="right">
					<div id="card-info" />
					<div id="game-status">
						<div id="current-status">{getStatusText(this.state.status)}</div>
						<div id="button-next">{getStatusButton(this.state.status)}</div>
					</div>
				</div>
			</div>
		);
	}
};
