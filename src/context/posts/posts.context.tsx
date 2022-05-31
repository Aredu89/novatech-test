import React, {
  createContext,
  useEffect,
  useReducer,
  Reducer,
} from 'react';

import { createAction } from '../../utils/reducer/reducer.utils';
import {
  POSTS_ACTION_TYPES,
  PostsState,
  PostsActions,
} from './posts.types';
import { removePostFilter } from './posts.helpers';

export const PostsContext = createContext<PostsState>({
  isLoading: false,
  error: undefined,
  posts: [],
  removePost: (id: number) => null,
});

const postsReducer: Reducer<PostsState, PostsActions> = (state: PostsState, action: PostsActions) => {
  const { type, payload } = action;

  switch(type) {
    case POSTS_ACTION_TYPES.SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    case POSTS_ACTION_TYPES.SET_POSTS:
      return {
        ...state,
        posts: payload,
      }
    case POSTS_ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      throw new Error(`Unhandled type ${type} in postsReducer`);
  }
};

const INITIAL_STATE = {
  isLoading: false,
  error: undefined,
  posts: [],
  removePost: () => null,
};

export const PostsProvider = ({ children }: { children: JSX.Element }) => {
  const [{
    isLoading,
    error,
    posts,
  }, dispatch] = useReducer(postsReducer, INITIAL_STATE);

  const removePost = (id: number) => {
    dispatch(createAction(POSTS_ACTION_TYPES.SET_POSTS, removePostFilter(posts, id)))
  };

  useEffect(() => {
    const getPosts = () => {
      dispatch(createAction(POSTS_ACTION_TYPES.SET_IS_LOADING, true));
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
          dispatch(createAction(POSTS_ACTION_TYPES.SET_IS_LOADING, false))
          dispatch(createAction(POSTS_ACTION_TYPES.SET_POSTS, data))
        })
        .catch(error => {
          dispatch(createAction(POSTS_ACTION_TYPES.SET_ERROR, error.message))
          dispatch(createAction(POSTS_ACTION_TYPES.SET_IS_LOADING, false))
        })
    };
    getPosts();
  }, []);

  const value = {
    isLoading,
    error,
    posts,
    removePost,
  };
  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};
