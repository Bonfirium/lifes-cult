import * as React from "react";
import getMonsterImageById from "../../assets/images/monsters";

interface Props {
	id: string;
	onMouseEnter: () => any;
	onMouseLeave: () => any;
}

export default class OpenCardLogo extends React.Component<Props, { selected: boolean }> {
	constructor(props: any) {
		super(props);
		this.state = { selected: false };
	}

	render() {
		return (
			<div
				className={`open-card-logo ${this.state.selected ? 'scaled' : ''}`}
				onMouseEnter={() => {
					this.setState({ selected: true });
					this.props.onMouseEnter();
				}}
				onMouseLeave={() => {
					this.setState({ selected: false });
					this.props.onMouseLeave();
				}}
			>
				<img src={getMonsterImageById(this.props.id)} />
			</div>
		);
	}
}
