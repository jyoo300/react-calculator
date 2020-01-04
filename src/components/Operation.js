import React from 'react';

class Operation extends React.Component {
	render() {
		return (
			<div>
				<button className="ui primary button" onClick={() => this.props.onClick()}>{this.props.operation}</button>
			</div>
		);
	}
}

export default Operation;