export enum POSTS_ACTION_TYPES {
  'SET_IS_LOADING' = 'SET_IS_LOADING',
  'SET_ERROR' = 'SET_ERROR',
  'SET_POSTS' = 'SET_POSTS',
};

export interface Posts {
  id: number;
  body: string;
  userId: number;
  title: string;
}

export interface PostsState {
  isLoading: boolean;
  error: string | undefined;
  posts: Array<Posts>,
  removePost: (id: number) => void;
}

export interface PostsActions {
  type: string;
  payload: any;
}
