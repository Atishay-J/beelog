import { Request, Response } from 'express';
import { Blog } from '../models/blog.model';
import { generateSlug } from '../utils';
import { getCache, setCache } from '../cache';

export const createBlog = async (request: Request, response: Response) => {
  try {
    const { body } = request;
    const { title, content } = body;
    const slug = generateSlug(title, true);

    await new Blog({ title, content, slug })
      .save()
      .then((res) => {
        console.log('Saved blog', res);
        response.send(201);
      })
      .catch((err) => {
        console.log('Error while saving blog', err);
        response.send(500);
      });
  } catch (error) {
    console.log('Error', error);
    response.send(500);
  }
};

export const getBlogs = async (request: Request, response: Response) => {
  try {
    const page = Number(request.query.page) || 1;
    const limit = Number(request.query.limit) || 10;

    const skip = (page - 1) * limit;
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    const totalDocuments = await Blog.countDocuments();
    const hasMore = totalDocuments > skip + blogs.length;
    response.send({ blogs, hasMore });
  } catch (err) {
    console.log('Error while fetching blogs', err);
    response.send(500);
  }
};

export const getBlogBySlug = async (request: Request, response: Response) => {
  try {
    const slug = request.params.slug;
    const cachedBlog = await getCache(slug);
    if (cachedBlog) {
      console.log('Sending Cached data');
      return response.send(JSON.parse(cachedBlog));
    }
    const blog = await Blog.find({ slug });
    await setCache(slug, JSON.stringify(blog));
    response.send(blog);
  } catch (err) {
    console.log('Error while fetching blog by slug');
    response.send(500);
  }
};
