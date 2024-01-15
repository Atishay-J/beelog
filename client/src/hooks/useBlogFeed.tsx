import { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from '../utils';
import { BlogResponseType } from '../types';
import { fetchBlogs } from '../api';

export const useBlogFeed = () => {
  const [blogs, setBlogs] = useState<BlogResponseType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [blogPageNumber, setBlogPageNumber] = useState(1);
  const isFirstRender = useRef(true);
  const [hasMoreData, setHasMoreData] = useState(true);

  const updateBlogData = useCallback(async (pageNumber: number) => {
    setIsLoading(true);
    const blogData = await fetchBlogs(pageNumber);
    const blogs = blogData?.blogs;
    setHasMoreData(blogData?.hasMore);
    setIsLoading(false);
    setBlogs((prev) => [...prev, ...blogs]);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.scrollHeight
    ) {
      setBlogPageNumber((prev) => prev + 1);
    }
  };
  const debouncedHandleScroll = debounce(handleScroll, 80);

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll);
    if (!hasMoreData) {
      window.removeEventListener('scroll', debouncedHandleScroll);
    }
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [isLoading, hasMoreData]);

  useEffect(() => {
    if (!isLoading && isFirstRender.current) {
      updateBlogData(blogPageNumber);
      isFirstRender.current = false;
    }
  }, [updateBlogData, blogPageNumber, isLoading]);

  useEffect(() => {
    if (blogPageNumber) {
      updateBlogData(blogPageNumber);
    }
  }, [blogPageNumber]);

  return { blogs, isLoading };
};
