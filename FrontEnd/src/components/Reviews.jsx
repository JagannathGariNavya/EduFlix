import { Box, Heading, Text,  Card, CardHeader, CardBody, Flex, Avatar, IconButton,} from '@chakra-ui/react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import review from '../assets/review.jpg';
import review2 from '../assets/review2.jpg';


export const Reviews = () => {
  return (
    <div>
          <Box ml="11%" mr="15%" >
         <Box> 
         <Heading size="md"  mb="30px" textAlign="start">Reviews</Heading>
            <Box w="77%" display="flex" gap="20px" mb="30px">
            <Card maxW='md' boxShadow='2xl'>
            <CardHeader>
             <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Manish M.' src={review} />
            <Box mt="10px" >
            <Heading size='sm' textAlign="start">Manish M.
            <Text display="flex" alignItems="center" gap="3px">3.5 <FaStar color="#f69c08"/><FaStar color="#f69c08"/><FaStar color="#f69c08"/><FaStarHalfAlt color="#f69c08"/></Text>
            </Heading>
            </Box>
            </Flex>
            <CardBody>
            <Text textAlign="start">
            It was a good course for me. Had a great time learning, things were explained in a very simple way. Thanks! Would love to learn more courses from Angela.
             </Text>
            </CardBody>
            </CardHeader>
             </Card>
             <Card maxW='md' boxShadow='2xl'>
            <CardHeader>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Manish M.' src={review2} />
            <Box mt="10px">
            <Heading size='sm' textAlign="start">Samam A.
            <Text display="flex" alignItems="center" gap="3px">4 <FaStar color="#f69c08"/><FaStar color="#f69c08"/><FaStar color="#f69c08"/><FaStar color="#f69c08"/></Text>
            </Heading>
            </Box>
            </Flex>
            <CardBody>
            <Text textAlign="start">
            As Angela said in the start that this is the best course for Web development, eventually after learning now I can definitely say that yes this is the best course so far.
             </Text>
            </CardBody>
            </CardHeader>
             </Card>
            </Box>
            </Box>
            </Box>
    </div>
  )
}
