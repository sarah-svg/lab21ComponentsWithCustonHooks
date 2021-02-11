/* eslint-disable no-unused-vars */
import React, { useState, useEffect, createContext, useContext } from 'react';

export const CharacterTheme = createContext(null);

export const NewTheme = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <CharacterTheme.Provider value={{ theme, setTheme }}>
      {children}
    </CharacterTheme.Provider>
  );

};

export const useTheme = () => {
  const { theme, setTheme } = useContext(CharacterTheme);
  return {
    theme,
    setTheme
  };
};
