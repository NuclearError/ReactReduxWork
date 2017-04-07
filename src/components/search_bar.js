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
			<section className='search-bar'>
				<label>Search</label>
				<input
					value = {this.state.term}
					// rather than calling directly to the SearchBar props,
					// call a separate method (below)
					onChange={ event => this.onInputChange(event.target.value) }
				/>
				<br/>
			</section>
		);
	};

	// This method sets the state of this SearchBar component,
	// and also calls back to the property onSearchTermChange,
	// which in turn calls the app's method "performVideoSearch"
	onInputChange(term){
		this.setState( {term} );
		this.props.onSearchTermChange(term);
	};

}

export default SearchBar;
