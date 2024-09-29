import React from 'react';
import './books-list-item.css'
const BooksListItem = ({book}) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className='books-list-item'>
      <div className='books-cover'>
        <img src={coverImage} className='image_prt' alt='cover'/>
      </div>

      <div className='books-details'>
        <a href='#' className='book-title'>{title}</a>
        <div className='book-author'>{author}</div>
        <div className='book-price'>${price}</div>
        <button className='btn btn-info add-to-cart'>Add to cart</button>
      </div>

    </div>
  )
}

export default BooksListItem;
