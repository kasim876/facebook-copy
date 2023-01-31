import React from 'react';
import cn from 'clsx';

import classes from './Header.module.scss';

import {ReactComponent as Home} from '@/assets/images/svg/home.svg';
import {ReactComponent as Users} from '@/assets/images/svg/users.svg';
import {ReactComponent as Groups} from '@/assets/images/svg/groups.svg';

const Menu = () => {
  return (
    <ul className="flex h-full">
      <li className="relative mr-2 w-28 h-full">
        <a
          href="/"
          title="Главная"
          aria-label="Главная"
          className={cn(classes.link, classes.active, 'flex items-center justify-center h-full transition-colors duration-200 ease-in-out')}
        >
          <span>
            <Home />
          </span>
          <div className={cn(classes.background, 'absolute left-0 w-full bg-black/10 rounded-lg inset-y-1')}></div>
        </a>
        <div className={cn(classes.underline, 'absolute bottom-0 w-full h-1 scale-y-0 transition-all duration-200 ease-in-out origin-bottom bg-blue-600')}></div>
      </li>
      <li className="relative mr-2 w-28 h-full">
        <a
          href="/"
          title="Друзья"
          aria-label="Друзья"
          className={cn(classes.link, 'flex items-center justify-center h-full transition-colors duration-200 ease-in-out')}
        >
          <span>
            <Users />
          </span>
          <div className={cn(classes.background, 'absolute left-0 w-full bg-black/10 rounded-lg inset-y-1')}></div>
        </a>
        <div className={cn(classes.underline, 'absolute bottom-0 w-full h-1 scale-y-0 transition-all duration-200 ease-in-out origin-bottom bg-blue-600')}></div>
      </li>
      <li className="relative w-28 h-full">
        <a
          href="/"
          title="Группы"
          aria-label="Группы"
          className={cn(classes.link, 'flex items-center justify-center h-full transition-colors duration-200 ease-in-out')}
        >
          <span>
            <Groups />
          </span>
          <div className={cn(classes.background, 'absolute left-0 w-full bg-black/10 rounded-lg inset-y-1')}></div>
        </a>
        <div className={cn(classes.underline, 'absolute bottom-0 w-full h-1 scale-y-0 transition-all duration-200 ease-in-out origin-bottom bg-blue-600')}></div>
      </li>
    </ul>
  );
};

export default Menu;