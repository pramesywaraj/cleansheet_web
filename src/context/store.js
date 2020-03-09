import React, { createContext, useContext, useReducer } from 'react';
import { AuthReducer, AuthInitialState } from './authReducer';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, AuthInitialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
