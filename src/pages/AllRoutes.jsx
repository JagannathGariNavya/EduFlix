import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Subscription } from './Subscription.jsx'
import { CoursePage } from './CoursePage.jsx'
import { CartPage } from '../components/CartPage.jsx'
import { getCartItemsFromLocalStorage, setCartItemsToLocalStorage } from '../Utils/localStorage.js';


export const AllRoutes = () => {
  const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage());

  useEffect(() => {
    setCartItemsToLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <div>
  
        <Routes>
            <Route path="/Subscription" element={<Subscription/>}/>
             <Route path="/CoursePage/:id" element={<CoursePage />}/> 
             <Route path="/CartPage" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes> 
    </div>
  )
}
