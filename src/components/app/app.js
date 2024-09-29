import React from 'react';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

const App = () => {
  return(
    <main role='main' className='container' >
      <ShopHeader numItems={5} total={220} />
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/cart' element={<CartPage />} />
      </ Routes>
    </main>
  )
}
export default App;
