import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Logo from '../assets/Logo.png';
import search from '../assets/search.png';
import themeIcon from '../assets/set.png';
import '../../src/Navbar.css';
import axios from 'axios';
export const querycontext=createContext();

export const Queryprovider=({children})=>{
  const [query,setQuery]=useState("");
  return(
    <querycontext.Provider value={{query,setQuery}}>
      {children}
    </querycontext.Provider>
  )
}
const Navbar = ({ theme, setTheme }) => {
  const {setQuery,query}=useContext(querycontext);
  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://eduschool-2.onrender.com/card_data");
        if (response.data && Array.isArray(response.data)) {
          setCardData(response.data);
        } else {
          console.error("Unexpected response structure", response);
        }
      } catch (error) {
        console.error("Error fetching the courses data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`navbar ${theme}`}>
      <Link to="/" className="navbar-logo-link">
        <img src={Logo} alt="Logo" className='navbar-logo' />
      </Link>
      <ul className="navbar-nav">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/courses" className="nav-link">Courses</Link></li>
        <li><Link to="/subscription" className="nav-link">Subscription</Link></li>
      </ul>
      <div className='search-box'>
        <input type="text" placeholder='Search' value={query} onChange={(e) =>setQuery(e.target.value)} />
        <img src={search} alt="Search Icon" />
      </div>
      <Link to="/login" className="navbar-login-button">
        Login / Signup
      </Link>
      <Link to="/cart" className="navbar-cart-button">
        <span className="cart-icon">&#128722;</span> {/* Unicode cart icon */}
        <span>Cart</span>
      </Link>
      <img onClick={toggleMode} src={themeIcon} alt="Toggle Theme Icon" className='navbar-toggle-icon' />
    </div>
  );
};

export default Navbar;

