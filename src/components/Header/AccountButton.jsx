import React from 'react';

const AccountButton = ({name, icon}) => {
  return (
    <button
      title={name}
      aria-label={name}
      className="bg-gray-200 w-10 h-10 rounded-full overflow-hidden flex items-center text-text-primary justify-center hover:bg-gray-300 transition-colors ease-in-out"
    >
      <span>
        {icon}
      </span>
    </button>
  );
};

export default AccountButton;