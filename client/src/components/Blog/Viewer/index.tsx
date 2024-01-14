import {
  Heading,
  Skeleton,
  SkeletonText,
  Text,
  VStack
} from '@chakra-ui/react';

interface BlogViewer {
  isLoading: boolean;
  blogData: { title: string; content: string } | undefined;
}

export default function BlogViewer({ isLoading, blogData }: BlogViewer) {
  return (
    <VStack
      w="100%"
      maxW="1920px"
      align="flex-start"
      padding={['0.7rem 1rem', '0.7rem 3rem']}
      spacing="2rem"
    >
      <Skeleton isLoaded={!isLoading} w="100%" h="2.3rem">
        <Heading as="h1" fontSize={['1.4rem', '2.5rem']} color="#222725">
          {blogData?.title}
        </Heading>
      </Skeleton>
      <SkeletonText
        isLoaded={!isLoading}
        w="100%"
        noOfLines={6}
        skeletonHeight="1.3rem"
        mt="2rem"
      />{' '}
      <Text
        as="p"
        fontSize={['1rem', '1.15rem']}
        color="rgba(40,40,80)"
        fontWeight="medium"
        letterSpacing="1.3px"
        w="100%"
        textAlign="justify"
        whiteSpace="pre-wrap"
        dangerouslySetInnerHTML={{ __html: blogData?.content ?? '' }}
      />
    </VStack>
  );
}
