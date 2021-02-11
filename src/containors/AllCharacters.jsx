import React from 'react';

import CharacterList from '../components/character/CharacterList';
import { useCharacters } from '../hooks/character';
import Loading from '../loading/Loading';





const AllCharacters = () => {

  const { loading, characters } = useCharacters();

  if(loading) return <Loading />;
  return <CharacterList characters={characters}/>;
};

export default AllCharacters;

