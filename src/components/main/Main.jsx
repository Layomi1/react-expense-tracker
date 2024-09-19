import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary/Summary";
import ExpenseView from "../expense-view/ExpenseView";

const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex aligniTtems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
          fontSize={"xx-large"}
          fontWeight={"bold"}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} ml={"4"} px={"3"} py={"2"} borderRadius={"8"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary isOpen={isOpen} onClose={onClose} />
      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
        bg={"gray.50"}
      >
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  );
};

export default Main;
