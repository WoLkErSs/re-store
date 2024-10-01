import React from 'react';
import './books-list-item.css'
import { Link } from 'react-router-dom';

const BooksListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className='books-list-item'>
      <div className='books-cover'>
        <img src={coverImage} className='image_prt' alt='cover'/>
      </div>

      <div className='books-details'>
        <Link to='/'>
          <div className='book-title'>{title}</div>
        </Link>
        <div className='book-author'>{author}</div>
        <div className='book-price'>${price}</div>
        <button
          onClick={onAddedToCart}
          className='btn btn-info add-to-cart'>Add to cart</button>
      </div>

    </div>
  )
}

export default BooksListItem;
