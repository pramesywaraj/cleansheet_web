import React, { createContext } from 'react';
import './global.module.scss';

import Routes from './routes';

export const AuthContext = createContext();

function App() {
  return (
    <AuthContext.Provider>
      <div className="App">
        <Routes />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
