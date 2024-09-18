import { Box, Flex, Heading, Text } from "@chakra-ui/react";
// import { base } from "framer-motion/client";
import React from "react";

const Summary = () => {
  return (
    <Box
      p={"0"}
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      background={"white"}
      borderRadius={"10"}
      display={"flex"}
    >
      <Flex
        w={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          flex={1}
          w={"full"}
          justifyContent={"center"}
          alignItems={"space-evenly"}
          ml={"-20"}
          mr={2}
        >
          <Heading size={"md"} mr={4} color={"gray.600"}>
            Balance is 100
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w={"full"}
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"grey.700"}>$ 100</Heading>
              <Text color={"grey.600"}>Total Income</Text>
            </Flex>
            <Flex flexDirection={"column"}>
              <Heading color={"grey.700"}>$ 100</Heading>
              <Text color={"grey.600"}>Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default Summary;
