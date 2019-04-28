import * as React from "react";
import getMonsterImageById from "../../assets/images/monsters";

interface Props {
	id: string;
	onMouseEnter: () => any;
	onMouseLeave: () => any;
}

export default class OpenCardLogo extends React.Component<Props> {
	render() {
		return (
			<div
				className="open-card-logo"
				onMouseEnter={() => this.props.onMouseEnter()}
				onMouseLeave={() => this.props.onMouseLeave()}
			>
				<img src={getMonsterImageById(this.props.id)} />
			</div>
		);
	}
}
