import React from 'react';

import AddPost from './AddPost';
import Post from './Post';

const CenterSide = () => {
  return (
    <div className="relative mt-4 w-1/2">
      <AddPost />
      <div className="space-y-4">
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default CenterSide;