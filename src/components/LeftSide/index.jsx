import React from 'react';

const menu = [
  {
    title: 'Максим Лукашенко',
    image: 'bg-[url("../assets/images/user.png")] bg-center w-9 h-9 rounded-full',
  },
  {
    title: 'Поиск друзей',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-296px] w-9 h-9 rounded-full',
  },
  {
    title: 'Последние новости',
    image: 'bg-[url("../assets/images/news.png")] w-9 h-9 rounded-full',
  },
  {
    title: 'Добро пожаловать',
    image: 'bg-[url("../assets/images/logo.png")] w-9 h-9 rounded-full',
  },
  {
    title: 'Группы',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-74px] w-9 h-9 rounded-full',
  },
  {
    title: 'Marketplace',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-407px] w-9 h-9 rounded-full',
  },
  {
    title: 'Watch',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-518px] w-9 h-9 rounded-full',
  },
  {
    title: 'Воспоминания',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-444px] w-9 h-9 rounded-full',
  },
  {
    title: 'Сохраненное',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_-185px] w-9 h-9 rounded-full',
  },
  {
    title: 'Страницы',
    image: 'bg-[url("../assets/images/images3.png")] bg-[0_0px] w-9 h-9 rounded-full',
  },
  {
    title: 'Мероприятия',
  },
];

const LeftSide = () => {
  return (
    
    <div className="sticky top-[var(--header-height)] min-w-[280px] max-w-[360px] min-h-[inherit] shrink-[9999] w-full">
      <div className="mt-4">
        <ul>
          {
            menu.map(({title, image}) => (
              <li className="px-2">
                <div className="relative p-2">
                  <a
                    href="/"
                    className="group"
                  >
                    <div className="flex items-center px-2 w-full">
                      <div className="flex mr-3">
                        <i className={image}></i>
                      </div>
                      <div className="w-full">
                        <span className="text-sm">{title}</span>
                      </div>
                    </div>
                    <div className="absolute left-0 top-0 w-full h-full opacity-0 rounded-2xl bg-black/5 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;