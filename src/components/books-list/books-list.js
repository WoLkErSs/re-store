import React, { Component } from 'react';
import BooksListItem from '../books-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './books-list.css';

class BooksList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks()
      .then((data) => { booksLoaded(data) });
  }
  render() {
    const { books, loading } = this.props
    if (loading) {
      return 'Loading...'
    }
    return (
      <ul className='book-list'>
        {books.map((book)=>{
          return (
            <li key={book.id}>
              <BooksListItem book={book} />
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = ({books, loading}) => {
  return { books, loading }
}

const mapDispatchToProps = {
  booksLoaded
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksList)
