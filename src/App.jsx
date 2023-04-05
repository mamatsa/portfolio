import React from 'react';
import { Content, InfoPanel } from './components';

function App() {
  return (
    <div className=" flex h-screen w-screen justify-between items-stretch">
      <InfoPanel />
      <Content />
      <div className="h-full w-1/12 bg-gray-200"></div>
    </div>
  );
}

export default App;
