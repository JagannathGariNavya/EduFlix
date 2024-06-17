import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Badge } from '@chakra-ui/react';

const Cart = () => {
  return (
    <>
    <Link to="/cart" className='navbar-icon'>
      <RiShoppingCartLine className='icon' /> 
    </Link>
   
    </>
  );
};

export default Cart;
