import { SimpleGrid } from '@chakra-ui/react';
import BlogCard from './BlogCard';
import { useBlogFeed } from '../../hooks/useBlogFeed';
import SkeletonScreen from './SkeletonScreen';

export default function BlogSection() {
  const { blogs, isLoading } = useBlogFeed();
  return (
    <SimpleGrid
      as="section"
      columns={[1, 2, 3]}
      w="100%"
      spacing="2rem"
      padding={['1rem  0.4rem', '2rem']}
    >
      {blogs?.map((blog) => (
        <BlogCard
          key={blog.slug}
          title={blog.title}
          content={blog.content}
          slug={blog.slug}
        />
      ))}
      {isLoading && <SkeletonScreen />}
    </SimpleGrid>
  );
}
