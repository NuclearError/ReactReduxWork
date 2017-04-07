import React, { component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  console.log("BookList pre-render is ok");

  renderList() {
    return this.props.books.map( (book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      )
    });
  };

  render() {
    console.log("BookList render is ok");
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  };

};

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside BookList
  // ie. contained within 'this.props'
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);
