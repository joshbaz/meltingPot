import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  SimpleGrid,
  GridItem,
  Button,
  Box,
  VisuallyHidden,
} from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";

const ContactForm = ({ errors, touched, submit, Field }) => {
  return (
    <Box as="form" onSubmit={submit} w="full" m="0">
      <SimpleGrid rowGap={2} w="full">
        <GridItem colSpan={1}>
          <FormControl
            id="firstname"
            isInvalid={errors.firstname && touched.firstname}
          >
            <FormLabel>Firstname</FormLabel>

            <Field
              as={Input}
              placeholder="firstname"
              borderColor="#9A6649"
              borderWidth="1px"
              _active={{
                backgroundColor: "#F9F3D9",
              }}
              _focus={{
                backgroundColor: "#F9F3D9",
              }}
              h={"40px"}
              bg="rgba(255, 255, 255, 0.2)"
              color="#000000"
              type="text"
              name="firstname"
            />

            <FormErrorMessage>
              {errors.name && touched.name && errors.name}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl
            id="lastname"
            isInvalid={errors.lastname && touched.lastname}
          >
            <FormLabel>Lastname</FormLabel>

            <Field
              as={Input}
              bg="rgba(255, 255, 255, 0.2)"
              color="#000000"
              borderWidth="1px"
              borderColor="#9A6649"
              placeholder="lastname"
              h={"40px"}
              type="text"
              name="lastname"
            />
            <FormErrorMessage>
              {errors.lastname && touched.lastname && errors.lastname}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl id="email" isInvalid={errors.email && touched.email}>
            <FormLabel>Email</FormLabel>

            <Field
              as={Input}
              bg="rgba(255, 255, 255, 0.2)"
              color="#000000"
              borderWidth="1px"
              borderColor="#9A6649"
              placeholder="Email"
              h={"40px"}
              type="email"
              name="email"
            />
            <FormErrorMessage>
              {errors.email && touched.email && errors.email}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl id="number" isInvalid={errors.number && touched.number}>
            <FormLabel>Phone</FormLabel>

            <Field
              as={Input}
              bg="rgba(255, 255, 255, 0.2)"
              color="#000000"
              borderWidth="1px"
              borderColor="#9A6649"
              placeholder="Phone Number"
              h={"40px"}
              type="text"
              name="number"
            />
            <FormErrorMessage>
              {errors.number && touched.number && errors.number}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <Box align="right" mt="40px" mb="60px">
            <Button
              rightIcon={<BiRightArrowAlt />}
              bg="#F2E4A9"
              color="#000000"
              size="lg"
              width={["full", "full", "full", "full"]}
              align="center"
              fontWeight="500"
              type="submit"
            >
              Submit
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
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default ContactForm;
