import React from 'react';

import {ReactComponent as Dots} from '@assets/images/svg/dots.svg';
import {ReactComponent as Messenger} from '@assets/images/svg/messenger.svg';
import {ReactComponent as Bell} from '@assets/images/svg/bell.svg';

import Avatar from '../Avatar';

import AccountButton from './AccountButton';


const menu = [
  {
    name: 'Меню',
    icon: <Dots />,
  },
  {
    name: 'Messenger',
    icon: <Messenger />,
  },
  {
    name: 'Уведомления',
    icon: <Bell />,
  },
];

const Account = () => {
  return (
    <div className="flex items-center space-x-2">
      <a
        href="/"
        aria-label="Найти друзей"
        className="overflow-hidden rounded-full px-3 h-9 flex items-center justify-center font-semibold text-[15px] text-text-primary bg-gray-200 hover:bg-gray-300 transition-colors ease-in-out"
      >
        <span>Найти друзей</span>
      </a>
      {
        menu.map(({name, icon}) => (
          <AccountButton icon={icon} name={name} />
        ))
      }
      <Avatar />
    </div>
  );
};

export default Account;