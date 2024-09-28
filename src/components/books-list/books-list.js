import React, { Component } from 'react';
import BooksListItem from '../books-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './books-list.css';

class BooksList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    this.props.booksLoaded(data);
  }
  render() {
    const { books } = this.props
    return (
      <ul>
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

const mapStateToProps = ({books}) => {
  return { books }
}

const mapDispatchToProps = {
  booksLoaded
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksList)
