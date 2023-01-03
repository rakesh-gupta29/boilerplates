import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

export default function FormInput() {
  return (
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type={type} />
      <FormHelperText></FormHelperText>
    </FormControl>
  );
}
