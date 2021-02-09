import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OneCharacter from './OneCharacter';

function CharacterList({ characters }) {
  const list = characters.map(character => (
    <div key={character.id}>
      <Link to={character.id}>
        <OneCharacter {...character}/>
      </Link>
    </div>
  ));
  return (
    <div>
      {list}   
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;

