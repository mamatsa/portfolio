import React from 'react';
import { Content, InfoPanel, Navbar } from './components';

function App() {
  return (
    <div className='bg-slate-200 flex h-full w-full justify-between items-stretch'>
      <InfoPanel />
      <Content />
      {/* <div className='w-3/12 bg-gray-200'></div> */}
      <Navbar />
    </div>
  );
}

export default App;
