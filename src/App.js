import React from 'react';
import './global.module.scss';
import Routes from './routes';

import { StoreProvider } from './context/store';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Routes />
      </div>
    </StoreProvider>
  );
}

export default App;
