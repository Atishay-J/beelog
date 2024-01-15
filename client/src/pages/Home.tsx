import { VStack } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import BlogSection from '../components/BlogSection';

export default function Home() {
  return (
    <VStack>
      <Navbar variant="CREATE" />
      <BlogSection />
    </VStack>
  );
}
