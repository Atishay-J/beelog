import { Router } from 'express';
import {
  createBlog,
  getBlogBySlug,
  getBlogs
} from '../controllers/blog.controller';
import { body } from 'express-validator';

export const blog = Router();

blog.post(
  '/create-blog',
  body('title').notEmpty(),
  body('content').notEmpty().escape(),
  createBlog
);

blog.get('/blogs', getBlogs);

blog.get('/blog/:slug', getBlogBySlug);
