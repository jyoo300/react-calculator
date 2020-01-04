import React from 'react';

class Digit extends React.Component {
	render() {
		return (
			<div>
				<button className="ui blue basic button" onClick={() => this.props.onClick()}>{this.props.digit}</button>
			</div>
		);
	}
}

export default Digit;