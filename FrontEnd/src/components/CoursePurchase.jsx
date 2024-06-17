import { Box, Heading, Text, Image, Card, CardBody, CardFooter, Button, SimpleGrid} from '@chakra-ui/react'
import { AiFillLike } from "react-icons/ai";
import  web1 from '../assets/web1.jpg';
import web2 from '../assets/web2.jpeg';
import web3 from '../assets/web3.jpg';

export const CoursePurchase = () => {
  return (
    <div>
     <Box ml="11%" mr="15%">
    <Box>  
    <Heading size="md" mt="30px" mb="30px" textAlign="start">People also bought</Heading> 
    <Box>
    <SimpleGrid  mb="30px" spacing={4} templateColumns='repeat(auto-fill, minmax(220px, 1fr))'>
     <Card bg="white" boxShadow='2xl'>
    <CardBody>
    <Image mb="10px" borderRadius="10px" src={web1}/>
    <Text textAlign="start">View a to become more strategic web developer</Text>
    </CardBody>
    <CardFooter>
    <Button
  mr="70px"
  bg="#056a67"
  color="white"
  _hover={{ bg: "#065c5a" }}
  _active={{ bg: "#056a67", outline: "none" }}
  _focus={{ outline: "none", boxShadow: "none" }}
  focusBorderColor="none"
  colorScheme='teal'
>
  View Course
</Button>
    <Box mt="20px">
    <Text><AiFillLike />80%</Text>
    </Box>
    </CardFooter>
    </Card>
    <Card bg="white" boxShadow='2xl'>
    <CardBody>
    <Image mb="10px" borderRadius="10px" src={web2}></Image>
    <Text textAlign="start">View a to become more strategic full stack web developer</Text>
    </CardBody>
    <CardFooter>
    <Button
  mr="70px"
  bg="#056a67"
  color="white"
  _hover={{ bg: "#065c5a" }}
  _active={{ bg: "#056a67", outline: "none" }}
  _focus={{ outline: "none", boxShadow: "none" }}
  focusBorderColor="none"
  colorScheme='teal'
>
  View Course
</Button>
    <Box mt="20px">
    <Text><AiFillLike />80%</Text>
    </Box>
    </CardFooter>
    </Card>
    <Card bg="white" boxShadow='2xl'>
    <CardBody>
    <Image mb="10px" borderRadius="10px" src={web3}></Image>
    <Text textAlign="start">View a to become more strategic mobile app developer</Text>
    </CardBody>
    <CardFooter>
    <Button
  mr="70px"
  bg="#056a67"
  color="white"
  _hover={{ bg: "#065c5a" }}
  _active={{ bg: "#056a67", outline: "none" }}
  _focus={{ outline: "none", boxShadow: "none" }}
  focusBorderColor="none"
  colorScheme='teal'
>
  View Course
</Button>
    <Box mt="20px">
    <Text><AiFillLike />80%</Text>
    </Box>
    </CardFooter>
    </Card>
    </SimpleGrid>
    </Box>
    </Box>
    </Box>
    </div>
  )
}
