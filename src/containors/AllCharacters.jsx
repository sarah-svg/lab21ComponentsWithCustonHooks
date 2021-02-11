import React from 'react';

import CharacterList from '../components/character/CharacterList';
import { useCharacters } from '../hooks/character';
import Loading from '../loading/Loading';
// import { useTheme } from '../hooks/theme';




const AllCharacters = () => {
  // const { theme, setTheme } = useTheme();

  const { loading, characters } = useCharacters();
  
  // const handleChange = ({ target }) => {
  //   if(target.checked){
  //     setTheme('light');
  //   } else setTheme('dark');
  // };
  // const themeStyle = theme === 'dark' ? styles.dark : styles.light;
 


  if(loading) return <Loading />;
  return <div>
    <CharacterList characters={characters}/>
  </div>;
};

export default AllCharacters;

