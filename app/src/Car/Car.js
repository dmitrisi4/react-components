import React from 'react';
import './car.css'

class Car extends React.Component {
	// UNSAFE_componentWillReceiveProps(nextProps) {
	// 	console.log('Car componentWillReceiveProps' , nextProps)
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('Car shouldComponentUpdate', nextProps, this.props)
	// 	console.log(nextProps.todo.name.trim() !== this.props.todo.name.trim())
	// 	return nextProps.todo.name.trim() !== this.props.todo.name.trim();
	// }
	// UNSAFE_componentWillUpdate(nextProps, nextState) {
	// 	console.log('Car componentWillUpdate' , nextProps, nextState)
	// }
	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log('Car getDerivedStateFromProps' , nextProps, prevState);
	// 	return prevState;

	// }
	// componentDidUpdate() {
	// 	console.log('Car componentDidUpdate', this.props);
	// }
	// getSnapshotBeforeUpdate() {
	// 	console.log('Car getSnapshotBeforeUpdate');

	// }
	// componentWillUnmount() {
	// 	console.log('Car componentWillUnmount');
	// }
	render () {
		console.log('Car render');
		if(Math.random() > 0.7) {
			throw new Error('Car random failed')
		}
		const allStyle = {
			card: {':hover': {boxShadow: '0 4 15 0 rgba(0,0,0, .25)', border: '1px solid #aaa', cursor: 'pointer'}},
			btnDel: {width: '15px', height: '15px', backgroundColor: 'red', border: '0', display: 'flex', alignItems: 'center', fontSize: '11px'},
			nav: {display: 'flex', justifyContent: 'space-between'}
		};
		const cardStyle = {
			':hover': {boxShadow: '0 4 15 0 rgba(0,0,0, .25)', border: '1px solid #aaa', cursor: 'pointer'},
		};
		const inputClass = ['input'];
		let inputValue = this.props.todo.name;
		
		if(inputValue != '') {
			inputClass.push('green')
		}else {
			inputClass.push('red')
		}
		if(inputValue.length > 4) {
			inputClass.push('bold')
		}
		return(
			<div className="car" key={this.props.todo.id} style={cardStyle}>
				<div style={allStyle.nav}>
					<label>
						Edit
						<input type="checkbox" checked={this.props.editing} onChange={this.props.editingCard}/>
					</label>
					<button style={allStyle.btnDel} onClick={this.props.onDelete}>x</button>
				</div>
				<h3>Car: {this.props.todo.name}</h3>
				<p>Year: {this.props.todo.age}</p>
				<input type="text" 
					className={inputClass.join(' ')}
					onChange={this.props.editCarName}
					disabled={!this.props.todo.editing}
					value={this.props.todo.name}/>
			</div>
		)
	}
}

// const Car = (props) => {

// 	const allStyle = {
// 		card: {
// 			':hover': {boxShadow: '0 4 15 0 rgba(0,0,0, .25)', border: '1px solid #aaa', cursor: 'pointer'}
// 		},
// 		btnDel: {width: '15px', height: '15px', backgroundColor: 'red', border: '0', display: 'flex', alignItems: 'center', fontSize: '11px'},
// 		nav: {display: 'flex', justifyContent: 'space-between'}
// 	};
// 	const inputClass = ['input'];
// 	console.log(inputClass)
// 	let inputValue = props.todo.name;
	
// 	if(inputValue != '') {
// 		inputClass.push('green')
// 	}else {
// 		inputClass.push('red')
// 	}
// 	if(inputValue.length > 4) {
// 		inputClass.push('bold')
// 	}
// 	console.log(inputClass)
// 	return(
// 		<div className="car" key={props.todo.id} style={allStyle.card}>
// 			<div style={allStyle.nav}>
// 				<label>
// 					Edit
// 					<input type="checkbox" checked={props.editing} onChange={props.editingCard}/>
// 				</label>
// 				<button style={allStyle.btnDel} onClick={props.onDelete}>x</button>
// 			</div>
// 			<h3>Car: {props.todo.name}</h3>
// 			<p>Year: {props.todo.age}</p>
// 			<input type="text" className={inputClass.join(' ')} onChange={props.editCarName} disabled={!props.todo.editing} value={props.todo.name} />
// 		</div>
// 	)}

export default Car;