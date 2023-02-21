import React from 'react';
import './App.css';

import Input from './components/Input';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App" style={{ background: "#5c3f89", display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#fff' }}>

      <Logo />
      <p>Você sabe com qual combustível compensa mais abastecer seu carro?</p>

      <Input />

    </div>
  );
}

export default App;
