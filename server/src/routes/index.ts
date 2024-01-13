import { blog } from './blog.route';
import { Router } from 'express';

const routes = Router();

routes.use('/api/blog', blog);

export default routes;
