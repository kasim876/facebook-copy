import React from 'react';
import cn from 'clsx';

const MenuItem = ({name, icon, active}) => {
  return (
    <div className="relative w-[130px] h-full">
      <a
        href="/"
        title={name}
        aria-label={name}
        className={cn(active && 'text-blue-600 pointer-events-none', 'group flex items-center justify-center h-full text-gray-500 transition-colors ease-in-out')}
      >
        <span>
          {icon}
        </span>
        <div className="absolute opacity-0 w-full rounded-lg bg-overlay-hover inset-y-1 group-hover:opacity-100 transition-opacity ease-in-out"></div>
      </a>
      <div className={cn(active && 'transform-none', 'absolute bottom-0 w-full h-[3px] scale-y-0 transition-transform ease-in-out origin-bottom bg-blue-600')}></div>
    </div>
  );
};

export default MenuItem;