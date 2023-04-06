import React from 'react';
import { Content, InfoPanel, Navbar } from './components';

function App() {
  return (
    <div className=" flex h-screen w-screen justify-between items-stretch">
      <InfoPanel />
      <Content />
      <Navbar />
    </div>
  );
}

export default App;
