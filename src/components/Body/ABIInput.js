import React from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Button,
  HStack,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";
import JsonTextArea from "../common/JsonTextArea";

function ABIInput({ abi, setAbi, btnDisabled, decode, bg, importOpenChain }) {
  return (
    <VStack>
      <FormControl>
        <FormLabel>Input ABI</FormLabel>
        <JsonTextArea
          value={abi}
          setValue={setAbi}
          bg={bg}
          placeholder="JSON ABI"
          ariaLabel="json abi"
        />
      </FormControl>
      <HStack spacing={4} style={{ marginTop: "20px" }}>
        <Button
          onClick={decode}
          leftIcon={<UnlockIcon />}
          colorScheme="blue"
          disabled={btnDisabled}
        >
          Decode
        </Button>
        <Button
          onClick={importOpenChain}
          leftIcon={<UnlockIcon />}
          colorScheme="blue"
          disabled={btnDisabled}
        >
          Import OpenChain
        </Button>
      </HStack>
    </VStack>
  );
}

export default ABIInput;
