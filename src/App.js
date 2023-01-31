import React from 'react';

import '@/styles/App.scss';


import Header from '@/components/Header';
import CenterSide from '@/components/CenterSide';

function App() {
  return (
    <div>
      <Header />

      <div className="relative top-14 flex justify-center items-start">
        <CenterSide />
      </div>
    </div>
  );
}

export default App;
