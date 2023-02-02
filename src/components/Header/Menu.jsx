import React from 'react';

import {ReactComponent as Home} from '@/assets/images/svg/home.svg';
import {ReactComponent as Users} from '@/assets/images/svg/users.svg';
import {ReactComponent as Groups} from '@/assets/images/svg/groups.svg';

import MenuItem from '@/components/Header/MenuItem';

const menu = [
  {
    name: 'Главная',
    icon: <Home />,
    active: true,
  },
  {
    name: 'Друзья',
    icon: <Users />,
    active: false,
  },
  {
    name: 'Группы',
    icon: <Groups />,
    active: false,
  },
];

const Menu = () => {
  return (
    <ul className="flex h-full space-x-2">
      {
        menu.map(({name, icon, active}) => (
          <li>
            <MenuItem name={name} icon={icon} active={active} />
          </li>
        ))
      }
    </ul>
  );
};

export default Menu;