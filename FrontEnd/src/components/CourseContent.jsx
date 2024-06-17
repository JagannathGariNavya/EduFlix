import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { MdRestartAlt } from "react-icons/md";
import { MdOutlineCalendarViewMonth } from "react-icons/md";
import { BiCloudDownload } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";

export const CourseContent = () => {
  return (
    <div>
      <Box ml="11%" mr="15%" mt="17%">
        <Box>
          <Heading size="md" mb="20px" textAlign="start">
            Course Content
          </Heading>
          <Box display="flex" gap="20px" fontSize="17px" mb="10px">
            <Text display="flex" alignItems="center" gap="7px">
              <MdRestartAlt />
              6hrs content
            </Text>
            <Text display="flex" alignItems="center" gap="7px">
              <MdOutlineCalendarViewMonth />
              5modules
            </Text>
            <Text display="flex" alignItems="center" gap="7px">
              <BiCloudDownload />
              Self pace
            </Text>
          </Box>

          <Accordion allowToggle>
            {/* 1 Module */}
            <Box mb="15px">
              <AccordionItem w="73%" border="0" boxShadow="md" borderRadius="10px">
                <h2>
                  <AccordionButton _hover={{ borderColor: 'transparent', boxShadow: 'none', backgroundColor: '#f5f5f5' }}
                  _focus={{ boxShadow: 'none', borderColor: 'transparent', outline: 'none' }}
                  _focusVisible={{ boxShadow: 'none', borderColor: 'transparent', backgroundColor: 'transparent' }} >
                    <Box w="100%" textAlign="left" p="10px" display="flex">
                      <AccordionIcon mr="15px" color="black"/>
                      <Text color="black">Front-End Web Development</Text>
                      <Text ml="50%" color="black">5 lectures . 37min</Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    What you'll get from in this course
                    <Text ml="44%">Preview</Text>
                    <Text> 03:08</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    How does the internet actually works?
                    <Text ml="40.2%">Preview</Text>
                    <Text> 05:27</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    How do the websites actually works?
                    <Text ml="41.1%">Preview</Text>
                    <Text> 08:22</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    How to get the most out of the course
                    <Text ml="50.5%">09:33</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    How to Get Help When You're Stuck
                    <Text ml="52%">06:39</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Box>
            {/* 1 Module */}

            {/* 2 Module */}
            <Box mb="15px">
              <AccordionItem w="73%" border="0" boxShadow="md" borderRadius="10px">
                <h2>
                  <AccordionButton _hover={{ borderColor: 'transparent', boxShadow: 'none', backgroundColor: '#f5f5f5' }}
                  _focus={{ boxShadow: 'none', borderColor: 'transparent', outline: 'none' }}
                  _focusVisible={{ boxShadow: 'none', borderColor: 'transparent', backgroundColor: 'transparent' }}>
                    <Box w="100%" textAlign="left" p="10px" display="flex">
                      <AccordionIcon mr="15px" color="black"/>
                     <Text color="black">Introduction to HTML</Text>
                      <Text ml="57%" color="black">5 lectures . 49min</Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    What is HTML?
                    <Text ml="60%">Preview</Text>
                    <Text> 04:18</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    HTML Heading Elements
                    <Text ml="62%">14:24</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    HTML Paragraph Elements
                    <Text ml="59.7%">08:40</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    Self Closing Tags
                    <Text ml="68.5%">11:40</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    [Project] Movie Ranking
                    <Text ml="63%">05:43</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Box>
            {/* 2 Module */}

            {/* 3 Module */}
            <Box mb="15px">
              <AccordionItem w="73%" border="0" boxShadow="md" borderRadius="10px">
                <h2>
                  <AccordionButton _hover={{ borderColor: 'transparent', boxShadow: 'none', backgroundColor: '#f5f5f5' }}
                  _focus={{ boxShadow: 'none', borderColor: 'transparent', outline: 'none' }}
                  _focusVisible={{ boxShadow: 'none', borderColor: 'transparent', backgroundColor: 'transparent' }}>
                    <Box w="100%" textAlign="left" p="10px" display="flex">
                      <AccordionIcon mr="15px" color="black"/>
                      <Text color="black">Intermediate HTML</Text>
                      <Text ml="59%" color="black">3 lectures . 52min</Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    The List Element
                    <Text ml="69.5%">10:32</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    Nesting and Indentation
                    <Text ml="63.6%">14:09</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    Anchor Elements
                    <Text ml="69.5%">10:45</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Box>
            {/* 3 Module */}

            {/* 4 Module */}
            <Box mb="15px">
              <AccordionItem w="73%" border="0" boxShadow="md" borderRadius="10px">
                <h2>
                  <AccordionButton _hover={{ borderColor: 'transparent', boxShadow: 'none', backgroundColor: '#f5f5f5' }}
                  _focus={{ boxShadow: 'none', borderColor: 'transparent', outline: 'none' }}
                  _focusVisible={{ boxShadow: 'none', borderColor: 'transparent', backgroundColor: 'transparent' }}>
                    <Box w="100%" textAlign="left" p="10px" display="flex">
                      <AccordionIcon mr="15px" color="black"/>
                      <Text color="black">Multiple-Page Websites</Text>
                      <Text ml="55%" color="black">4 lectures . 52min</Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    Computer File Paths
                    <Text ml="67%">19:20</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    What are Webpages?
                    <Text ml="65.5%">12:55</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    The HTML Boilerplate
                    <Text ml="66%">12:53</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    [Project] Portfolio Website
                    <Text ml="62%">08:34</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Box>
            {/* 4 Module */}

            {/* 5 Module */}
            <Box mb="30px">
              <AccordionItem w="73%" border="0" boxShadow="md" borderRadius="10px">
                <h2>
                  <AccordionButton _hover={{ borderColor: 'transparent', boxShadow: 'none', backgroundColor: '#f5f5f5' }}
                  _focus={{ boxShadow: 'none', borderColor: 'transparent', outline: 'none' }}
                  _focusVisible={{ boxShadow: 'none', borderColor: 'transparent', backgroundColor: 'transparent' }}>
                    <Box w="100%" textAlign="left" p="10px" display="flex">
                      <AccordionIcon mr="15px" color="black"/>
                      <Text color="black">Introduction to CSS</Text>
                      <Text ml="59%" color="black">4 lectures . 59min</Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    Why do we need CSS?
                    <Text ml="64.5%">08:44</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    How to add CSS
                    <Text ml="70.5%">15:19</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    [Project] Colour Vocab Website
                    <Text ml="57.5%">09:08</Text>
                  </Box>
                  <Box
                    w="100%"
                    textAlign="left"
                    p="10px"
                    display="flex"
                    alignItems="center"
                    gap="20px"
                  >
                    <MdOndemandVideo />
                    CSS Selectors
                    <Text ml="73%">22:56</Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Box>
          </Accordion>
        </Box>
      </Box>
    </div>
  );
};
