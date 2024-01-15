import { nanoid } from 'nanoid';
import slug from 'slug';

export const generateSlug = (text: string, includeId: boolean = false) => {
  if (includeId) {
    const id = nanoid(3);
    return slug(text) + '-' + id;
  }
  return slug(text);
};
