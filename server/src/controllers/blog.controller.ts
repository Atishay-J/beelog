import { Request, Response } from 'express';
import { Blog } from '../models/blog.model';
import { generateSlug } from '../utils';

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
