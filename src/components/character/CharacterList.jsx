import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OneCharacter from './OneCharacter';
import styles from './AllCharacter.css';
import { useTheme } from '../../hooks/theme';

function CharacterList({ characters }) {
  const { theme, setTheme } = useTheme();
  const handleChange = ({ target }) => {
    if(target.checked){
      setTheme('light');
    } else setTheme('dark');
  };
  const themeStyle = theme === 'dark' ? styles.dark : styles.light;

  const characterElements = characters.map(character => {
    if(character.url) 
    
    {
      return (
        <div className={themeStyle}  key={character.id}>
          <Link to={`/characters/${character.id}`} 
            key={character.id}
            style={{ textDecoration: 'none', color: 'green' }}>
            <li style={{ listStyleType: 'grid' }}>
              <OneCharacter name={character.name} url={character.url}/>
            </li>
          </Link>
          <input type="checkbox" onChange={handleChange}></input>
        </div>
      );
    }
    
    return;
  });
    
  return <ul data-testid="characters" >{characterElements}</ul>;
}
    
CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string
    })
  )
};
    
export default CharacterList;

