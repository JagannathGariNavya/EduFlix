import { Box, Heading, Text } from '@chakra-ui/react'
import { FaArrowRightLong } from "react-icons/fa6";


export const Courselearn = () => {
  return (
    <div>
         <Box ml="11%" mr="15%">
         <Box> 
          <Heading size="md" mb="30px">What you will learn from this course</Heading>
            <Box display="flex" gap="50px" w="73%" bg="white" boxShadow='2xl' p="27px" mb="20px">
            <Box >
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />HTML and CSS Fundamentals</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />JavaScript Basics</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Advanced JavaScript</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Node.js and Express</Text>
            </Box>
            <Box>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Databases with MongoDB</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />React and Redux</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Building and Deploying a Full-Stack Application</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Git / Github</Text>
            </Box>
            </Box>
            </Box>
            </Box>
    </div>
  )
}

