import { Router } from 'express';
import { createBlog } from '../controllers/blog.controller';
import { body } from 'express-validator';

export const blog = Router();

blog.post(
  '/create-blog',
  body('title').notEmpty(),
  body('content').notEmpty().escape(),
  createBlog
);
