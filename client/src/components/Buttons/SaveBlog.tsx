import { CheckIcon } from '@chakra-ui/icons';
import ButtonBase from './ButtonBase';
import { useCreateBlog } from '../context/createBlogContext';

export default function SaveBlog() {
  const { blog } = useCreateBlog();
  const saveBlog = () => {
    console.log(blog);
  };
  return (
    <ButtonBase
      callback={saveBlog}
      icon={<CheckIcon />}
      text="Save Blog"
      variant="success"
    />
  );
}
