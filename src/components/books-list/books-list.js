import React, { Component } from 'react';
import BooksListItem from '../books-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import { compose } from '../../utils';

import './books-list.css';
import ErrorIndicator from '../error-indicator';

class BooksList extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError } = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then((data) => { booksLoaded(data) })
      .catch((error) => { booksError(error) });
  }
  render() {
    const { books, loading, error } = this.props
    if (loading) {
      return 'Loading...'
    }

    if (error) {
      return <ErrorIndicator />
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

const mapStateToProps = ({books, loading, error}) => {
  return { books, loading, error }
}

const mapDispatchToProps = {
  booksLoaded, booksRequested, booksError
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksList)
