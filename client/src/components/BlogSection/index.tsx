import { SimpleGrid } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchBlogs } from '../../api';
import BlogCard from './BlogCard';
import { BlogResponseType } from '../../types';

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogResponseType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [blogPageNumber, setBlogPageNumber] = useState(1);
  const isFirstRender = useRef(true);

  const updateBlogData = useCallback(async (pageNumber: number) => {
    setIsLoading(true);
    const blogData = await fetchBlogs(pageNumber);
    setIsLoading(false);
    setBlogs((prev) => [...prev, ...blogData]);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setBlogPageNumber((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && isFirstRender.current) {
      updateBlogData(blogPageNumber);
      isFirstRender.current = false;
    }
  }, [updateBlogData, blogPageNumber, isLoading]);

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
    </SimpleGrid>
  );
}
