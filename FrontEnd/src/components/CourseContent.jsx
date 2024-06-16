import { Box, Heading, Text, Accordion, AccordionIcon, AccordionButton, AccordionItem, AccordionPanel, } from '@chakra-ui/react'
import { MdRestartAlt } from "react-icons/md";
import { MdOutlineCalendarViewMonth } from "react-icons/md";
import { BiCloudDownload } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";


export const CourseContent = () => {
  return (
    <div>
         <Box ml="11%" mr="15%" mt="16%">
         <Box> 
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
            <Text ml="49%">09:33</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />How to Get Help When You're Stuck
            <Text ml="51%">06:39</Text>
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
            <Text ml="69%">11:40</Text>
            </Box>
            <Box w="100%" textAlign="left" p="10px"  display="flex" alignItems="center" gap="20px">
        <MdOndemandVideo />[Project] Movie Ranking
            <Text ml="62.5%">05:43</Text>
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
            <Text ml="70.5%">10:45</Text>
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
            <Text ml="61.7%">08:34</Text>
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
            <Text ml="73.5%">22:56</Text>
            </Box>
        </AccordionPanel>
        </AccordionItem>
        </Box>
        </Accordion>
        </Box>
        </Box>
    </div>
  )
}
