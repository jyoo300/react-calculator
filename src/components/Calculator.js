import React from 'react';
import Digit from './Digit';
import Input from './Input';
import Operation from './Operation';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			valueone: '',
			valuetwo: '',
			answer: '',
			isSecond: false,
			isAnswer: false,
			isOperation: null
		};
	}

	updateValue = (value) => {
		if(this.state.isSecond === false) {
			if(this.state.isAnswer === true) {
				this.setState((state) => ({
					valueone: state.answer
				}));
				this.setState({
					valuetwo: '',
					answer: '',
					isAnswer: false,
					isOperation: null
				});	
			}
			this.setState((state) => ({
				valueone: state.valueone * 10
			}));
			this.setState((state) => ({
				valueone: state.valueone + value
			}));
		}
		else {
			this.setState((state) => ({
				valuetwo: state.valuetwo * 10
			}));
			this.setState((state) => ({
				valuetwo: state.valuetwo + value
			}));
			
		}
	}

	setOperation = (operation) => {
		if(this.state.isAnswer === true) {
			this.setState((state) => ({
				valueone: state.answer
			}));
			this.setState({
				valuetwo: '',
				answer: '',
				isAnswer: false,
				isOperation: null
			});	
		}
		if(operation === '+' && this.state.isSecond === false) {
			this.setState({
				isOperation: '+',
				isSecond: true,
			});
		}
		else if(operation === '-' && this.state.isSecond === false) {
			this.setState({
				isOperation: '-',
				isSecond: true,
			});
		}
		else if(operation === '*' && this.state.isSecond === false) {
			this.setState({
				isOperation: '*',
				isSecond: true,
			});
		}
		else if(operation === '/' && this.state.isSecond === false) {
			this.setState({
				isOperation: '/',
				isSecond: true,
			});
		}
		else if(operation === 'sqrt' && this.state.isSecond === false) {
			this.setState({
				isOperation: 'sqrt',
				isSecond: true,
			});
		}
		else if(operation === '^' && this.state.isSecond === false) {
			this.setState({
				isOperation: '^',
				isSecond: true,
			});
		}
		else if(operation === 'sin()' && this.state.isSecond === false) {
			this.setState({
				isOperation: 'sin',
				isSecond: true,
			});
		}
		else if(operation === 'cos()' && this.state.isSecond === false) {
			this.setState({
				isOperation: 'cos',
				isSecond: true,
			});
		}	
		else if(operation === 'tan()' && this.state.isSecond === false) {
			this.setState({
				isOperation: 'tan',
				isSecond: true,
			});
		}	
		else if(operation === '=' && this.state.isSecond === true) {
			if(this.state.isOperation === '+') {
				this.setState ((state) => ({
					answer: state.valueone + state.valuetwo
				}));
			}
			else if(this.state.isOperation === '-') {
				this.setState ((state) => ({
					answer: state.valueone - state.valuetwo
				}));
			}
			else if(this.state.isOperation === '*') {
				this.setState ((state) => ({
					answer: state.valueone * state.valuetwo
				}));
			}
			else if(this.state.isOperation === '/') {
				this.setState ((state) => ({
					answer: state.valueone / state.valuetwo
				}));
			}
			else if(this.state.isOperation === 'sqrt') {
				this.setState ((state) => ({
					answer: Math.sqrt(state.valueone),
				}));
			}
			else if(this.state.isOperation === '^') {
				this.setState ((state) => ({
					answer: Math.pow(state.valueone, state.valuetwo)
				}));
			}
			else if(this.state.isOperation === 'sin') {
				this.setState ((state) => ({
					answer: Math.sin(state.valueone),
				}));
			}
			else if(this.state.isOperation === 'cos') {
				this.setState ((state) => ({
					answer: Math.cos(state.valueone),
				}));
			}	
			else if(this.state.isOperation === 'tan') {
				this.setState ((state) => ({
					answer: Math.tan(state.valueone),
				}));
			}
			this.setState({
				isSecond: false,
				isAnswer: true
			});
		}
	}

	clear = () => {
		this.setState({
			valueone: '',
			valuetwo: '',
			answer: '',
			isSecond: false,
			isAnswer: false,
			isOperation: null
		});	
	}

	renderInput() {
		return (
		    <Input 
		    	valueone={this.state.valueone}
		    	valuetwo={this.state.valuetwo}
		    	answer={this.state.answer}
		    	isSecond={this.state.isSecond}
		    	isAnswer={this.state.isAnswer}
		    	isOperation={this.state.isOperation}
			/>
		);
	}

	render() {
		return (
			<div>				
				{this.renderInput()}
				<div className="ui buttons">
					<Digit digit = {1} onClick={() => this.updateValue(1)} />
					<Digit digit = {2} onClick={() => this.updateValue(2)} />
					<Digit digit = {3} onClick={() => this.updateValue(3)} />
					<Operation operation = {'sqrt'} onClick={() => this.setOperation('sqrt')}  />	
					<Operation operation = {'Clear'} onClick={() => this.clear()} />
				</div>
				<br/>
				<div className="ui buttons">
			    	<Digit digit = {4} onClick={() => this.updateValue(4)} />
			    	<Digit digit = {5} onClick={() => this.updateValue(5)} />
			    	<Digit digit = {6} onClick={() => this.updateValue(6)} />
					<Operation operation = {'^'} onClick={() => this.setOperation('^')}  />					    	
			    </div>
			    <br/>
			    <div className="ui buttons">
					<Digit digit = {7} onClick={() => this.updateValue(7)} />
					<Digit digit = {8} onClick={() => this.updateValue(8)} />
					<Digit digit = {9} onClick={() => this.updateValue(9)} />
					<Operation operation = {'sin()'} onClick={() => this.setOperation('sin()')}  />					    		
				</div>
				<br/>
				<div className="ui buttons">
					<Digit digit = {0} onClick={() => this.updateValue(0)} />
					<Operation operation = {'+'} onClick={() => this.setOperation('+')}  />
					<Operation operation = {'-'} onClick={() => this.setOperation('-')}  />
					<Operation operation = {'cos()'} onClick={() => this.setOperation('cos()')}  />					    		
				</div>
				<br/>
				<div className="ui buttons">
					<Operation operation = {'*'} onClick={() => this.setOperation('*')}  />
					<Operation operation = {'/'} onClick={() => this.setOperation('/')}  />
					<Operation operation = {'='} onClick={() => this.setOperation('=')}  />
					<Operation operation = {'tan()'} onClick={() => this.setOperation('tan()')}  />					    		
				</div>
				<br/>
			</div>
		);
	}
}

export default Calculator;