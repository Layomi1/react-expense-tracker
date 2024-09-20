import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary/Summary";
import ExpenseView from "../expense-view/ExpenseView";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    allTransactions,
    
    setTotalIncome,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });
    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
          fontSize={"xx-large"}
          fontWeight={"bold"}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button
            onClick={onOpen}
            bg={"blue.300"}
            ml={"4"}
            px={"3"}
            py={"2"}
            borderRadius={"8"}
          >
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
        bg={"gray.50"}
      >
        <ExpenseView 
        data={allTransactions.filter(item=>item.type ==='income')}
        type={'income'} />
        <ExpenseView data={allTransactions.filter(item=>item.type ==='expense')}
        type={'expense'} />
        
      </Flex>
    </Flex>
  );
};

export default Main;
