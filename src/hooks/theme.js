/* eslint-disable no-unused-vars */

import { useState, useEffect, createContext } from 'react';


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
  const { theme, setTheme } = useEffect(CharacterTheme);
  return (
    theme,
    setTheme
  );
};
