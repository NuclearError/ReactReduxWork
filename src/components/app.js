import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';

export default class App extends Component {
  console.log("App pre-render is ok");
  render() {
    return (
      console.log("App render is ok");
      <div className='book-list__container'>
        <BookList />
      </div>
    );
  };
}
