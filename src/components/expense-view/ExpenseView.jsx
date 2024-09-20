import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const ExpenseView = ({ type, data }) => {
  return (
    <Box
      flex={1}
      w={"full"}
      bg={"white"}
      mr={4}
      ml={10}
      pt={5}
      pb={4}
      border={"1px solid"}
      borderRadius={10}
      borderColor={"gray.100"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={"gray.700"} fontWeight={'bold'} textTransform={'uppercase'}>
          {type === "income" ? "income" : "expense"}
        </Heading>
      </Flex>
      {data.map((item) => (
        <>
          <Flex bg={type=== 'expense'? 'red.50' : 'blue.50'} mt={4} justifyContent={'space-between'} alignItems={'center'} border={'1px solid'} borderColor={type=== 'expense'? 'red.100' : 'blue.100'} p={4} borderRadius={8}>
            <Flex alignItems={'center'} justifyContent={'center'}>
              <Text ml={3} fontWeight={'bold'} color={'gray.600'}>{item.description}</Text>

            </Flex>
            <Text>
              ${item.amount}
            </Text>
          </Flex>
        </>
      ))}
    </Box>
  );
};

export default ExpenseView;
