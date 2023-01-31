import React from 'react';

import {ReactComponent as SearchIcon} from '@/assets/images/svg/search.svg';

const Search = () => {
  return (
    <label className="flex items-center rounded-full h-full px-3 bg-gray-100 text-gray-500 w-60">
      <span className="mr-2">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Поиск на Facebook"
        className="w-full h-full py-2 bg-transparent text-sm focus:outline-none"
      />
    </label>
  );
};

export default Search;
