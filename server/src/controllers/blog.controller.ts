import { Request, Response } from 'express';

export const createBlog = async (req: Request, res: Response) => {
  console.log('created');
  res.send('Hello Blog');
};
