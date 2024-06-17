import React, { useState } from "react";
import {
  Box,
  Heading,
  Card,
  Text,
  Button,
  Divider,
  CardFooter,
  CardHeader,
  Grid,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { FcCheckmark } from "react-icons/fc";

export const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [isCardNumberError, setIsCardNumberError] = useState(false);
  const [isCvvError, setIsCvvError] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const plans = [
    {
      title: "Basic plan",
      priceMonthly: "1,000",
      subscriptionType: "Monthly",
      content1: "Monthly Subscription",
      content2: "Access Masterclass programs",
      content3: "Certificate of Completion",
      subscribe: "Subscribe now",
      buttonMarginTop: "76px",
    },
    {
      title: "Premium plan",
      priceMonthly: "1,500",
      subscriptionType: "Monthly",
      content1: "Monthly Subscription",
      content2: "Access Intensive programs",
      content3: "Certificate of Completion",
      content4: "Peer Graded Assessments",
      content5: "5 Live Sessions",
      subscribe: "Subscribe now",
    },
    {
      title: "Pro plan",
      priceMonthly: "2,000",
      subscriptionType: "Monthly",
      content1: "Monthly Subscription",
      content2: "Unlimited Access",
      content4: "Unlimited Live Sessions",
      content5: "1:1 call with mentor",
      content3: "Certificate of Completion",
      subscribe: "Subscribe now",
    },
  ];

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    onOpen();
  };

  const handlePayment = () => {
    if (!cardNumber) setIsCardNumberError(true);
    if (!cvv) setIsCvvError(true);

    if (cardNumber && cvv) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onClose();
        toast({
          title: "Payment Successful",
          description: `You have successfully subscribed to the ${selectedPlan.title}.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setCardNumber("");
        setCvv("");
      }, 2000);
    }
  };

  const Plans = ({
    title,
    priceMonthly,
    subscriptionType,
    content1,
    content2,
    content3,
    content4,
    content5,
    subscribe,
    buttonMarginTop,
  }) => (
    <Card
      maxW="xs"
      mb="80px"
      border="2px"
      borderColor={selectedPlan?.title === title ? "teal" : "black"}
      height="lg"
      mt="40px"
      boxShadow="2xl"
      padding="8px"
      borderRadius="md"
    >
      <CardHeader>
        <Box
          mb="16px"
          bg={selectedPlan?.title === title ? "teal" : "black"}
          color="white"
          width="105%"
          height="15%"
          borderRadius="12px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="25px"
          padding="15px"
        >
          {title}
        </Box>
        <Divider mt="2" mb="5" />
        <Text mb="5" fontSize="3xl" display="flex">
          ₹{priceMonthly}/month
        </Text>
        <Flex mb="4" alignItems="center" gap="8px">
          <FcCheckmark fontSize="19px" />
          <Text>{content1}</Text>
        </Flex>
        <Flex mb="5" alignItems="center" gap="8px">
          <FcCheckmark fontSize="22px" />
          <Text>{content2}</Text>
        </Flex>
        {content4 && (
          <Flex mb="5" alignItems="center" gap="8px">
            <FcCheckmark fontSize="22px" /> 
            <Text>{content4}</Text>
          </Flex>
        )}
        {content5 && (
          <Flex mb="5" alignItems="center" gap="8px">
            <FcCheckmark fontSize="22px" /> 
            <Text>{content5}</Text>
          </Flex>
        )}
        <Flex alignItems="center" gap="8px">
          <FcCheckmark fontSize="20px" />
          <Text>{content3}</Text>
        </Flex>
      </CardHeader>
      <CardFooter>
        <Button
          ml="40px"
          color="white"
          bg="#056a67"
          colorScheme="teal"
          size="lg"
          mt={buttonMarginTop}
          onClick={() =>
            handleSubscribe({
              title,
              priceMonthly,
              durationMonths: plans.find((p) => p.title === title)
                .durationMonths,
              subscriptionType,
            })
          }
        >
          {subscribe}
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <Box>
      <Heading as="h2" size="xl" noOfLines={1} textAlign="center" mt="8%" mb="20px">
        Subscription Plans
      </Heading>

      <Flex justify="center">
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
          {plans.map((plan, index) => (
            <Plans key={index} {...plan} />
          ))}
        </Grid>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Complete Your Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg" mb="4">
              You have selected the {selectedPlan?.title}.
            </Text>
            <Text fontSize="lg" mb="4">
              Price: ₹{selectedPlan?.priceMonthly}/month
            </Text>
            <FormControl isInvalid={isCardNumberError} mb="4">
              <FormLabel>Card Number</FormLabel>
              <Input
                type="number"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => {
                  setCardNumber(e.target.value);
                  setIsCardNumberError(false);
                }}
              />
              {isCardNumberError && (
                <FormErrorMessage>Card number is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={isCvvError} mb="4">
              <FormLabel>Card Verification Value (CVV)</FormLabel>
              <Input
                type="number"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => {
                  setCvv(e.target.value);
                  setIsCvvError(false);
                }}
              />
              {isCvvError && (
                <FormErrorMessage>CVV is required.</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={handlePayment}
              isLoading={isLoading}
              loadingText="Processing"
            >
              Pay Now
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
