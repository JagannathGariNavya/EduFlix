import { Box, Heading, Text, Image} from '@chakra-ui/react'
import { IoIosStar } from "react-icons/io";
import { IoRibbonOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { HiPlay } from "react-icons/hi";
import instructor from '../assets/instructor.jpg'


export const Instructor = () => {
  return (
    <div>
         <Box ml="11%" mr="15%">
         <Box> 
         <Heading size="md" mb="30px" textAlign="start">Know about your instructor</Heading>
            <Box w="60%" bg="white" boxShadow='2xl' padding="25px">
            <Heading size="sm" mb="10px" textAlign="start">Angila</Heading>
            <Text textAlign="start">International Best-selling Author & Speaker</Text>
            <Box display="flex" gap="20px" justifyContent="start" alignItems="center">
                <Box>  
                    <Image w="100px" h="100px" borderRadius="50%" src={instructor}></Image>
                </Box>
            <Box mt="10px" pr="30%">
                <Text display="flex" alignItems="center" gap="15px" margin="5px"><IoIosStar />4.4 Instructor Rating</Text>
                <Text display="flex" alignItems="center" gap="15px" margin="5px"><IoRibbonOutline />9,978 Reviews</Text>
                <Text display="flex" alignItems="center" gap="15px" margin="5px"><HiUsers />17,647 Students</Text>
                <Text display="flex" alignItems="center" gap="15px" margin="5px"><HiPlay />6 courses</Text>
            </Box>
            </Box>
            <Text textAlign="start">Angila is an award-winning entrepreneur, best-selling author, philanthropist, and the world's leading transformational coach.</Text>
            </Box>
            </Box>
            </Box>
    </div>
  )
}
