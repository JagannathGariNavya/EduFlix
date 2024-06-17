import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  chakra,
  Box,
  FormControl,
  Alert,
  AlertIcon,
  Link
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "../../src/signup.css";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('https://eduschool-3.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Failed to create account');
      }
      const newUser = await response.json();
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      setError('');
      setSuccessMessage('Sign up successful! Redirecting to login...');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear success message after 3 seconds
    } catch (error) {
      console.error(error);
      setError('Error creating account');
    }
  };

  return (
    <div className='signup-page'>
      <Flex
        gap="20px"
        flexDirection="column"
        width="100wh"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          className='stack'
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Heading color="blue.500">Sign Up</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={handleSignUp}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="User Name"
                      className='signup-input'
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      required
                    /><span style={{ color: 'red', fontSize: "20px", marginLeft: "5px" }}>*</span>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type="password"
                      className='signup-input'
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                    /><span style={{ color: 'red', fontSize: "20px", marginLeft: "5px" }}>*</span>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      className='signup-input'
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      required
                    /><span style={{ color: 'red', fontSize: "20px", marginLeft: "5px" }}>*</span>
                  </InputGroup>
                </FormControl>
                <Button
                  className='signup-button'
                  borderRadius={5}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                >
                  Sign Up
                </Button>
                {error && (
                  <Alert status="error" borderRadius={4}>
                    <AlertIcon />
                    {error}
                  </Alert>
                )}
                {successMessage && (
                  <Alert status="success" borderRadius={4}  color="green" mt="20px" ml="20px">
                    {/* <AlertIcon /> */}
                    {successMessage}
                  </Alert>
                )}
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box className='already'>
          Already have an account?{" "}
          <Link href="/login" color="teal.500">
            Login
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default SignUp;
