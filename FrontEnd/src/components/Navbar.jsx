import React, { useEffect, useRef, useState } from 'react';
import { Box, Image, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { IoHomeSharp } from 'react-icons/io5'
import { FaUser, FaShoppingCart, FaBell, FaBookOpen  } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";


const Navbar = () => {
    const navigate = useNavigate();
    const searchInputRef = useRef(null);
    const [isSearchActive, setIsSearchActive] = useState(false);

    useEffect(() => {
        if (isSearchActive) {
          searchInputRef.current.focus();
        }
      }, [isSearchActive]);
    
    
  const openSearch = () => {
    setIsSearchActive(true);
  };

  const closeSearch = () => {
    setIsSearchActive(false);
  };


  return (
    <div>
    <Box
    w="100%"
    h="60px"
    bgGradient="linear(to-r, teal.300, green.400)"
    display="flex"
    alignItems="center"
    pos="fixed"
    zIndex={2}
    top="0"
  >
    <Image
      src="logo.png"
      alt="Logo"
      boxSize="60px"
      objectFit="contain"
      ml="60px"
    ></Image>
    <InputGroup
      ref={searchInputRef}
      width="50%"
      bg="white"
      ml="24.6%"
      borderRadius="md"
      mt="4px"
      onClick={openSearch}
    >
      <Input placeholder="Search" borderRadius="md" />
      <InputRightElement children={<IoMdSearch />} />
    </InputGroup>
    <Link to="/" style={{ marginLeft: "20%" }}>
    <IoHomeSharp
        style={{
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          padding: "2px",
        }}
        onClick={() => navigate('/')}
      />
    </Link>
    <Link to="/login" style={{ marginLeft: "2%" }}>
      <FaUser
        style={{
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          padding: "2px",
        }}
        onClick={() => navigate('/login')}
      />
    </Link>
    <Link to="/cart" style={{ marginLeft: "2%" }}>
      <FaShoppingCart
        style={{
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          padding: "2px",
          paddingRight: "5px",
        }}
        onClick={() => navigate('/cart')}
      />
    </Link>
    <Link to="/Course" style={{ marginLeft: "2%"}}>
    <FaBookOpen
        style={{
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "27px",
          height: "27px",
          padding: "5px",
        }}
        onClick={() => navigate('/Course')}
      />
    </Link>
    <Link to="/Subscription" style={{ marginLeft: "2%", marginRight:"20px"}}>
    <FaBell
        style={{
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "27px",
          height: "27px",
          padding: "5px",
        }}
        onClick={() => navigate('/Subscription')}
      />
    </Link>
  </Box>

{isSearchActive && (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      backgroundColor="rgba(0, 0, 0, 0.7)"
      display="flex"
      justifyContent="center"
      alignItems="start"
      zIndex="1000"
      onClick={closeSearch}
    >
      <Box
        position="relative"
        top="70px"
        width="30%"
        bg="white"
        borderRadius="lg"
        onClick={(e) => e.stopPropagation()}
      >
        <InputGroup width="100%" bg="white" h="60px" borderRadius="lg">
          <Input
            ref={searchInputRef}
            h="60px"
            placeholder="Search"
            borderRadius="lg"
            autoFocus
          />
        </InputGroup>
      </Box>
    </Box> 
  )} 
</div>
  );
};

export default Navbar;
