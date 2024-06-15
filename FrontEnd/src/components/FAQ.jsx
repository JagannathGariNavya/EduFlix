import { Box, Heading, Accordion, AccordionIcon, AccordionButton, AccordionItem, AccordionPanel, } from '@chakra-ui/react'

export const FAQ = () => {
  return (
    <div>
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
    </div>
  )
}
