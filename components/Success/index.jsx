import React from "react";
import {
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  useToast,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";

const SuccessComponent = () => {
  return (
    <Container
      maxWidth="full"
      w="full"
      p={0}
      m="0"
      mr={0}
      ml={0}
      bg="#ffffff"
      id="contactMe"
    >
      <Flex h={{ base: "full", xl: "100vh" }} py={0} w="full">
        <VStack
          w="full"
          h="full"
          px={{ base: 2, md: 28, xl: 20 }}
          py={{ base: 3, xl: 30 }}
          spacing={{ base: 2, xl: 10 }}
          m="auto"
          alignItems="flex-start"
          justifyContent={{ base: "center", xl: "space-between" }}
        >
          <Box
            bg="transparent"
            position="relative"
            alignItems="center"
            justifyContent="center"
            objectFit="contain"
            width="100%"
            display={{ base: "none", md: "none", lg: "none", xl: "flex" }}
            m="0"
            p="0"
          >
            <Image
              src="/images/logo-portraitContact.svg"
              className={""}
              height={"150px"}
              width={"150px"}
              alt=""
            />
          </Box>
          <VStack spacing={4} alignItems="center" w="100%">
            <Box
              bg="transparent"
              position="relative"
              alignItems="center"
              justifyContent="center"
              objectFit="contain"
              width="100%"
              display="flex"
              m="0"
              p="0"
            >
              <Image
                src="/images/successCheck.svg"
                className={""}
                height={"50px"}
                width={"50px"}
                alt=""
              />
            </Box>
            <Heading color="#000000" size="md" textAlign={{ base: "center" }}>
              Hey! Thanks, we will chat with you soon.
            </Heading>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="#000000" textAlign={{ base: "center" }}>
                We have sent you an email confirmation on
              </Text>
              <Text color="#000000" textAlign={{ base: "center" }}>
                joshuakimbareeba@gmail.com
              </Text>
            </Box>
          </VStack>

          <VStack spacing={4} alignItems="center" w="100%">
            <Box align="right" mt="40px" mb="60px" w="70%">
              <Button
                bg="#F2E4A9"
                color="black"
                size="lg"
                width={["full", "full", "full", "full"]}
                align="center"
                fontWeight="500"
                type="submit"
              >
                Back to website
              </Button>

              <Box w="100%" display="flex" justifyContent="center" mt="20px">
                <Box w="12px" h="13px" borderRadius="20px" bg="#5F5F5F" />
                <Box
                  w="12px"
                  h="13px"
                  borderRadius="20px"
                  bg="#BABABA"
                  ml="10px"
                />
              </Box>
            </Box>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default SuccessComponent;
