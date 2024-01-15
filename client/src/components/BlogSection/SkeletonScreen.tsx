import { SkeletonText, VStack } from '@chakra-ui/react';

const SkeletonCard = () => {
  return (
    <VStack
      padding="1rem"
      boxShadow="0px 0px 10px 1px rgba(240,240,240,0.7)"
      borderRadius="10px"
      textAlign="left"
      align="flex-start"
      w="100%"
    >
      <SkeletonText skeletonHeight="1.1rem" noOfLines={1} w="80%" />
      <SkeletonText
        skeletonHeight="2"
        mt="4"
        noOfLines={2}
        w="80%"
        borderRadius="8px"
      />
    </VStack>
  );
};

export default function SkeletonScreen() {
  return Array(6)
    .fill('_')
    .map(() => <SkeletonCard />);
}
