import { Box, Heading, Text, Image, Card, CardBody, CardFooter, Button, SimpleGrid} from '@chakra-ui/react'
import { AiFillLike } from "react-icons/ai";

export const CoursePurchase = () => {
  return (
    <div>
         <Box ml="11%" mr="15%">
         <Box>  
    <Heading size="md" mt="30px" mb="30px">People also bought</Heading> 
    <Box>
    <SimpleGrid  mb="30px" spacing={4} templateColumns='repeat(auto-fill, minmax(220px, 1fr))'>
     <Card bg="white" boxShadow='2xl'>
    <CardBody>
    <Image mb="10px" borderRadius="10px" src="https://res.cloudinary.com/highereducation/images/w_1024,h_683,c_scale/f_auto,q_auto/v1669994566/BestColleges.com/web-developer-vs-software-engineer-man-with-laptop/web-developer-vs-software-engineer-man-with-laptop-1024x683.jpg"></Image>
    <Text>View a to become more strategic web developer</Text>
    </CardBody>
    <CardFooter>
    <Button mr="70px" bg="#056a67" color="white" colorScheme='teal'>View Course</Button>
    <Text><AiFillLike />80%</Text>
    </CardFooter>
    </Card>
    <Card bg="white" boxShadow='2xl'>
    <CardBody>
    <Image mb="10px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUTQNd-TEJqpEtkJCZE71-yYndAIIqAFRwoJGcpoUUP1WwOUL_1eeNP5NKGVAwmhAxw0&usqp=CAU"></Image>
    <Text>View a to become more strategic full stack web developer</Text>
    </CardBody>
    <CardFooter>
    <Button mr="70px" bg="#056a67" color="white" colorScheme='teal'>View Course</Button>
    <Text><AiFillLike />80%</Text>
    </CardFooter>
    </Card>
    <Card bg="white" boxShadow='2xl'>
    <CardBody>
    <Image mb="10px" borderRadius="10px" src="https://www.theforage.com/blog/wp-content/uploads/2022/09/what-is-a-web-developer.jpg"></Image>
    <Text>View a to become more strategic mobile app developer</Text>
    </CardBody>
    <CardFooter>
    <Button mr="70px" bg="#056a67" color="white" colorScheme='teal'>View Course</Button>
    <Text><AiFillLike />80%</Text>
    </CardFooter>
    </Card>
    </SimpleGrid>
    </Box>
    </Box>
    </Box>
    </div>
  )
}
