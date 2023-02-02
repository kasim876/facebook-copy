import React from 'react';

import Search from './Search';
import Menu from './Menu';
import Account from './Account';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex items-center justify-between shadow h-[var(--header-height)] w-full px-4 bg-white">
      <div className="flex items-center h-10">
        <a
          href="/"
          className="h-full mr-2"
          aria-label="Facebook Home Page"
        >
          <img
            className="h-full rounded-full"
            src="https://cdn.svgporn.com/logos/facebook.svg"
            alt="Facebook Logo"
          />
        </a>
        <Search />
      </div>
      <Menu />
      <Account />
    </header>
  );
};

export default Header;
