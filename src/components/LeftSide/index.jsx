import React from 'react';

import Avatar from '../Avatar';

import Menu from './Menu';
import Profile from './Profile';

const menu = [
  {
    title: 'Максим Лукашенко',
    image: 'bg-[url("../assets/images/user.png")] bg-center w-9 h-9 rounded-full',
    link: '/',
  },
];

const LeftSide = () => {
  return (
    
    <div className="sticky top-[var(--header-height)] min-w-[280px] max-w-[360px] min-h-[inherit] shrink-[9999] w-full">
      <h2 className="sr-only">Меню Facebook</h2>
      <div className="mt-4">
        <Menu />
      </div>
    </div>
  );
};

export default LeftSide;