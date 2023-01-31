import React from 'react';

import { ReactComponent as Menu } from '@assets/images/svg/menu.svg';
import { ReactComponent as Like } from '@assets/images/svg/like.svg';

import Avatar from '../Avatar';

const Post = () => {
  return (
    <div className="shadow rounded-xl overflow-hidden bg-white mb-4">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar />
            <div className="ml-2">
              <div className="text-gray-800 text-sm font-medium">Tom Russo</div>
              <div className="text-xs">5 mins</div>
            </div>
          </div>
          <button className="group relative p-2">
            <Menu className="text-gray-600 text-lg" />
            <div className="absolute rounded-full inset-1 opacity-0 bg-black/5 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
        <div className="mt-4 mb-2">Not having fun at all 🤩</div>
      </div>
      <img
        className="w-full"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt=""
      />
      <div className="flex justify-between mx-4 py-2">
        <div className="flex">
          <button className="mr-2">
            <span>
              <Like />
            </span>
          </button>
          <button className="group">
            <span className="text-sm text-gray-500 group-hover:underline">1,5 тыс.</span>
          </button>
        </div>
        <div className="flex">
          <button className="group mr-3">
            <span className="text-sm text-gray-500 group-hover:underline">58 комментариев</span>
          </button>
          <button className="group">
            <span className="text-sm text-gray-500 group-hover:underline">Поделились: 455</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between mx-4 py-1 border-t-2 border-gray-100 space-x-1">
        <button className="group relative py-2 flex items-center justify-center w-1/3 text-sm font-semibold text-gray-500">
          <span className="flex">
            <i className="mr-2 bg-[url('../assets/images/images2.png')] bg-[0_-201px] w-5 h-5"></i>
          </span>
          <span>Нравится</span>
          <div className="absolute left-0 top-0 w-full h-full opacity-0 rounded-2xl bg-black/5 group-hover:opacity-100 transition-opacity ease-in-out"></div>
        </button>
        <button className="group relative py-2 flex items-center justify-center w-1/3 text-sm font-semibold text-gray-500">
          <span className="flex">
            <i className="mr-2 bg-[url('../assets/images/images2.png')] bg-[0_-162px] w-5 h-5"></i>
          </span>
          <span>Комментировать</span>
          <div className="absolute left-0 top-0 w-full h-full opacity-0 rounded-2xl bg-black/5 group-hover:opacity-100 transition-opacity ease-in-out"></div>
        </button>
        <button className="group relative py-2 flex items-center justify-center w-1/3 text-sm font-semibold text-gray-500">
          <span className="flex">
            <i className="mr-2 bg-[url('../assets/images/images2.png')] bg-[0_-219px] w-5 h-5"></i>
          </span>
          <span>Поделиться</span>
          <div className="absolute left-0 top-0 w-full h-full opacity-0 rounded-2xl bg-black/5 group-hover:opacity-100 transition-opacity ease-in-out"></div>
        </button>
      </div>
    </div>
  );
};

export default Post;