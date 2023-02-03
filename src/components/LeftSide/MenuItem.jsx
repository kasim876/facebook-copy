import React from 'react';

const MenuItem = ({title, image, link}) => {
  return (
    <a
      href={link}
      className="group block relative p-2"
    >
      <div className="flex items-center w-full">
        <div className="flex mr-3">
          <i className={image}></i>
        </div>
        <div className="w-full">
          <span className="text-sm">{title}</span>
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full h-full opacity-0 rounded-2xl bg-overlay-hover group-hover:opacity-100 transition-opacity"></div>
    </a>
  );
};

export default MenuItem;