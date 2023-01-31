import React from 'react';

import avatar from '@assets/images/user.png';

const Avatar = () => {
  return (
    <a
      href="/"
      title="Аккаунт"
      aria-label="Аккаунт"
      className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-black/20"
    >
      <img src={avatar} alt="аватар" />
    </a>
  );
};

export default Avatar;