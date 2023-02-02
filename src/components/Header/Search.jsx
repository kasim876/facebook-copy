import React from 'react';

import {ReactComponent as SearchIcon} from '@/assets/images/svg/search.svg';

const Search = () => {
  return (
    <label className="flex items-center rounded-full h-full px-3 bg-gray-100 w-60">
      <span>
        <SearchIcon className="text-gray-500" />
      </span>
      <input
        type="text"
        placeholder="Поиск на Facebook"
        className="w-full h-full p-2 bg-transparent text-[15px] focus:outline-none text-text-primary"
      />
    </label>
  );
};

export default Search;
