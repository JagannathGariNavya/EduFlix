import { Box, Heading, Text,  Card, CardHeader, CardBody, Flex, Avatar, IconButton,} from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs";

export const Reviews = () => {
  return (
    <div>
         <Heading size="md"  mb="30px">Reviews</Heading>
            <Box w="75%" display="flex" gap="20px" mb="30px">
            <Card maxW='md' boxShadow='2xl'>
            <CardHeader>
            <Flex spacing='4'>
             <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Manish M.' src='https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg' />
            <Box>
            <Heading size='sm'>Manish M.</Heading>
            <Text>3.5 Course Rating</Text>
            </Box>
            </Flex>
            <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            icon={<BsThreeDotsVertical />}
            />
            </Flex>
            <CardBody>
            <Text>
            It was a good course for me. Had a great time learning, things were explained in a very simple way. Thanks! Would love to learn more courses from Angela.
             </Text>
            </CardBody>
            </CardHeader>
             </Card>
             <Card maxW='md' boxShadow='2xl'>
            <CardHeader>
            <Flex spacing='4'>
             <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Manish M.' src='https://cdn.vectorstock.com/i/1000v/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg' />
            <Box>
            <Heading size='sm'>Samam A.</Heading>
            <Text>5 Course Rating</Text>
            </Box>
            </Flex>
            <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            icon={<BsThreeDotsVertical />}
            />
            </Flex>
            <CardBody>
            <Text>
            As Angela said in the start that this is the best course for Web development, eventually after learning now I can definitely say that yes this is the best course so far.
             </Text>
            </CardBody>
            </CardHeader>
             </Card>
            </Box>
    </div>
  )
}
