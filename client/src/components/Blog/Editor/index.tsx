import { Input, Textarea, VStack } from '@chakra-ui/react';
import { useCreateBlog } from '../../context/createBlogContext';

export default function Editor() {
  const { blog, setBlog } = useCreateBlog();

  const handleBlogChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.matches('textarea')) {
      return setBlog((prev) => {
        return { ...prev, content: e.target.value };
      });
    }
    setBlog((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  return (
    <VStack w={['90%', '90%', '90%', '80%']} py="2rem">
      <Input
        type="type"
        placeholder="title"
        size="md"
        value={blog.title}
        onChange={handleBlogChange}
        boxShadow="5px 5px 0px 0px  rgba(10,10,10,0.2)"
        h="3rem"
        fontSize="1.2rem"
        color="#263030"
        fontWeight="700"
        autoFocus
        transition="all ease-in-out 0.5s"
        _focus={{
          outline: '1px solid rgba(20,20,20,0.3)',
          border: 'none',
          boxShadow: 'none'
        }}
      />
      <Textarea
        placeholder="write your story..."
        value={blog.content}
        onChange={handleBlogChange}
        boxShadow="5px 5px 0px 0px  rgba(40,40,40,0.2)"
        mt="1rem"
        fontWeight="600"
        color="#303030"
        minH="20rem"
        resize={'vertical'}
        transition="all ease-in-out 0.5s"
        _focus={{
          outline: '1px solid rgba(20,20,20,0.3)',
          border: 'none',
          boxShadow: 'none'
        }}
      />
    </VStack>
  );
}
