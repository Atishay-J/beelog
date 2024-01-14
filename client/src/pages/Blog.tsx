import { VStack } from '@chakra-ui/react';
import Editor from '../components/Blog/Editor';
import Navbar from '../components/Navbar';

export default function Blog() {
  return (
    <VStack>
      <Navbar variant="SAVE" />
      <Editor />
    </VStack>
  );
}
