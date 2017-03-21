import React, {Component} from 'react';

/*
// Functional component: is literally a function
const SearchBar = () => {
	return (
		<input />
	);
};
*/

// Class-based component
class SearchBar extends Component {

	// Only class-based components have states 
	// (functional components do not).
	// Constructor function is reserved for initialising the class.
	constructor(props) {
		super(props);
		
		// 'CREATE' the state (only do this in the constructor)
		// ie. Only do 'this.state =' in constructor methods
		this.state = {
			term: ''
		};
	};
	
	// every react component class needs a render method
	render() {
		return(
			<div>
				<input 
					value = {this.state.term}
					onChange={ event => this.setState({ term: event.target.value }) } 
				/>
				<br/>
			</div>
		); 
	};
	
}

export default SearchBar;