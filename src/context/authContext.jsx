import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = {
  authData: {
    isLoggedIn: false,
    info: { firstName: '' },
  },
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authData: { isLoggedIn: true, info: action.payload },
      };
    case 'LOGOUT':
      return {
        ...state,
        authData: { isLoggedIn: false, info: {} },
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
