import React from "react";

const AddForm = (props) => {
	// if(Math.random() > 0.7) {
	// 	throw new Error('Car random failed')
	// }
	return(
		
		<form onSubmit={props.handleSubmit}>
			<input type="text" value={props.cars[0].name}/>
			<input type="text" value={props.cars[0].age}/>
			<button>Add</button>
		</form>
	)
}

export default AddForm;