import React from 'react';
import 'src/global.scss';
import AppRoutes from 'src/AppRoutes';

import { StoreProvider } from 'context/store';

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
