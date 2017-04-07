import React, { Component } from 'react';

import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <section className='book-list__container col-sm-4'>
        <BookList />
      </section>
    );
  }
}
