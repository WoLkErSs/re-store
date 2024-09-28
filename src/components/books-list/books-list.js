import React, { Component } from 'react';
import BooksListItem from '../books-list-item';
import { connect } from 'react-redux';
import './books-list.css';

class BooksList extends Component {
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

export default connect(mapStateToProps)(BooksList);
