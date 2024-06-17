import { Box, Heading, Text,Card, CardBody, Button, Badge } from '@chakra-ui/react'
import { MdOndemandVideo } from "react-icons/md";
import ReactPlayer from 'react-player';
import { FaStar } from "react-icons/fa6";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaKeyboard } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import { FaStarHalfAlt } from "react-icons/fa";




export const Header1 = ({course, addToCart, handleBuyNow, cartCount}) => {
  return (
    <div>
            <Box w="100%" h="60vh" bg="#056a67" p="20px" gap="10%" display="flex">
                {/* Data show */}
                <Box ml="10%" color="white" w="47.4%" mt="10px" mb="30px">
                    <Heading size="lg" mb="20px" color="white" textAlign="start">{course.courseTitle}</Heading>
                    <Text fontSize="lg" mb="20px" textAlign="start">{course.courseDescription}</Text>
                    <Box display="flex" gap="20px">
                        <Box color="black" bg="#eceb98" w="12%" h="7%" textAlign="center" as="b">Bestseller</Box>

                        {course.courseReviewsAndRatings && (
                            <Box fontSize="md" mb="10px" display="flex" alignItems="center" gap="3px">
                                <Text color="#f69c08" fontSize="18px">{course.courseReviewsAndRatings.averageRating}</Text>
                                {[...Array(4)].map((_, i) => <FaStar key={i} color="#f69c08" />)}<FaStarHalfAlt color="#f69c08 " />
                                ({course.courseReviewsAndRatings.totalReviews} reviews)
                            </Box>
                        )}
                        {course.enrollmentNumbers && (
                            <Text fontSize="md" mb="10px" display="flex" alignItems="center">
                                {course.enrollmentNumbers} students
                            </Text>
                        )}
                    </Box>
                    {course.instructor && (
                        <Text fontSize="md" mb="10px" textAlign="start">Created by: {course.instructor.name} {course.instructor.qualifications}</Text>
                    )}
                    <Box display="flex" gap="20px">
                        <Text display="flex" alignItems="center" gap="10px"><BsFillPatchExclamationFill />Last updated {course.lastUpdated}</Text>
                        <Text display="flex" alignItems="center" gap="10px"><TbWorld />English</Text>
                        <Text display="flex" alignItems="center" gap="10px"><FaKeyboard />English, Arabic, more</Text>
                    </Box>

                    {course.coursePreview && (
                        <Box mt="4%" mb="30px">
                            <ReactPlayer url={course.coursePreview} controls={true} width="110%" />
                        </Box>
                    )}
                </Box>


                       
                <Box mr="10%">
                    <Card maxW='sm'>
                        <CardBody>
                            {course.price && (
                                <Box mt="2%">
                                    <Heading size="lg" mb="10px">
                                        <Text textAlign="start"> Discount Price: ${course.price.discounted}</Text>
                                    </Heading>
                                    <Text fontSize="lg" mb="10px" textAlign="start">Original Price: <span style={{ textDecoration: 'line-through' }}>${course.price.original}</span></Text>
                                </Box>
                            )}
                            <Text display="flex" alignItems="center" gap="10px"><MdAccessAlarm />This price is for 7 days only</Text>
                            <Box display="flex">
                            <Button size="xs" colorScheme="yellow" mt="15px" mr="15px">Beginner</Button>
                            <Button size="xs" colorScheme="yellow" mt="15px">Most Picked</Button>
                            </Box>
                            <Box m="auto">
                            <Button size="lg" mt="15px" mr="20px" colorScheme='teal' variant='outline'  onClick={() => addToCart(false)} _focus={{ outline: "none", boxShadow: "none" }}>
                             Add to cart <Badge color="white"  paddingLeft="3px" paddingRight="3px" bg="#056a67" ml="4px" mb="20px">{cartCount}</Badge>
                            </Button>
                                <Button size="lg" bg="#056a67" colorScheme='teal' mt="15px" onClick={handleBuyNow} _focus={{ outline: "none", boxShadow: "none" }}>Go to cart</Button>
                                <Heading size="sm" mt="20px" mb="25px" textAlign="start">Course Includes</Heading>
                                <Text mb="10px" display="flex" alignItems="center" gap="13px"><MdOndemandVideo />{course.duration}</Text>
                                <Text mb="10px" display="flex" alignItems="center" gap="13px" textAlign="start"><FaEarthAmericas />Learn from top 1% professionals in the world</Text>
                                <Text mb="10px" display="flex" alignItems="center" gap="13px"><SiCodementor />You can always choose a mentor</Text>
                            </Box>
                        </CardBody>
                    </Card>
                    </Box>
               </Box>
    </div>
  )
}

