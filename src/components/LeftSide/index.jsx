import React from 'react';

import Menu from './Menu';
import Profile from './Profile';

const LeftSide = () => {
  return (
    
    <div className="sticky top-[var(--header-height)] min-w-[280px] max-w-[360px] min-h-[inherit] shrink-[9999] w-full">
      <h2 className="sr-only">Меню Facebook</h2>
      <div className="mt-4">
        <Profile />
        <Menu />
      </div>
    </div>
  );
};

export default LeftSide;