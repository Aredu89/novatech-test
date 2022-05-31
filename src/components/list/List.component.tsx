import React, { useContext } from 'react';

import { PostsContext } from '../../context/posts/posts.context';
import {
  Spinner,
  ErrorAlert,
  Item,
} from '..';
import { ListContainer, TitlesContainer, Title } from './List.styles';

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
          posts.length > 0 ? (
            <div>
              <TitlesContainer>
                <Title>Title</Title>
                <Title>Content</Title>
                <Title>Actions</Title>
              </TitlesContainer>
              {posts.map(({ title, body, id }) => (
                <Item
                  key={id}
                  postId={id}
                  title={title}
                  body={body}
                />
              ))}
            </div>
          ) : (
            <div>No results</div>
          )
        )
      }
    </ListContainer>
  )
};

export default List;
