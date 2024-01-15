import { VStack } from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BlogViewer from '../components/Blog/Viewer';
import { useEffect, useState } from 'react';
import { fetchBlogBySlug } from '../api';

export default function Blog() {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getBlogData = async () => {
    try {
      if (slug) {
        const [data] = await fetchBlogBySlug(slug);
        setBlogData(data);
        setIsLoading(false);
      }
    } catch (err) {
      console.log('Error fetching blog');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <VStack>
      <Navbar variant="CREATE" />
      <BlogViewer blogData={blogData} isLoading={isLoading} />
    </VStack>
  );
}
