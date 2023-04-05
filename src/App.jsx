import React from 'react';
import Content from './components/Content';

function App() {
  return (
    <div className=" flex h-screen w-screen justify-between items-stretch">
      <div className=" h-full w-2/12 bg-white"></div>
      <Content />
      <div className="h-full w-1/12 bg-gray-200"></div>
    </div>
  );
}

export default App;
