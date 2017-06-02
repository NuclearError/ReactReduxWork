import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h3>Weather App</h3>
        <SearchBar />
      </div>
    );
  }
}
