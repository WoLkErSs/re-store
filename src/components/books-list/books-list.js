import React, { Component } from 'react';
import BooksListItem from '../books-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { bookAddedToCart, fetchBooks } from '../../actions';
import { compose } from '../../utils';

import './books-list.css';
import ErrorIndicator from '../error-indicator';

const BookList = ({ books, onAddedToCart}) => {
  return (
    <ul className='book-list'>
      {books.map((book)=>{
        return (
          <li key={book.id}>
            <BooksListItem
              book={book}
              onAddedToCart = { () => onAddedToCart(book.id) } />
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
    const { books, loading, error, onAddedToCart } = this.props
    if (loading) {
      return 'Loading...'
    }

    if (error) {
      return <ErrorIndicator />
    }
    return <BookList books={books} onAddedToCart={onAddedToCart} />
  }
}

const mapStateToProps = ({books, loading, error}) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps
  return(
    {
      fetchBooks: fetchBooks(bookstoreService, dispatch),
      onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
  )
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer)
