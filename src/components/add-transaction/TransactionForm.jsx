import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Input
} from "@chakra-ui/react";
import { useContext } from "react";
import  { GlobalContext } from "../../context/GlobalContext";

const TransactionForm = ({ onClose, isOpen}) => {
  const {value, setValue,formData, setFormData,handleFormSubmit} = useContext(GlobalContext);

  function handleFormChange(event){
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value
    })
  }
   
  function handleSubmit(e){
    e.preventDefault();
    handleFormSubmit(formData)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <form onSubmit={handleSubmit}>
        <ModalOverlay  />
        <ModalContent >
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction Amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt={5} value={value} onChange={setValue}>
              <Radio name="type" colorScheme="blue" 
              checked={formData.type === 'income'}
              value="income" onChange={handleFormChange}>
                Income
              </Radio>
              <Radio name="type" colorScheme="red" value="expense"
              checked={formData.type === 'expense'} onChange={handleFormChange}>
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button mr={4} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose}
            type="submit">Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default TransactionForm;
