import React from 'react';

import Header from '../../components/header/Header.component';
import List from '../../components/list/List.component';

const PostsList = () => {
  return (
    <div>
      <Header title='List of posts' />
      <List />
    </div>
  )
};

export default PostsList;
