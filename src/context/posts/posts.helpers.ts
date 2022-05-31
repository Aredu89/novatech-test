import { Posts } from './posts.types';

export const removePostFilter = (posts: Array<Posts>, id: number) => {
  return posts.filter(post => post.id !== id);
};
