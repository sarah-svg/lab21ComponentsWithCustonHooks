import { useState, useEffect } from 'react';
import { allCharacters, characterById } from '../servicers/AirbenderApi';


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
  const [loading, setLoading] = useState(true);
  const [character, setCharacters] = useState(null);
  useEffect(() => {
    characterById(id)
      .then(character => {
        setCharacters(character);
        setLoading(false);
      });
  }, [id]);
    
  return {
    loading,
    character
  };
};

