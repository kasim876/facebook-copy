import React from 'react';
import cn from 'clsx';

import avatar from '@assets/images/user.png';

const Avatar = ({className}) => {
  return (
    <div
      className={cn(className, 'w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-black/20')}
    >
      <img src={avatar} alt="аватар" />
    </div>
  );
};

export default Avatar;