import React from 'react';

import {ReactComponent as Arrow} from '@assets/images/svg/bottom-arrow.svg';

import MenuItem from './MenuItem';

const menu = [
  {
    title: 'Поиск друзей',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-296px] w-9 h-9 rounded-full',
    link: '/',
  },
  {
    title: 'Последние новости',
    image: 'bg-[url("../assets/images/news.png")] w-9 h-9 rounded-full',
    link: '/',
  },
  {
    title: 'Добро пожаловать',
    image: 'bg-[url("../assets/images/logo.png")] bg-center w-9 h-9 rounded-full',
    link: '/',
  },
  {
    title: 'Группы',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-74px] w-9 h-9 rounded-full',
    link: '/',
  },
  {
    title: 'Marketplace',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-407px] w-9 h-9 rounded-full',
    link: '/',
  },
  {
    title: 'Watch',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-518px] w-9 h-9 rounded-full',
    link: '/',
  },
  {
    title: 'Воспоминания',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-444px] w-9 h-9 rounded-full',
    link: '/',
  },
  {
    title: 'Сохраненное',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-185px] w-9 h-9 rounded-full',
    link: '/',
  },
  {
    title: 'Страницы',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_0px] w-9 h-9 rounded-full',
    link: '/',
  },
];

const Menu = () => {
  return (
    <div className="px-2">
      <ul>
        {
          menu.map(({title, image, link}) => (
            <li>
              <MenuItem title={title} image={image} link={link} />
            </li>
          ))
        }
      </ul>
      <button
        aria-label="Показать ещё"
        className="group block relative p-2 w-full text-left"
      >
        <div className="flex items-center w-full">
          <div className="flex items-center justify-center rounded-full mr-3 w-9 h-9 bg-gray-200 shrink-0">
            <Arrow />
          </div>
          <div className="w-full">
            <span className="text-sm">Показать больше</span>
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-full opacity-0 rounded-2xl bg-overlay-hover group-hover:opacity-100 transition-opacity"></div>
      </button>
    </div>
  );
};

export default Menu;