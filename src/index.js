import _ from 'lodash'; // npm install --save lodash
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube Public API
const API_KEY = 'AIzaSyAvNjPln8Hb3Z3qhYa3H9DTJt0Mq4oHu6M';

/*
// Create a new component; this component should produce some HTML.
// This is a CLASS, not an object instance.
// This way of writing it is a functional component (as opposed to class-based)
const App = () => {
	return (
		<section>
			<SearchBar />
			<VideoList />
		</section>
	);
};
*/

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.performVideoSearch('leggings sewing');
	};

	// Youtube API search is now contained in its own method
	performVideoSearch(term) {
		YTSearch( {key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	};

	// SearchBar has the property 'onSearchTermChange' which we can call back
	// to when the input change event fires
	render() {

		// inner function wrapped inside a debounce method (using lodash)
		// - this function won't call until 300ms have elapsed, no matter how many times it is called
		const throttledVideoSearch = _.debounce( (term) => { this.performVideoSearch(term), 300 });

		return (
			// 'onSearchTermChange' can be called as often as possible, but will
			// still only run every 300ms
			<section>
				<SearchBar onSearchTermChange={throttledVideoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos}
				/>
			</section>
		);
	};
}

// Instantiate App.
// Put the component's generated HTML into the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));
