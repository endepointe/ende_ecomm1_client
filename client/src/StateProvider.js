import React, {
  createContext,
  useContext,
  useReducer
} from 'react';

// data layer prep
export const StateContext = createContext();

// look this up. wraps the app and provides the data to components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information form the data layer
export const useStateValue = () => useContext(StateContext);