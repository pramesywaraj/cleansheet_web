import React, { createContext, useContext, useReducer } from 'react';
import { reducers, initialState } from 'context/reducers';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
