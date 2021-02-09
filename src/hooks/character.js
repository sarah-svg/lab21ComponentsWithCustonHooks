import { useState, useEffect } from 'react';
import { allCharacters } from '../Servicers/AirbenderApi';

export const useCharacters = () => {
  const [loading, loaded] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    allCharacters()
      .then(characters => {
        setCharacters(characters);
        loaded(false);
      });
  }, []);

  return {
    loading,
    characters
  };
};
