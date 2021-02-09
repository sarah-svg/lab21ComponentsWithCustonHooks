import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetails({ name, photoUrl, allies, enemies, affiliation }) {
  return (
    <div>
      <figure>
        <figcaption data-testid="name">{name}</figcaption>
        <img src={photoUrl}/>
      </figure>
      <ul>
        {allies ? <li>{allies}</li> : null}
        {enemies ? <li>{enemies}</li> : null}
        {affiliation ? <li>{affiliation}</li> : null}
      </ul>
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

