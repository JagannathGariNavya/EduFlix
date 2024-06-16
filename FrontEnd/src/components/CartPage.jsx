import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { getCartItemsFromLocalStorage, setCartItemsToLocalStorage } from '../Utils/localStorage';

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = getCartItemsFromLocalStorage();
    setCartItems(items || []);
  }, []);

  const incrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  const decrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
    } else {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  const updateLocalStorage = (items) => {
    setCartItemsToLocalStorage(items);
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear(to-r, blue.500, green.500)"
      p="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading size="lg" color="black" mb="6%" textAlign="center">
        Cart
      </Heading>
      {cartItems.length === 0 ? (
        <Text fontSize="xl" color="black" textAlign="center" fontWeight="bold" display="flex" alignItems="center">
          Your cart is empty <FaShoppingCart />
        </Text>
      ) : (
        <VStack spacing="20px" w="95%" alignItems="stretch">
          {cartItems.map((item, index) => (
            <Box key={index} bg="white" p="20px" borderRadius="md" boxShadow="dark-lg" display="flex" h="20vh">
              <Heading size="md" mb="2" color="black">
                {item.courseTitle}
              </Heading>
              <Text mb="2">{item.courseDescription}</Text>
              {item.instructor && (
                <Text fontSize="md" mb="2">
                  Instructor: {item.instructor.name}
                </Text>
              )}
              <Text mb="2" color="black">
                Discount Price: ${item.price.discounted * item.quantity}
              </Text>
              <Text mb="2" color="black">
                Original Price:{' '}
                <span style={{ textDecoration: 'line-through' }}>
                  ${item.price.original * item.quantity}
                </span>
              </Text>
              <Text mb="4" color="black" >
                Quantity: {item.quantity}
              </Text>
              <HStack spacing="2">
                <Button size="sm" colorScheme="red"  onClick={() => decrementQuantity(index)}>
                <FaMinus />
                </Button>
                <Button size="sm" colorScheme="green" onClick={() => incrementQuantity(index)}>
                <FaPlus />
                </Button>
              </HStack>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};


