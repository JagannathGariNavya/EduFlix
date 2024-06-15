import { Box, Heading, Text } from '@chakra-ui/react'
import { FaArrowRightLong } from "react-icons/fa6";


export const Courselearn = () => {
  return (
    <div>
          <Heading size="md" mb="30px">What you will learn from this course</Heading>
            <Box display="flex" gap="30px" w="73%" bg="white" boxShadow='2xl' p="27px" mb="20px">
            <Box >
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Management</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Scrum</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Project Management</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Software Requirements</Text>
            </Box>
            <Box>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Agile Software development</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Management</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />Software product management</Text>
            <Text display="flex" alignItems="center" gap="15px" margin="5px"><FaArrowRightLong />agile</Text>
            </Box>
            </Box>
    </div>
  )
}

