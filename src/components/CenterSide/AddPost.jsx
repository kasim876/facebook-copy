import React from 'react';

import Avatar from '../Avatar';


const AddPost = () => {
  return (
    <div className="px-4 py-3 bg-white shadow rounded-xl w-full mb-4">
      <div className="flex">
        <Avatar />
        <button className="px-3 py-2 ml-2 bg-gray-100 rounded-full text-gray-500 text-base h-full w-full text-left hover:bg-gray-200">
          <span>Что у вас нового, Максим?</span>
        </button>
      </div>
      <div className="flex justify-between pt-2 mt-3 border-t-2 border-gray-100">
        <button className="group relative flex items-center justify-center p-2 text-sm text-gray-500 font-semibold w-1/3">
          <i className="bg-[url('../assets/images/images.png')] w-6 h-6 bg-[0_-58px] mr-2 shrink-0"></i>
          <span>Прямой эфир</span>
          <div className="absolute left-0 top-0 w-full h-full opacity-0 rounded-2xl bg-black/5 group-hover:opacity-100 transition-opacity"></div>
        </button>
        <button className="group relative flex items-center justify-center p-2 text-sm text-gray-500 font-semibold w-1/3">
          <i className="bg-[url('../assets/images/images.png')] w-6 h-6 bg-[0_-258px] mr-2 shrink-0"></i>
          <span>Фото/видео</span>
          <div className="absolute left-0 top-0 w-full h-full opacity-0 rounded-2xl bg-black/5 group-hover:opacity-100 transition-opacity"></div>
        </button>
        <button className="group relative flex items-center justify-center p-2 text-sm text-gray-500 font-semibold w-1/3">
          <i className="bg-[url('../assets/images/images.png')] w-6 h-6 bg-[0_-208px] mr-2 shrink-0"></i>
          <span>Чувства/действия</span>
          <div className="absolute left-0 top-0 w-full h-full opacity-0 rounded-2xl bg-black/5 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </div>
  );
};

export default AddPost;