import React, { Fragment } from 'react';
import './books-list-item.css'
const BooksListItem = ({book}) => {
  const { title, author } = book;
  return (
    <Fragment>
      <span>{title}</span>
      <span>{author}</span>
    </Fragment>
  )
}

export default BooksListItem;
