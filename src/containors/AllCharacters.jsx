import React from 'react';
import CharacterList from '../components/character/CharacterList';
import { useCharacters } from '../hooks/character';
import Loading from '../loading/Loading';


const AllCharacters = () => {

  const { loading, characters } = useCharacters();
  if(loading) return <Loading />;
  return <div>
    <CharacterList characters={characters}/>
  </div>;
};

export default AllCharacters;

