import React, { useEffect, useState } from 'react'
import { Box, Heading, Text, Image, Card, CardHeader, CardBody, CardFooter, Button, SimpleGrid, Flex, Avatar, IconButton, Accordion, AccordionIcon, AccordionButton, AccordionItem, AccordionPanel, Stack, ButtonGroup } from '@chakra-ui/react'
import { MdRestartAlt } from "react-icons/md";
import { MdOutlineCalendarViewMonth } from "react-icons/md";
import { BiCloudDownload } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { IoRibbonOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { HiPlay } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import ReactPlayer from 'react-player';
import { FaStar } from "react-icons/fa6";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaKeyboard } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";

export const CoursePage = () => {
    const [course, setCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch('https://eduschool-2.onrender.com/pdp_Details')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          if (data.length > 0) {
            setCourses(data[0]); 
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError(error.message);
        });
    }, []);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!course) {
      return <div>Loading...</div>;
    }

  return (
    <div>
        <Box w="100%" h="60vh" bg="#056a67" p="20px" display="flex" gap="10%" >
        {/* Data show */}
        <Box ml="10%" color="white" w="47.4%" mt="10px" mb="30px">
        <Heading size="lg" mb="20px">{course.courseTitle}</Heading>
        <Text fontSize="lg" mb="20px">{course.courseDescription}</Text>
        <Box display="flex" gap="20px">
        <Box color="black" bg="#eceb98" w="11%" h="7%" textAlign="center" as="b">Bestseller</Box>
        
        {course.courseReviewsAndRatings && (
          <Text fontSize="md" mb="10px" display="flex" alignItems="center" gap="2px">
           <Text color="#f69c08" fontSize="18px">{course.courseReviewsAndRatings.averageRating}</Text> <FaStar color="#f69c08 "/><FaStar color="#f69c08 "/><FaStar color="#f69c08 "/><FaStar color="#f69c08 "/>({course.courseReviewsAndRatings.totalReviews} reviews)
          </Text>
        )}
        {course.enrollmentNumbers && <Text fontSize="md" mb="10px">{course.enrollmentNumbers} students</Text>}
        </Box>
        {course.instructor && (
          <>
            <Text fontSize="md" mb="10px">Created by:  {course.instructor.name} {course.instructor.qualifications}</Text>
          </>
        )}
        <Box display="flex" gap="20px">
            <Text display="flex" alignItems="center" gap="10px"><BsFillPatchExclamationFill />Last updated 14/2024</Text>
            <Text display="flex" alignItems="center" gap="10px"><TbWorld />English</Text>
            <Text display="flex" alignItems="center" gap="10px"><FaKeyboard />English, Arabic, more</Text>
        </Box>
       
        {course.coursePreview && (
          <Box mt="4%" >
            <ReactPlayer url={course.coursePreview} controls={true} width="110%" />
          </Box>
        )}  
        </Box>

        <Box mr="10%" style={{position:"sticky", top:"0px"}}>
        <Card maxW='sm'>
        <CardBody>
        <Heading size="lg" mb="15px">1,500/month</Heading>
        <Text display="flex" alignItems="center" gap="10px"><MdAccessAlarm />This prize is for 7 days only</Text>
        <Button size="xs" colorScheme="yellow" mt="15px" mr="10px">Beginner</Button>
        <Button size="xs" colorScheme="yellow" mt="15px">Most Picked</Button>
        <Box m="auto">
        <Button size="lg" mt="15px" mr="20px" colorScheme='teal' variant='outline'>Add to cart</Button>
        <Button size="lg" bg="#056a67" colorScheme='teal' mt="15px">Buy now</Button>
        <Heading size="sm" mt="20px" mb="25px">Course Includes</Heading>
        <Text mb="10px" display="flex" alignItems="center" gap="13px"><MdOndemandVideo />8-hours on-demand videos</Text>
        <Text mb="10px" display="flex" alignItems="center" gap="13px"><FaEarthAmericas />Learn from top 1% professionals in the world</Text>
        <Text mb="10px" display="flex" alignItems="center" gap="13px"><SiCodementor />You can always choose a mentor</Text>
        </Box>
        </CardBody>
            </Card>
            </Box>
        </Box>

        {/* Below Part Start  */}

        <Box ml="11%" mr="15%" mt="18%">
        <Box>
        {/* What you will learn from this course */}
        <Heading size="md" mb="20px">Course Content</Heading>
        <Box display="flex" gap="20px" fontSize="17px"  mb="10px">
            <Text display="flex" alignItems="center" gap="7px"><MdRestartAlt />6hrs content</Text>
            <Text display="flex" alignItems="center" gap="7px"><MdOutlineCalendarViewMonth />5modules</Text>
            <Text display="flex" alignItems="center" gap="7px"><BiCloudDownload />Self pace</Text>
            
        </Box>
        <Accordion allowToggle>
            {/* 1 Module */}
            <Box mb="15px">
            <AccordionItem w="73%" border="0" boxShadow="md" >
             <h2>
            <AccordionButton >
            <Box w="100%" textAlign="left" p="10px"  display="flex">
            <AccordionIcon mr="15px"/>Front-End Web Development
            <Text ml="50%">5 lectures . 37min</Text>
            </Box>
            </AccordionButton>
         </h2>
        <AccordionPanel pb={4}>
        <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />What you'll get from in this course
            <Text ml="43%">Preview</Text>
            <Text> 03:08</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />How does the internet actually works?
            <Text ml="39.8%">Preview</Text>
            <Text> 05:27</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />How do the websites actually works?
            <Text ml="41%">Preview</Text>
            <Text> 08:22</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />How to get the most out of the course
            <Text ml="50%">09:33</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />How to Get Help When You're Stuck
            <Text ml="52%">06:39</Text>
            </Box>
        </AccordionPanel>
        </AccordionItem>
        </Box>
         {/* 1 Module */}

         {/* 2 Module */}
         <Box mb="15px">
            <AccordionItem w="73%" border="0" boxShadow="md" >
             <h2>
            <AccordionButton >
            <Box w="100%" textAlign="left" p="10px"  display="flex">
            <AccordionIcon mr="15px"/>Introduction to HTML
            <Text ml="57%">5 lectures . 49min</Text>
            </Box>
            </AccordionButton>
         </h2>
        <AccordionPanel pb={4}>
        <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />What is HTML?
            <Text ml="61%">Preview</Text>
            <Text> 04:18</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />HTML Heading Elements
            <Text ml="62%">14:24</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />HTML Paragraph Elements
            <Text ml="60.5%">08:40</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />Self Closing Tags
            <Text ml="70%">11:40</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />[Project] Movie Ranking
            <Text ml="63%">05:43</Text>
            </Box>
        </AccordionPanel>
        </AccordionItem>
        </Box>
         {/* 2 Module */}

         {/* 3 Module */}
         <Box mb="15px">
            <AccordionItem w="73%" border="0" boxShadow="md" >
             <h2>
            <AccordionButton >
            <Box w="100%" textAlign="left" p="10px"  display="flex">
            <AccordionIcon mr="15px"/>Intermediate HTML
            <Text ml="59%">3 lectures . 52min</Text>
            </Box>
            </AccordionButton>
         </h2>
        <AccordionPanel pb={4}>
        <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />The List Element
            <Text ml="71%">10:32</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />Nesting and Indentation
            <Text ml="63.6%">14:09</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />Anchor Elements
            <Text ml="71%">10:45</Text>
            </Box>
        </AccordionPanel>
        </AccordionItem>
        </Box>
         {/* 3 Module */}

         {/* 4 Module */}
         <Box mb="15px">
            <AccordionItem w="73%" border="0" boxShadow="md" >
             <h2>
            <AccordionButton >
            <Box w="100%" textAlign="left" p="10px"  display="flex">
            <AccordionIcon mr="15px"/>Multiple-Page Websites
            <Text ml="55%">4 lectures . 52min</Text>
            </Box>
            </AccordionButton>
         </h2>
        <AccordionPanel pb={4}>
        <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />Computer File Paths
            <Text ml="67%">19:20</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />What are Webpages?
            <Text ml="66%">12:55</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />The HTML Boilerplate
            <Text ml="66%">12:53</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />[Project] Portfolio Website
            <Text ml="61%">08:34</Text>
            </Box>
        </AccordionPanel>
        </AccordionItem>
        </Box>
         {/* 4 Module */}
         
         {/* 5 Module */}
         <Box mb="30px">
            <AccordionItem w="73%" border="0" boxShadow="md" >
             <h2>
            <AccordionButton >
            <Box w="100%" textAlign="left" p="10px"  display="flex">
            <AccordionIcon mr="15px"/>Introduction to CSS
            <Text ml="59%">4 lectures . 59min</Text>
            </Box>
            </AccordionButton>
         </h2>
        <AccordionPanel pb={4}>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />Why do we need CSS?
            <Text ml="65.5%">08:44</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />How to add CSS
            <Text ml="71%">15:19</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />[Project] Colour Vocab Website
            <Text ml="57.5%">09:08</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />CSS Selectors
            <Text ml="74%">22:56</Text>
            </Box>
        </AccordionPanel>
        </AccordionItem>
        </Box>
         {/* 5 Module */}
        </Accordion>

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
            {/* What you will learn from this course */}

            {/* Know about your instructor */}
            <Heading size="md" mb="30px">Know about your instructor</Heading>
            <Box w="60%" bg="white" boxShadow='2xl' padding="25px">
            <Heading size="sm" mb="10px">Angila</Heading>
            <Text>International Best-selling Author & Speaker</Text>
            <Box display="flex" gap="20px" justifyContent="start" alignItems="center">
                <Box>  
                    <Image w="100px" h="100px" borderRadius="50%" src="https://img-b.udemycdn.com/user/200_H/31334738_a13c_3.jpg"></Image>
                </Box>
            <Box mt="10px" pr="30%">
                <Text display="flex" alignItems="center" gap="15px" margin="5px"><IoIosStar />4.4 Instructor Rating</Text>
                <Text display="flex" alignItems="center" gap="15px" margin="5px"><IoRibbonOutline />9,978 Reviews</Text>
                <Text display="flex" alignItems="center" gap="15px" margin="5px"><HiUsers />17,647 Students</Text>
                <Text display="flex" alignItems="center" gap="15px" margin="5px"><HiPlay />6 courses</Text>
            </Box>
            </Box>
            <Text>Angila is an award-winning entrepreneur, best-selling author, philanthropist, and the world's leading transformational coach.</Text>
            </Box>
            <Heading size="md" mt="30px" mb="30px">People also bought</Heading>
        {/* Know about your instructor */}

          {/* People also bought */}
        <Box>
        <SimpleGrid  mb="30px" spacing={4} templateColumns='repeat(auto-fill, minmax(220px, 1fr))'>
         <Card bg="white" boxShadow='2xl'>
        <CardBody>
        <Image mb="10px" borderRadius="10px" src="https://res.cloudinary.com/highereducation/images/w_1024,h_683,c_scale/f_auto,q_auto/v1669994566/BestColleges.com/web-developer-vs-software-engineer-man-with-laptop/web-developer-vs-software-engineer-man-with-laptop-1024x683.jpg"></Image>
        <Text>View a to become more strategic web developer</Text>
        </CardBody>
        <CardFooter>
        <Button mr="40px" bg="#056a67" color="white" colorScheme='teal'>View Course</Button>
        <Text><AiFillLike />80%</Text>
        </CardFooter>
        </Card>
        <Card bg="white" boxShadow='2xl'>
        <CardBody>
        <Image mb="10px" borderRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUTQNd-TEJqpEtkJCZE71-yYndAIIqAFRwoJGcpoUUP1WwOUL_1eeNP5NKGVAwmhAxw0&usqp=CAU"></Image>
        <Text>View a to become more strategic full stack web developer</Text>
        </CardBody>
        <CardFooter>
        <Button mr="50px" bg="#056a67" color="white" colorScheme='teal'>View Course</Button>
        <Text><AiFillLike />80%</Text>
        </CardFooter>
        </Card>
        <Card bg="white" boxShadow='2xl'>
        <CardBody>
        <Image mb="10px" borderRadius="10px" src="https://www.theforage.com/blog/wp-content/uploads/2022/09/what-is-a-web-developer.jpg"></Image>
        <Text>View a to become more strategic mobile app developer</Text>
        </CardBody>
        <CardFooter>
        <Button mr="50px" bg="#056a67" color="white" colorScheme='teal'>View Course</Button>
        <Text><AiFillLike />80%</Text>
        </CardFooter>
        </Card>
        </SimpleGrid>
            {/* People also bought */}

            {/* REVIEWS */}
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
            {/* REVIEWS */}


            <Heading size="md" mb="30px">Frequently Asked Questions</Heading>
            <Accordion allowToggle>
            {/* 1 Module */}
            <Box mb="15px">
            <AccordionItem w="75%" border="0" boxShadow="md" >
            <AccordionButton >
            <Box w="100%" textAlign="left" p="10px"  display="flex">
            <AccordionIcon mr="15px"/>What is EduSchool?
            </Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
            EduSchool mission is to create new possibilities for people and organizations everywhere. Our global marketplace features an extensive, multi-language library, which includes thousands of courses taught by real-world experts. You can take courses across a wide range of categories, some of which include: business & entrepreneurship, programming, academics, the arts, health & fitness, language, music, and more!
            </Box>
        </AccordionPanel>
        </AccordionItem>
        </Box>
         {/* 1 Module */}

         {/* 2 Module */}
         <Box mb="15px">
            <AccordionItem w="75%" border="0" boxShadow="md" >
            <AccordionButton >
            <Box w="100%" textAlign="left" p="10px"  display="flex">
            <AccordionIcon mr="15px"/>What do EduSchool courses include?
            </Box>
            </AccordionButton>
         
        <AccordionPanel pb={4}>
        <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        The foundation of each EduSchool course is its lectures, which can include videos, slides, and text. Each EduSchool course is created, owned, and managed by the instructor(s). In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. 
            </Box>
        </AccordionPanel>
        </AccordionItem>
        </Box>
         {/* 2 Module */}

         {/* 3 Module */}
         <Box mb="15px">
            <AccordionItem w="75%" border="0" boxShadow="md" >
            <AccordionButton >
            <Box w="100%" textAlign="left" p="10px"  display="flex">
            <AccordionIcon mr="15px"/>How do I start my course?
            </Box>
            </AccordionButton>
         
        <AccordionPanel pb={4}>
        <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        After enrolling in the course, you can access it by logging in to your account and clicking on the course link you will receive in your confirmation email (provided you’re logged into your EduSchool account) or on the My learning page.
            </Box>
        </AccordionPanel>
        </AccordionItem>
        </Box>
         {/* 3 Module */}

         {/* 4 Module */}
         <Box mb="15px">
            <AccordionItem w="75%" border="0" boxShadow="md" >
            <AccordionButton >
            <Box w="100%" textAlign="left" p="10px"  display="flex">
            <AccordionIcon mr="15px"/>Do I have to start or complete my course by a certain time?
            </Box>
            </AccordionButton>
         
        <AccordionPanel pb={4}>
        <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        There are no deadlines to begin or complete a course. Learn about our Lifetime Access policy.
            </Box>
        </AccordionPanel>
        </AccordionItem>
        </Box>
         {/* 4 Module */}
         
         {/* 5 Module */}
         <Box mb="20px">
            <AccordionItem w="75%" border="0" boxShadow="md" >
             <h2>
            <AccordionButton >
            <Box w="100%" textAlign="left" p="10px"  display="flex">
            <AccordionIcon mr="15px"/>How do I create or log in to my account?
            </Box>
            </AccordionButton>
         </h2>
        <AccordionPanel pb={4}>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
                Go to Login Page Create your account and then signin/signup.
            </Box>
        </AccordionPanel>
        </AccordionItem>
        </Box>
         {/* 5 Module */}
        </Accordion>
            </Box>
        </Box>
        {/* side card */}
        <Box>

        </Box>
        </Box>
    </div>
  )
}
