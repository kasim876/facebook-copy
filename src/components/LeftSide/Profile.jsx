import React from 'react';

import Avatar from '../Avatar';

const Profile = () => {
  return (
    <div className="px-2">
      <a
        href="/"
        className="group block relative p-2"
      >
        <div className="flex items-center w-full">
          <Avatar className="mr-3" />
          <div className="w-full">
            <span className="text-sm">Максим Лукашенко</span>
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-full opacity-0 rounded-2xl bg-overlay-hover group-hover:opacity-100 transition-opacity"></div>
      </a>
    </div>
  );
};

export default Profile;