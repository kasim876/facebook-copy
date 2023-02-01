import React from 'react';

import '@/styles/App.scss';

import Header from '@/components/Header';
import LeftSide from '@/components/LeftSide';
import CenterSide from '@/components/CenterSide';
import RightSide from '@/components/RightSide';

function App() {
  return (
    <div>
      <Header />

      <div className={'flex items-start justify-between relative top-[var(--header-height)] min-h-[calc(100vh-var(--header-height))]'}>
        <h1 className="sr-only">Главная страница</h1>
        <LeftSide />
        <CenterSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
