import React from 'react';
import './global.scss';
import AppRoutes from './AppRoutes';

import { StoreProvider } from './context/store';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </StoreProvider>
  );
}

export default App;
