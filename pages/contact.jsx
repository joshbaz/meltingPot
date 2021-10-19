import styles from "../styles/Home.module.css";
//import Image from "next/Image";
import ContactSection from "../components/Contact";
import {
  Container,
  Flex,
  VStack,
  Box,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Container
      h={{ base: "auto", xl: "100vh" }}
      m="0px"
      p={"7px"}
      maxW={"100vw"}
      bg="#FFFFFF"
      overflow="hidden"
      borderRadius="15px"
    >
      <Flex
        h="100%"
        bg="#FFFFFF"
        my="auto"
        overflow="hidden"
        borderRadius="15px"
        style={{ width: "100%" }}
        direction={{
          base: "column-reverse",
          md: "column-reverse",
          lg: "column-reverse",
          xl: "row",
        }}
      >
        <VStack
          w="full"
          h="full"
          bg="transparent"
          spacing="0"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <ContactSection />
        </VStack>

        <VStack
          w="full"
          h={{ base: "270px", xl: "full" }}
          
          spacing="0"
          alignItems="flex-end"
          position="relative"
          overflow="hidden"
        >
          <Box
            h={{ base: "270px", xl: "full" }}
            position="relative"
            right="0"
            objectFit="cover"
            p="0"
            m="0"
            overflow="hidden"
          >
            <Image
              src="/images/Web-contact.svg"
              height="100vh"
              width="50vw"
              objectFit="cover"
              right="0"
              alt=""
              display={{ base: "none", md: "none", lg: "none", xl: "flex" }}
            />

            <Box
              display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
              position="relative"
              m="0"
            >
              <Image
                src="/images/contact.png"
                height={{ base: "50vh", md: "50vh", lg: "50vh" }}
                width="100vw"
                objectFit="cover"
                position="relative"
                right="0"
                top={{ base: "-100px", md: "-100px" }}
                display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
                alt=""
              />
            </Box>

            <Box
              display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
              justifyContent="center"
              w="100%"
              h="100%"
              bottom="0"
              zIndex={"10"}
            >
              <Image
                src="/images/mobileLogo.svg"
                height={{ base: "80px", md: "80px", lg: "80px" }}
                width="90px"
                objectFit="cover"
                position="absolute"
                top={{ base: "29vh", md: "15vh" }}
                display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
                alt=""
              />
            </Box>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
}
