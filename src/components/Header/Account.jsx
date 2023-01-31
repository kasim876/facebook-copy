import React from 'react';

import {ReactComponent as Dots} from '@assets/images/svg/dots.svg';
import {ReactComponent as Messenger} from '@assets/images/svg/messenger.svg';
import {ReactComponent as Bell} from '@assets/images/svg/bell.svg';

import avatar from '@assets/images/user.png';

const Account = () => {
  return (
    <div className="flex items-center">
      <a
        href="/"
        aria-label="Найти друзей"
        className="mr-2 bg-gray-200 px-3 rounded-full overflow-hidden h-9 flex items-center justify-center font-semibold text-sm hover:bg-gray-300 transition-colors duration-300 ease-in-out"
      >
        <span>Найти друзей</span>
      </a>
      <a
        href="/"
        title="Меню"
        aria-label="Меню"
        className="mr-2 bg-gray-200 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 ease-in-out"
      >
        <span>
          <Dots />
        </span>
      </a>
      <a
        href="/"
        title="Messenger"
        aria-label="Messenger"
        className="mr-2 bg-gray-200 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 ease-in-out"
      >
        <span>
          <Messenger />
        </span>
      </a>
      <a
        href="/"
        title="Уведомления"
        aria-label="Уведомления"
        className="mr-2 bg-gray-200 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 ease-in-out"
      >
        <span>
          <Bell />
        </span>
      </a>
      <a
        href="/"
        title="Аккаунт"
        aria-label="Аккаунт"
        className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-black/20"
      >
        <img src={avatar} alt="аватар" />
      </a>
    </div>
  );
};

export default Account;