import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Subscription } from './Subscription.jsx'
import { CoursePage } from './CoursePage.jsx'
import { CartPage } from '../components/CartPage.jsx'





// import Navbar from '../components/Navbar.jsx'
// import Footer from '../components/Footer.jsx'


export const AllRoutes = () => {
  return (
    <div>
  
        <Routes>
            <Route path="/Subscription" element={<Subscription/>}/>
             <Route path="/CoursePage" element={<CoursePage/>}/> 
             <Route path="/cart" element={<CartPage />} />
        </Routes> 
    </div>
  )
}
