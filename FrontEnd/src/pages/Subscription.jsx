import {Box, Heading, Card, Text, Button, Divider, CardFooter, CardHeader, Grid} from "@chakra-ui/react";
import { FcCheckmark } from "react-icons/fc";


export const Subscription = () => {

  const Plans = ({title, price, content1, content2, content3, content4, content5, subscribe, buttonMarginTop }) => (
    <Card maxW="xs" mb="80px" border='2px' borderColor="black" height="lg" mt="40px" boxShadow="2xl" padding="8px" borderRadius="md">
      <CardHeader >
        <Box mb="16px" h={heights} bg="black" color="white" width="105%" height="16%" borderRadius="12px" display="flex" alignItems="center" justifyContent="center" fontSize="25px" padding="15px">
          {title}
        </Box>
        <Divider mt="2" mb="5"/>
        <Text mb="5" fontSize='3xl'>{price}</Text>
        <Text mb="4" display="flex" justifyContent="start" gap="8px"><FcCheckmark fontSize="19px"/>{content1}</Text>
        <Text mb="5" display="flex" justifyContent="start" gap="8px"><FcCheckmark fontSize="22px" /> {content2}</Text>
        {content4 && (
          <Text mb="5" display="flex" justifyContent="start" gap="8px">
            <FcCheckmark fontSize="22px" /> {content4}
          </Text>
        )}
        {content5 && (
          <Text mb="5" display="flex" justifyContent="start" gap="8px">
            <FcCheckmark fontSize="22px" /> {content5}
          </Text>
        )}
        <Text display="flex" justifyContent="start" gap="8px"> <FcCheckmark  fontSize="20px"/>{content3}</Text>
      </CardHeader>
      <CardFooter>
        <Button
          ml="35px"
          color="white"
          bg="#056a67"
          colorScheme="teal"
          size="lg"
          mt={buttonMarginTop}
          onClick={() => navigate(`/course/${id}`)}
        >
          {subscribe}
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div>
      <Heading as="h2" size="xl" noOfLines={1} textAlign="center" mt="8%">
        Subscription Plans
      </Heading>

      {/* Subscription Cards */}
      <Grid ml="13%" mr="10%" templateColumns='repeat(auto-fill, minmax(300px, 1fr))' gap={6}>
        <Plans  title="Basic plan" price="1,000/month" content1="Monthly Subscription" content2="Access upto all Masterclass programs" content3="Certificate of Completion" subscribe="Subscribe now" buttonMarginTop="65px" heights="10px"/>
        <Plans  title="Premium plan" price="1,500/month" content1="Monthly Subscription" content2="Access upto Intensive programs" content3="Certificate of Completion" content4="Peer Graaded Assessments" content5="5 Live Sessions" subscribe="Subscribe now"/>
        <Plans  title="Pro plan" price="2,000/month" content1="Monthly Subscription" content2="Unlimited Access" content4="Unlimited Live Sessions" content5="1:1 call with mentor" content3="Certificate of Completion" subscribe="Subscribe now"/>
      </Grid>
    </div>
  )
};
