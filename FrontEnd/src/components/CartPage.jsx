import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Text, VStack, HStack, Image, Divider, Flex, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { FaShoppingCart, FaPlus, FaMinus, FaStar, FaStarHalfAlt, FaCheckCircle } from 'react-icons/fa';
import { getCartItemsFromLocalStorage, setCartItemsToLocalStorage } from '../Utils/localStorage';
import QRCode from '../assets/QRCode.jpg'
import cartempty from '../assets/cartempty.png';


export const CartPage = ({ onCartClear }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const items = getCartItemsFromLocalStorage();
    setCartItems(items || []);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + (item.price.discounted * item.quantity), 0);
    setTotalPrice(total);
  }, [cartItems]);

  const incrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
    toast({
      title: "Quantity increased",
      description: `${updatedCartItems[index].courseTitle} quantity increased to ${updatedCartItems[index].quantity}`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "bottom"
    });
  };

  const decrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      toast({
        title: "Quantity decreased",
        description: `${updatedCartItems[index].courseTitle} quantity decreased to ${updatedCartItems[index].quantity}`,
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom"
      });
    } else {
      toast({
        title: "Item removed",
        description: `${updatedCartItems[index].courseTitle} has been removed from the cart`,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom"
      });
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  const updateLocalStorage = (items) => {
    setCartItemsToLocalStorage(items);
  };

  const handlePaymentClick = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false);
    setIsSuccessModalOpen(true);
    setCartItems([]);
    setTotalPrice(0);
    setCartItemsToLocalStorage([]);
    onCartClear();
    toast({
      title: "Payment Successful",
      description: "Thank you for your purchase. Your payment has been successfully processed.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "bottom"
    });
  };

  return (
    <Box w="100%" h="100vh" p="4">
      <Heading size="2xl" color="#3182ce" mb="4" ml="10%" textAlign="start">
        Shopping Cart
      </Heading>
      {cartItems.length === 0 ? (
        <Box w="80%" h="50vh" boxShadow="2xl" bg="white" m="auto" p="4">
          <Image w="20%" m="auto" mt="2%" src={cartempty} alt='Cart is empty' />
          <Text fontSize="2xl" color="#3182ce" mt="3%" fontWeight="bold" display="flex" alignItems="center" justifyContent="center">
            Your cart is empty <FaShoppingCart />
          </Text>
        </Box>
      ) : (
        <Flex mx="10%">
          <Box w="70%" mr="4%">
            {cartItems.map((item, index) => (
              <Flex key={index} bg="white" borderRadius="xl" boxShadow="2xl" mb="4" p="4" justifyContent="space-between" alignItems="center">
                <Box>
                  <Heading size="sm" mb="2" color="black">
                    {item.courseTitle}
                  </Heading>
                  {item.instructor && (
                    <Text fontSize="sm" mb="2" textAlign="start" color="black">
                      Instructor: {item.instructor.name}
                    </Text>
                  )}
                  {item.courseReviewsAndRatings && (
                    <Box fontSize="sm" mb="10px" display="flex" alignItems="center" gap="3px">
                      <Text color="#f69c08" fontSize="sm">{item.courseReviewsAndRatings.averageRating}</Text>
                      {[...Array(4)].map((_, i) => <FaStar key={i} color="#f69c08" />)}<FaStarHalfAlt color="#f69c08 " />
                      <Text color="black">({item.courseReviewsAndRatings.totalReviews} reviews)</Text>
                    </Box>
                  )}
                  <Text fontSize="sm" mb="10px" display="flex" alignItems="center" gap="13px" color="black">{item.duration}</Text>
                  <HStack spacing="2">
                    <Button size="sm" colorScheme="red" onClick={() => decrementQuantity(index)} _focus={{ outline: "none" }} focusBorderColor="transparent">
                      <FaMinus />
                    </Button>
                    <Button size="sm" colorScheme="green" onClick={() => incrementQuantity(index)} _focus={{ outline: "none" }} focusBorderColor="transparent">
                      <FaPlus />
                    </Button>
                  </HStack>
                </Box>
                <Box textAlign="right" fontSize="sm">
                  <Text mb="2" color="black">
                    Discount Price: ${item.price.discounted * item.quantity}
                  </Text>
                  <Text mb="2" color="black">
                    Original Price: <span style={{ textDecoration: 'line-through' }}>${item.price.original * item.quantity}</span>
                  </Text>
                  <Text mb="2" color="black">
                    Quantity: {item.quantity}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
          <Box w="30%" bg="white" borderRadius="xl" boxShadow="2xl" p="4" h="fit-content">
            <Heading size="lg" mb="4" color="#3182ce" textAlign="center">
              Order Summary
            </Heading>
            <Divider mb="4" />
            <Text fontSize="xl" color="black" mb="2">
              Total Price: ${totalPrice}
            </Text>
            <Button colorScheme="blue" size="lg" width="full" _focus={{ outline: "none" }} focusBorderColor="transparent" onClick={handlePaymentClick}>
              Payment
            </Button>
          </Box>
        </Flex>
      )}

      {/* Payment Modal */}
      <Modal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Complete Your Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Please scan the QR code to complete your payment via PhonePe.</Text>
            <Image src={QRCode} alt="QR Code" my="4" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handlePaymentSuccess}>
              I've made the payment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Success Modal */}
      <Modal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Successful</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" alignItems="center">
            <FaCheckCircle color="green" size="50px" />
            <Text mt="4">Thank you for your purchase! Your payment was successful.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={() => setIsSuccessModalOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
