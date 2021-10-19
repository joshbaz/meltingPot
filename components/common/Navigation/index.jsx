import React from "react";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Button,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function Navigaion() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"fixed"} zIndex="4" w="full">
      <Flex
        bg={"transparent"}
        h={"70px"}
        w="100vw"
        justify={"space-between"}
        align={"center"}
        display={{ base: "none", md: "none", lg: "none", xl: "flex" }}
      >
        <Box ml="20px">
          <Image
            priority
            src="/images/logo.svg"
            className={""}
            height={"156.16px"}
            width={"156.16px"}
            alt="logo"
          />
        </Box>

        <Stack
          direction={"row"}
          spacing={4}
          justify={"flex-end"}
          mr="20px"
          align={"center"}
        >
          <Box>
            <Link
              color="#ffffff"
              style={{
                fontFamily: "Noto Sans",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "15px",
                lineHeight: "57px",
                display: "flex",
                alignItems: "center",
                textTransform: "uppercase",
              }}
            >
              Home
            </Link>
          </Box>
          <Box>
            <Link
              color="#ffffff"
              style={{
                fontFamily: "Noto Sans",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "15px",
                lineHeight: "57px",
                display: "flex",
                alignItems: "center",
                textTransform: "uppercase",
              }}
            >
              Why Us?
            </Link>
          </Box>

          <Button
            w="200px"
            h="50px"
            bg={"linear-gradient(140.92deg, #EAD270 14.94%, #F6E384 85.48%)"}
            borderRadius={"20px"}
          >
            Innovate Now
          </Button>
        </Stack>
      </Flex>

      {/**
       hamburger menu
      */}
      <Flex
        flex={{ base: 1, md: 1 }}
        display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
        w="full"
        alignItems="center"
        justifyItems="center"
        justifyContent="flex-end"
      >
        <IconButton
          mr="20px"
          onClick={onToggle}
          icon={
            isOpen ? (
              <CloseIcon w={3} h={3} />
            ) : (
              <BiMenuAltRight style={{ fontSize: "2rem", color: "#ffffff" }} />
            )
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
      </Flex>
    </Box>
  );
}
