import React, {Component, useState} from 'react';
// import Radium from 'radium';
import Car from './Car/Car';
import AddForm from './AddForm/AddForm';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// const App = () => {
// 	let [listCar, setLIstCar] = useState([
// 		{id: parseFloat(Math.random().toFixed(4)), name: 'Tesla', age: 2020},
// 		{id: parseFloat(Math.random().toFixed(4)), name: 'Tesla X', age: 2019},
// 		{id: parseFloat(Math.random().toFixed(4)), name: 'Tesla C', age: 2019},
// 		{id: parseFloat(Math.random().toFixed(4)), name: 'Tesla A', age: 2020}
// 	])
	// return (
		// <>
		// {listCar ?
		// 	<>
		// 	{listCar.map(todo => {
		// 		return <Car todo={todo} />
		// 	})}
		// 	</>
		// : null
		// }
		// </>
	// )
// }

class App extends Component {
	constructor (props) {
		super(props);
		console.log('App Constructor')
		this.state = {
			cars: [
				{id: parseFloat(Math.random().toFixed(4)), name: 'Tesla', age: 2020, editing: true},
				{id: parseFloat(Math.random().toFixed(4)), name: 'Tesla X', age: 2018, editing: false},
				{id: parseFloat(Math.random().toFixed(4)), name: 'Tesla C', age: 2020, editing: false},
				{id: parseFloat(Math.random().toFixed(4)), name: 'Tesla M', age: 2019, editing: false}
			],
			pageTitle: 'React components v1',
			showCars: true,
		}
	}
	

	// let [inputValue, setInputValue] = useState('');
	handleSubmit = (event) => {
		event.preventDefault()
	}
	onDelete = (id) => {
		let cars = this.state.cars.filter(car => car.id !== id);
		this.setState({cars})
	}
	
	editingCard = (checked, id) => {
		this.state.cars.map(car => {
			if(car.id === id) {
				car.editing = checked
				const cars = [...this.state.cars]
				this.setState({cars})
			}
		})
	}

	onEditCarName = (name, id) => {
		const nextState = this.state.cars.map(car => {
			if (car.id === id) {
				return {...car, name}
			}
			return car;
			
		})
		this.setState({cars: nextState})

	
	}

	toggleCarsHandler = () => {
		this.setState({
			showCars: !this.state.showCars
		})
	}

	handleInput = (event) => {
		this.setState({
			inputValue: event.target.value
		})
	}
	
	UNSAFE_componentWillMount() {
		console.log('componentWillMount')
	}
	componentDidMount() {
		console.log('componentDidMount')
	}

	render () {
		console.log('render')
		const allStyle = {
			wrapper: {display: 'flex', flexDirection: 'column', alignItems: 'center'},
			listCar: {paddingTop: '10px', display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'},
			title: {color: 'green'},
			btnStyle: {backgroundColor: 'rgb(91 236 0)', border: '0', padding: '5px 10px', ':hover': {opacity: 0.7, transition: 'opacity 0.5s' }}
		};

		const cars = this.state.cars;
		console.log(cars)

		return (
			<div style={allStyle.wrapper}>
				<ErrorBoundary>
					<AddForm
						cars={this.state.cars}
						handleSubmit={this.handleSubmit}
						/>
				</ErrorBoundary>
				{/* <h1 style={allStyle.title}>{this.state.pageTitle}</h1> */}
				<h1>{this.props.title}</h1>
				<button style={allStyle.btnStyle} onClick={this.toggleCarsHandler}>Toggle cars</button>
				<div style={allStyle.listCar}>
					{this.state.showCars ?
						<>
						{cars.map((todo) => {
							return (
								<>
									{/* <Car 
										todo={todo} 
										key={todo.id}
										onChangeTitle={this.changeTitleHandler.bind(this, todo.name)} />
										onChangeTitle={() => this.changeTitleHandler(todo.name)}  */}
								<ErrorBoundary key={todo.id}> 
								<Car 
									todo={todo}
									editing={todo.editing}
									editCarName={event => this.onEditCarName(event.target.value, todo.id)}
									editingCard={event => this.editingCard(event.target.checked, todo.id)}
									onDelete={this.onDelete.bind(this, todo.id)}/>
								</ErrorBoundary>
								</>
							)
						})}
						</>
					: null
					}
				</div>
			</div>
		);
		// return React.createElement(
		// 	'div',
		// 	{
		// 		className: 'App'
		// 	},
		// 	React.createElement(
		// 		'h1',
		// 		null,
		// 		'Hello ;)'
		// 	)
		// )
	}
}



export default App;