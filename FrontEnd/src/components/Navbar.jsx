import React from 'react';
import  Logo from '../assets/Logo.png'
import search from '../assets/search.png'
import set from '../assets/set.png'
import '../../src/Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar-nav'>
        <img src={Logo} alt="" className='logo' />
         <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Subscription</li>
         </ul>
         <div className='search-box'>
            <input type="text" placeholder='Search' />
            <img src={search} alt="" />
         </div>
         <img src={set} alt=""  className='toggle-icon'/>
    </div>
  );
};

export default Navbar; 
