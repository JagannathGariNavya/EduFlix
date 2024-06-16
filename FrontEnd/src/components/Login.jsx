import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../src/Login.css";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  FormControl,
  FormHelperText,
  InputRightElement,
  Alert,
  AlertIcon,
  chakra,
  Box,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/users");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const users = await response.json();

      const foundUser = users.find(
        (user) => user.name === username && user.password === password
      );
      if (foundUser) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        setUser(foundUser);
        setError("");
        if (foundUser.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      setError("Error logging in");
    }
  };

  return (
    <div className="loginpage">
      <Flex
        gap="20px"
        flexDirection="column"
        width="100wh"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          className="stack"
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Heading color="blue.500">Welcome</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={handleLogin}>
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
                      className="login-input"
                      placeholder="User Name"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      className="login-input"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/forgot-password"
                    >
                      forgot password?
                    </Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  className="login-button"
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                >
                  Login
                </Button>
                {error && (
                  <Alert status="error" borderRadius={4}>
                    <AlertIcon />
                    {error}
                  </Alert>
                )}
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          New to us?{" "}
          <Link style={{ color: "blue", textDecoration: "none" }} to="/signup">
            Sign Up
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default Login;
