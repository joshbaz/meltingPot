import React from "react";
import Image from "next/image";
import axios from "axios";
import {
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  useToast,
  Box,
} from "@chakra-ui/react";
import Router from "next/router";

import { Formik, Field } from "formik";
import * as yup from "yup";
import ContactForm from "../Forms/contact";

const validation = yup.object().shape({
  firstname: yup
    .string()
    .min(3, "Must be more than 3 characters")
    .max(15, "Must be lass than 15 characters")
    .required("First name is required"),
  lastname: yup
    .string()
    .min(3, "Must be more than 3 characters")
    .max(15, "Must be lass than 15 characters")
    .required("Last name is required"),

  number: yup
    .string()
    .min(10, "Must be more than 9 digits")
    .required("Number is required"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("email is required"),
});

const ContactMe = () => {
  const toast = useToast();

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
      justifyContent="center"
    >
      <Flex h="100vh" py={0}>
        <VStack
          w="full"
          h="full"
          px={{ base: 7, md: 28, xl: 20 }}
          py="0"
          spacing={2}
          m="auto"
          alignItems="flex-start"
          justifyContent="center"
        >
          <VStack spacing={0} alignItems="flex-start" w="100%">
            <Box
              bg="transparent"
              position="relative"
              alignItems="center"
              justifyContent="center"
              objectFit="contain"
              width="100%"
              m="0"
              p="0"
              display={{ base: "none", md: "none", lg: "none", xl: "flex" }}
            >
              <Image
                src="/images/logo-portraitContact.svg"
                className={""}
                height={"150px"}
                width={"150px"}
                alt="contact"
                display={{ base: "none", md: "none", lg: "none", xl: "flex" }}
              />
            </Box>
            <Heading color="#000000" size="lg">
              Book a call with our team
            </Heading>
            <Text color="#000000">
              Please enter your name and contact information
            </Text>
          </VStack>

          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              number: "",
              email: "",
              platform: "Melting-pot",
            }}
            validationSchema={validation}
            onSubmit={(values, helpers) => {
              axios
                .post(
                  "https://email-pot-jk.herokuapp.com/send/mailnormal",
                  values
                )
                .then(() => {
                  toast({
                    position: "top",
                    title: "Message sent successfully",
                    status: "success",
                    duration: 10000,
                    isClosable: true,
                  });

                  helpers.resetForm();
                  helpers.setSubmitting(false);
                  Router.push("/success");
                })
                .catch((error) => {
                  let errorArray = [];
                  errorArray.push(error);

                  let message;
                  if (errorArray.length !== 0 && errorArray[0].response) {
                    message = errorArray[0].response.data;
                  } else if (
                    errorArray.length !== 0 &&
                    !errorArray[0].response
                  ) {
                    message = errorArray[0].message;
                  }
                  toast({
                    position: "top",
                    title: message,
                    status: "error",
                    duration: 10000,
                    isClosable: true,
                  });

                  helpers.resetForm();
                  helpers.setSubmitting(false);
                });
            }}
          >
            {({ errors, handleSubmit, touched }) => (
              <>
                <ContactForm
                  errors={errors}
                  touched={touched}
                  submit={handleSubmit}
                  Field={Field}
                />
              </>
            )}
          </Formik>
        </VStack>
      </Flex>
    </Container>
  );
};

export default ContactMe;
