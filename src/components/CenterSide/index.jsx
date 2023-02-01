import React from 'react';

import AddPost from './AddPost';
import Post from './Post';

const CenterSide = () => {
  return (
    <div className="relative min-h-[inherit] shrink grow">
      <div className="px-8 min-h-[inherit]">
        <div className="flex justify-center">
          <div className="w-full max-w-[680px] mt-4">
            <AddPost />
            <div className="space-y-4">
              <Post />
              <Post />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterSide;