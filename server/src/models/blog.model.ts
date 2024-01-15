import { Schema, model } from 'mongoose';

interface IBlog {
  title: string;
  content: string;
  slug: string;
  coverImg: string;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    coverImg: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export const Blog = model<IBlog>('Blog', BlogSchema);
