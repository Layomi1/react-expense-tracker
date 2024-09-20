import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import TransactionForm from "../add-transaction/TransactionForm";
import ChartSummary from "../chart/Chart";

const Summary = ({ onClose, isOpen, totalIncome, totalExpense }) => {
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
          flexDirection={"column"}
          w={"full"}
          justifyContent={"center"}
          alignItems={"space-evenly"}
          ml={"-20"}
          mr={2}
        >
          <Heading
            size={"md"}
            mr={4}
            color={"gray.600"}
            fontWeight={"bold"}
            mb={2}
          >
            Balance is ${totalIncome - totalExpense}
          </Heading>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            bg="gray.50"
            w={"full"}
            h="auto"
            border="1px solid"
            borderColor={"gray.100"}
            gap={"30px"}
            p={3}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"grey.700"} fontWeight={"bold"}>
                ${totalIncome}
              </Heading>
              <Text color={"grey.600"} fontSize={"small"}>
                Total Income
              </Text>
            </Flex>

            <Flex flexDirection={"column"}>
              <Heading color={"grey.700"} fontWeight={"bold"}>
                $ {totalExpense}
              </Heading>
              <Text color={"grey.600"} fontSize={"small"}>
                Total Expense
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={1}
          mt={10}
          ml={-90}
          mr={5}
          width={"300px"}
          height={"300px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading>
            <ChartSummary expense={totalExpense} income={totalIncome} />
          </Heading>
        </Box>
      </Flex>
      <TransactionForm onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default Summary;
