import { useState, useEffect } from 'react';
import { allCharacters, characterById } from '../Servicers/AirbenderApi';

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

export const useById = id => {
  const [loading, loaded] = useState(true);
  const [character, setCharacters] = useState(null);
  useEffect(() => {
    characterById()
      .then(character => {
        setCharacters(character);
        loaded(false);
      });
  }, [id]);
    
  return {
    loading,
    character
  };
};

