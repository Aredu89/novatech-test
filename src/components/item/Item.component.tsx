import React from 'react';

import { ItemProps } from './Item.types';
import { ItemContainer } from './Item.styles';

const Item = ({
  title,
  body,
}: ItemProps) => {
  return (
    <ItemContainer>
      <div>{title}</div>
      <div>{body}</div>
      <div>actions</div>
    </ItemContainer>
  )
};

export default Item;
