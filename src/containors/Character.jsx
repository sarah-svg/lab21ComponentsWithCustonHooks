import React from 'react';
import PropTypes from 'prop-types';
import { useById } from '../hooks/character';
import Loading from '../loading/Loading';
import CharacterDetails from '../components/character/CharacterDetails';

const Character = ({ match }) => {
  const { loading, character } = useById(match.params.id);
  
  if(loading) return <Loading />;
  return <CharacterDetails {...character} />;
};

Character.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Character;

