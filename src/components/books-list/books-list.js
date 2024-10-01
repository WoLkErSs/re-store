import React, { Component } from 'react';
import BooksListItem from '../books-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';

import './books-list.css';
import ErrorIndicator from '../error-indicator';

const BookList = ({books}) => {
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
class BooksListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const { books, loading, error } = this.props
    if (loading) {
      return 'Loading...'
    }

    if (error) {
      return <ErrorIndicator />
    }
    return <BookList books={books} />
  }
}

const mapStateToProps = ({books, loading, error}) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps
  return(
    {
      fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
  )
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer)
