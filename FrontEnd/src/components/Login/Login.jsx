import React from 'react';
import { RiUserLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Link to="/login" className='navbar-icon'>
      <RiUserLine className='icon' />
    </Link>
  );
};

export default Login;
