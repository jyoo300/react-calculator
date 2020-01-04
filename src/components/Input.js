import React from 'react';

class Input extends React.Component {
	renderInput() {
		if(this.props.isAnswer === true) {
			return <input type="text" value={this.props.answer} />;
		}
		else if(this.props.isSecond === false) {
			return <input type="text" value={this.props.valueone} />;
		}
		else if(this.props.isSecond === true) {
			var value = this.props.valueone + " " + this.props.isOperation + " " + this.props.valuetwo;
			if(this.props.isOperation === 'sqrt' || this.props.isOperation === 'sin' || this.props.isOperation === 'cos' || this.props.isOperation === 'tan') {
				value = this.props.isOperation + "(" + this.props.valueone + ")";
			}
			return <input type="text" value={value} />;
		}
	}

	render() {
		return (
			<div>
				<form className="ui form">
					<div className="field">
						{this.renderInput()}
					</div>
				</form>
			</div>
		);
	}
}

export default Input;