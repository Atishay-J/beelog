import { VStack } from '@chakra-ui/react';
import Editor from '../components/Blog/Editor';
import Navbar from '../components/Navbar';
import { CreateBlogProvider } from '../components/context/createBlogContext';

export default function CreateBlog() {
  return (
    <CreateBlogProvider>
      <VStack>
        <Navbar variant="SAVE" />
        <Editor />
      </VStack>
    </CreateBlogProvider>
  );
}
