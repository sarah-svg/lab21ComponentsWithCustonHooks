/* eslint-disable no-unused-vars */

import { useState, useEffect, createContext } from 'react';


export const CharacterTheme = createContext(null);

export const NewTheme = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    
  }, []);


  return (
    <CharacterTheme.Provider value={{ theme, setTheme }}>
      {children}
    </CharacterTheme.Provider>
  );

};


