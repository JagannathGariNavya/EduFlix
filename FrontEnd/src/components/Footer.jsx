import React from 'react';
import { Box, Heading, Input, InputGroup, Text } from '@chakra-ui/react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <Box
      w="100%"
      h="45vh"
      bgGradient="linear(to-r, teal.300, green.400)"
      display="flex"
      padding="20px"
      gap="60px"
      alignItems="center"
      justifyContent="center"
    >
      <Box mt="60px" w="40%">
        <Heading size='sm' mb="20px">What's up?</Heading>
        <Text>Get updates about the programs, workshops, the latest developments and community activities, straight to you inbox.</Text>
        <InputGroup mt="50px">
          <Input type="email" bg="white" w="70%" h="50px" borderRadius="50px" placeholder="Enter your email" />
        </InputGroup>
      </Box>
      <Box>
        <Heading size='sm' mt="30px" mb="20px">Product school</Heading>
        <Text mb="4px">About Us</Text>
        <Text mb="4px">Case studies</Text>
        <Text mb="4px">Contact Us</Text>
        <Text mb="4px">Refund Policy</Text>
      </Box>
      <Box>
        <Heading size='sm' mt="0px" mb="20px">Programs</Heading>
        <Text mt="4px">Crash Course</Text>
        <Text mb="4px">Masterclasses</Text>
        <Text mb="4px">Intensive Programs</Text>
      </Box>
      <Box>
        <Heading size='sm' mt="5px" mb="20px">More</Heading>
        <Text mb="4px" display="flex" gap="15px" alignItems="center"><FaPhoneAlt fontSize="14px" />(406) 555 -0120</Text>
        <Text mb="4px" display="flex" gap="15px" alignItems="center"><MdEmail />hi@growthschool.io</Text>
        <Text mb="4px" display="flex" gap="15px" alignItems="center"><FaLocationDot />2972 Westheimer Rd, Santa Ana, Illinois 85486</Text>
      </Box>
    </Box>
  );
};

export default Footer;
