import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Heading,
  Card,
  Text,
  Button,
  CardBody,
  Divider,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaUser, FaShoppingCart, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchInputRef = useRef(null);

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

  const Plans = ({ title, price, content1, content2, content3, content4, content5, subscribe, buttonMarginTop }) => (
   
    <Card maxW="xs" mb="80px" border='2px' borderColor="black" height="lg" mt="40px" boxShadow="2xl" padding="8px" borderRadius="md">
      <CardHeader >
      <Box mb="16px" bg="black" color="white" width="105%" height="16%" borderRadius="12px"  display="flex" alignItems="center" justifyContent="center" fontSize="25px" padding="15px">
        {title}
        </Box>
        <Divider mt="2" mb="5"/>
        <Text mb="5" fontSize='3xl'>{price}</Text>
        <Text mb="4" display="flex" justifyContent="start" gap="8px"><FcCheckmark fontSize="19px"/>{content1}</Text>
        <Text mb="5" display="flex" justifyContent="start" gap="8px"><FcCheckmark fontSize="22px" /> {content2}</Text>
        {content4 && (
          <Text mb="5" display="flex" justifyContent="start" gap="8px">
            <FcCheckmark fontSize="22px" /> {content4}
          </Text>
        )}
        {content5 && (
          <Text mb="5" display="flex" justifyContent="start" gap="8px">
            <FcCheckmark fontSize="22px" /> {content5}
          </Text>
        )}
        <Text display="flex" justifyContent="start" gap="8px"> <FcCheckmark  fontSize="20px"/>{content3}</Text>

        </CardHeader>
      
        <CardFooter>
        <Button
          ml="35px"
          color="white"
          bg="#056a67"
          colorScheme="teal"
          size="lg"
          mt={buttonMarginTop}
        >
          {subscribe}
        </Button>
        </CardFooter>
    </Card>

  );


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
          width="35%"
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
          <FaUser
            style={{
              cursor: "pointer",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              padding: "2px",
            }}
          />
        </Link>
        <Link to="/login" style={{ marginLeft: "2%" }}>
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
          />
        </Link>
        <Link to="/subscription" style={{ marginLeft: "2%" }}>
          <FaBell
            style={{
              cursor: "pointer",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              padding: "2px",
            }}
          />
        </Link>
      </Box>

      <Heading as="h2" size="xl" noOfLines={1} textAlign="center" mt="8%">
        Subscription Plans
      </Heading>

         {/* Subscription Cards */}
      <Grid ml="13%" mr="10%" templateColumns='repeat(auto-fill, minmax(300px, 1fr))' gap={6}>
            <Plans title="Basic plan" price="1,000/month" content1="Monthly Subscription" content2="Access upto all Masterclass programs" content3="Certificate of Completion" subscribe="Subscribe now" buttonMarginTop="65px"/>
            <Plans title="Premium plan" price="1,500/month" content1="Monthly Subscription" content2="Access upto Intensive programs" content3="Certificate of Completion" content4="Peer Graaded Assessments" content5="5 Live Sessions" subscribe="Subscribe now"/>
            <Plans title="Pro plan" price="2,000/month" content1="Monthly Subscription" content2="Unlimited Access" content4="Unlimited Live Sessions" content5="1:1 call with mentor" content3="Certificate of Completion" subscribe="Subscribe now"/>
        </Grid>
  
        {/* Footer parts */}

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
        <Box mt="100px" w="40%">
            <Heading size='sm' mb="20px">What's up?</Heading>
            <Text>Get updates about the programs, workshops, the latest developments and community activities, straight to you inbox.</Text>
            <InputGroup mt="50px">
            <Input type="email" bg="white" w="70%" h="50px" borderRadius="50px" placeholder="Enter your email" /> 
        </InputGroup>
        </Box>
       
   
        <Box><Heading size='sm' mt="30px" mb="20px">Product school</Heading>
        <Text mb="4px">About Us</Text>
        <Text  mb="4px">Case studies</Text>
        <Text  mb="4px">Contact Us</Text>
        <Text  mb="4px">Refund Policy</Text>
        </Box>
        <Box><Heading size='sm' mt="0px" mb="20px">Programs</Heading>
            <Text  mt="4px">Crash Course</Text>
            <Text  mb="4px">Masterclassess</Text>
            <Text  mb="4px">Intensive Programs</Text>
        </Box>
        <Box ><Heading size='sm' mt="5px" mb="20px">More</Heading>
            <Text  mb="4px" display="flex" gap="15px" alignItems="center"><FaPhoneAlt fontSize="14px"/>(406) 555 -0120</Text>
            <Text  mb="4px" display="flex" gap="15px" alignItems="center"><MdEmail />hi@growthschool.io</Text>
            <Text  mb="4px" display="flex" gap="15px" alignItems="center"><FaLocationDot />2972 Westheimer Rd, Santa Ana, Illinois 85486</Text>
        </Box>
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
            top="65px"
            width="35%"
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
  )
};
