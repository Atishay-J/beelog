import { Input, Textarea, VStack } from '@chakra-ui/react';

export default function Editor() {
  return (
    <VStack w="80%">
      <Input type="type" placeholder="title" size="md" />
      <Textarea placeholder="write your story..." />
    </VStack>
  );
}
