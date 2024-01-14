import { Request, Response } from 'express';

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    console.log(body);
  } catch (error) {}
};
