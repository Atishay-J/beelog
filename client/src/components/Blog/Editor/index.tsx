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

  console.log(blog);

  return (
    <VStack w="80%">
      <Input
        type="type"
        placeholder="title"
        size="md"
        value={blog.title}
        onChange={handleBlogChange}
      />
      <Textarea
        placeholder="write your story..."
        value={blog.content}
        onChange={handleBlogChange}
      />
    </VStack>
  );
}
