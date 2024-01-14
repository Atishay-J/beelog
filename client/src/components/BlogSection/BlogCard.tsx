import { Heading, Text, VStack } from '@chakra-ui/react';
import { BlogResponseType } from '../../types';
import { useNavigate } from 'react-router-dom';

export default function BlogCard({ title, content, slug }: BlogResponseType) {
  const navigate = useNavigate();
  const navigateToBlog = () => {
    navigate('/' + slug);
  };
  return (
    <VStack
      onClick={navigateToBlog}
      cursor="pointer"
      padding="1rem"
      boxShadow="0px 0px 10px 1px rgba(240,240,240,0.7)"
      borderRadius="10px"
      textAlign="left"
      align="flex-start"
      transition="all ease-in-out 0.34s"
      _hover={{
        boxShadow: '8px  8px  0px 0px rgba(150,150,150,1)',
        border: '1px solid #E4E6C3'
      }}
    >
      <Heading as="h2" fontSize="1.5rem">
        {title}
      </Heading>
      <Text as="p" noOfLines={2}>
        {content}
      </Text>
    </VStack>
  );
}
