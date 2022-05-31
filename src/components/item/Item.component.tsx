import React, { useContext } from 'react';
import Swal from 'sweetalert2';

import { PostsContext } from '../../context/posts/posts.context';

import { ItemProps } from './Item.types';
import {
  ActionsContainer,
  ContentContainer,
  ItemContainer,
  TitleContainer
} from './Item.styles';
import { TextButton } from '..';

const Item = ({
  title,
  body,
  postId,
}: ItemProps) => {
  const { removePost } = useContext(PostsContext);

  const handleRemove = () => {
    Swal.fire({
      title: 'Are you sure you want to remove the post?',
      showCancelButton: true,
      confirmButtonText: 'Remove',
    }).then((result) => {
      if (result.isConfirmed) {
        removePost(postId);
        Swal.fire('Removed!', '', 'success');
      }
    })
  }
  return (
    <ItemContainer>
      <TitleContainer>{title}</TitleContainer>
      <ContentContainer>{body}</ContentContainer>
      <ActionsContainer>
        <TextButton
          text='remove'
          handleClick={handleRemove}
        />
      </ActionsContainer>
    </ItemContainer>
  )
};

export default Item;
