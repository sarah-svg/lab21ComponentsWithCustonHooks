import React from 'react';
import PropTypes from 'prop-types';
import styles from './OneCharacter.css';
import { useTheme } from '../../hooks/theme';

function CharacterDetails({ name, photoUrl, allies, enemies, affiliation }) {
  const { theme, setTheme } = useTheme();
  const handleChange = ({ target }) => {
    if(target.checked){
      setTheme('light');
    } else setTheme('dark');
  };
  const themeStyle = theme === 'dark' ? styles.dark : styles.light;

  return (
    <div className={themeStyle} >
      <figure>
        <figcaption data-testid="name">{name}</figcaption>
        <img src={photoUrl}/>
      </figure>
      <ul>
        {allies ? <li>{allies}</li> : null}
        {enemies ? <li>{enemies}</li> : null}
        {affiliation ? <li>{affiliation}</li> : null}
      </ul>
      <input type="checkbox" onChange={handleChange}></input>
    </div>
  );
}

CharacterDetails.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  allies: PropTypes.array,
  enemies: PropTypes.array,
  affiliation: PropTypes.string

};

export default CharacterDetails;

