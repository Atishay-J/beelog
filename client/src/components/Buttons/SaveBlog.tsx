import { CheckIcon } from '@chakra-ui/icons';
import ButtonBase from './ButtonBase';
import { useCreateBlog } from '../context/createBlogContext';
import { createBlog } from '../../api';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { validateBlogInputs } from '../../utils/validateBlogInputs';

export default function SaveBlog() {
  const { blog } = useCreateBlog();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const saveBlog = async () => {
    setIsSubmitting(true);
    const validationResult = validateBlogInputs(blog);

    if (validationResult.status === 'FAILED') {
      toast({
        status: 'error',
        title: 'Error creating blog',
        description: validationResult.msg,
        duration: 9000,
        isClosable: true,
        position: 'top'
      });
      return setIsSubmitting(false);
    }

    const response = await createBlog(blog);

    if (response) {
      setIsSubmitting(false);
      toast({
        status: 'success',
        title: 'Blog published succesfully',
        duration: 9000,
        isClosable: true,
        position: 'top'
      });
    } else {
      toast({
        status: 'error',
        title: 'Error creating blog',
        duration: 9000,
        isClosable: true,
        position: 'top'
      });
    }
    setIsSubmitting(false);
  };

  return (
    <ButtonBase
      callback={saveBlog}
      icon={<CheckIcon />}
      text="Save Blog"
      variant="success"
      isLoading={isSubmitting}
    />
  );
}
