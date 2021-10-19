import styles from "../styles/Home.module.css";
//import Image from "next/Image";
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

import NavBar from "../components/common/Navigation";
export default function Home() {
  return (
    <Container
      h="100vh"
      m="0px"
      p={"7px"}
      maxW={"100vw"}
      bg="#FFFFFF"
      overflow="hidden"
      borderRadius="15px"
    >
      <NavBar />
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
          spacing="10"
          alignItems="center"
          justifyContent={{ xl: "center" }}
          position="relative"
        >
          <Box w={{ base: "full", xl: "406px" }} mt={{ xl: "70px" }}>
            <Box
              position="relative"
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
            >
              <Heading
                fontFamily="Open Sans"
                lineHeight="55px"
                style={{
                  fontWeight: "bold",
                }}
                position="relative"
                textAlign={{ base: "center", md: "center", xl: "left" }}
                fontSize={{ base: "45px", xl: "50px" }}
              >
                Reimagining Innovation{" "}
              </Heading>

              <Box
                height="2vh"
                width="1vw"
                bg="#EAD270"
                opacity={0.8}
                position="relative"
                right="8vw"
                bottom="1vw"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  transform: "rotate(180deg)",
                }}
              />
            </Box>

            <Text
              textTransform="lowercase"
              fontSize={{ base: "20px", xl: "25px" }}
              mt="40px"
              w={{ base: "full", xl: "full" }}
              textAlign={{ base: "center", xl: "left" }}
            >
              CREATE YOUR FUTURE THROUGH DIGITAL TRANSFORMATION &
              ENTERPRENURESHIP
            </Text>

            <Button
              display="flex"
              m={{ base: "auto", md: "auto", xl: "0" }}
              mt={{ base: "30px", md: "30px", xl: "25px" }}
              bg={"linear-gradient(140.92deg, #EAD270 14.94%, #F6E384 85.48%)"}
              w="200px"
              h="50px"
              borderRadius={"20px"}
              color="#1E140C"
            >
              WORK WITH US
            </Button>
          </Box>

          <Box
            height="10vh"
            width="5vw"
            bg="#EAD270"
            opacity={0.8}
            position="absolute"
            bottom="7vh"
            right="3vw"
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              transform: "rotate(180deg)",
            }}
            display={{ base: "none", md: "none", xl: "flex" }}
          />
        </VStack>

        <VStack
          w="full"
          h="full"
          bg="transparent"
          spacing="10"
          alignItems="flex-end"
          position="relative"
          overflow="hidden"
        >
          <Box bg="transparent" position="relative" right="0" objectFit="cover">
            <Image
              src="/images/seedling-stock.svg"
              height="100%"
              width="46vw"
              objectFit="cover"
              right="0"
              alt=""
              display={{ base: "none", md: "none", lg: "none", xl: "flex" }}
            />

            <Box
              display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
              position="relative"
              w="100%"
              h="full"
              mb="200px"
            >
              <Image
                src="/images/mobileHero2.png"
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
                top={{ base: "15vh", md: "15vh" }}
                display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
                alt=""
              />
            </Box>
          </Box>

          <Box
            height={{ sm: "0", base: "130px", md: "0", xl: "34vh" }}
            width={{ sm: "0", base: "130px", md: "0", xl: "18vw" }}
            bg="#EAD270"
            opacity={0.8}
            position="absolute"
            bottom="8vh"
            right="-1"
            transform={{ base: "rotate(-40deg)", xl: "rotate(39deg)" }}
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            }}
          />

          <Box
            height={{ sm: "0", base: "90px", md: "0", xl: "23vh" }}
            width={{ sm: "0", base: "90px", md: "0", xl: "12vw" }}
            bg="#EAD270"
            opacity={0.8}
            position="absolute"
            top={{base:'98px', xl:"-55px"}}
            left={{base:'-10vw',xl:"3vw"}}
            transform={{ base: "rotate(39deg)", xl: "rotate(37deg)" }}
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            }}
          />
        </VStack>
      </Flex>
    </Container>
  );
}
