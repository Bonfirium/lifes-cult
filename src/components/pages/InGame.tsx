import * as React from "react";
import { IStartGameProps } from "../../actions/game";
import OpenCardLogo from "../cards/OpenCardLogo";
import getMonsterImageById from "../../assets/images/monsters";
import { cards } from "lifescult-lib";

enum STATUS {
	CALL_MONSTER,
}

interface State {
	hand: Array<string>;
	status: STATUS;
	yourTurn: boolean;

	hover_monster_id?: string;
}

function getStatusText(status: STATUS, yourTurn: boolean) {
	switch (status) {
		case STATUS.CALL_MONSTER:
			return yourTurn ? 'Фаза призыва' : 'Соперник призывает существ...';
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
		this.state = {
			hand: this.props.starting_hand,
			status: STATUS.CALL_MONSTER,
			yourTurn: this.props.first_step,
		};
	}

	render() {
		const monster = this.state.hover_monster_id === undefined ? null : cards[this.state.hover_monster_id!];
		return (
			<div id="in-game" className="full-page">
				<div id="left">
					<div id="opponent-info">
						<div>Жизни врага</div>
					</div>
					<div id="player-info">
						<div>Твои жизни</div>
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
					<div id="card-info" className={this.state.hover_monster_id === undefined ? 'hidden' : ''}>
						{this.state.hover_monster_id === undefined
							? null
							: (
								<React.Fragment>
									<div id="cost">{monster!.cost}</div>
									<img src={getMonsterImageById(this.state.hover_monster_id)} />
									<div id="stats">
										<div id="left-stats">
											<div>unc: {monster!.uncontrollability}</div>
											<div>wild: {monster!.wildness || '-'}</div>
										</div>
										<div id="right-stats">
											<div>power: {monster!.power}</div>
											<div>max hp: {monster!.max_hp}</div>
											<div>regen: {monster!.regen}</div>
										</div>
									</div>
									<div id="description">Monster's abilities are not implemented yet</div>
								</React.Fragment>
							)
						}
					</div>
					<div id="game-status">
						<div id="current-status">{getStatusText(this.state.status, this.state.yourTurn)}</div>
						<div id="button-next" className={this.state.yourTurn ? '' : 'display-none'}>
							{getStatusButton(this.state.status)}
						</div>
					</div>
				</div>
			</div>
		);
	}
};
