import { Heading, Text, VStack } from '@chakra-ui/react';

export default function BlogViewer({ isLoading, blogData }) {
  return (
    <VStack
      w="100%"
      maxW="1920px"
      align="flex-start"
      padding={['0.7rem 1rem', '0.7rem 3rem']}
      spacing="2rem"
    >
      <Heading as="h1" fontSize={['1.4rem', '2.5rem']} color="#222725">
        {blogData?.title}
      </Heading>
      <Text
        as="p"
        fontSize={['1rem', '1.15rem']}
        color="rgba(40,40,80)"
        fontWeight="medium"
        letterSpacing="1.3px"
        w="100%"
        textAlign="justify"
      >
        {blogData?.content}
      </Text>
    </VStack>
  );
}
