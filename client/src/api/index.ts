import axios from 'axios';

interface CreateBlogPayload {
  title: string;
  content: string;
  coverUrl?: string;
}

const BASE_URL = import.meta.env.DEV
  ? 'http://localhost:8000'
  : import.meta.env.VITE_SERVER_URL;

const BlogClient = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: {
    Accept: 'application/json'
  }
});

export const createBlog = async (payload: CreateBlogPayload) => {
  console.log({ BASE_URL });
  try {
    await BlogClient.post('/api/create-blog', payload);
    return true;
  } catch (err) {
    console.log('Error while creating blog', err);
    return false;
  }
};

export const fetchBlogs = async (page: number = 1, limit: number = 15) => {
  try {
    const response = await BlogClient.get(
      `/api/blogs?page=${page}&limit=${limit}`
    );
    const data = response.data;
    return data;
  } catch (err) {
    console.log('Error while fetching blogs', err);
  }
};

export const fetchBlogBySlug = async (slug: string) => {
  try {
    const response = await BlogClient.get(`/api/blog/${slug}`);
    const data = response.data;
    return data;
  } catch (err) {
    console.log('Error while fetching blog');
  }
};
