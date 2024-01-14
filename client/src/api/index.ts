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
