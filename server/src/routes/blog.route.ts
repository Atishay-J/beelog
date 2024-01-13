import { Router } from 'express';
import { createBlog } from '../controllers/blog.controller';

export const blog = Router();

blog.get('/create-blog', createBlog);
