import React, { component } from 'react';

import BookList from '../containers/book-list';

export default class App extends Component {

  render() {
    return (
      <div className='book-list__container'>
        <BookList />
      </div>
    );
  };

}
