import React, { useContext } from 'react';

import { PostsContext } from '../../context/posts/posts.context';
import Spinner from '../spinner/Spinner.component';
import ErrorAlert from '../alert/Alert.component';
import { ListContainer } from './List.styles';

const List = () => {
  const { isLoading, posts, error } = useContext(PostsContext);
  console.log('posts context:: ', { isLoading, posts, error });

  if(error) {
    return(
      <ErrorAlert message='Error loading posts' />
    )
  };

  return (
    <ListContainer>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <div>List</div>
        )
      }
    </ListContainer>
  )
};

export default List;
