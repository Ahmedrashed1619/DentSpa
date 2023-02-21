import React, { useState } from 'react';
import './App.scss';
import Navbar from './Navbar';
import Massenger from './Massenger';
import Whats from './Whats';
import Home from './Home';
import Protocol from './components/Protocol/Protocol';
import ChangeSmile from './components/ChangeSmile/ChangeSmile';

function App() {

  const [val, setVal] = useState('ar');

  return (
    <>
      <div style={{ position: 'relative' }}>
        
        <Whats />
        <Massenger />

        <Navbar val={val} setVal={setVal} />

        <Home val={val} />

        <div id="shazly">
          <Protocol val={val} />
          <ChangeSmile val={val} />
        </div>
      </div>

    </>
  );
}

export default App;
