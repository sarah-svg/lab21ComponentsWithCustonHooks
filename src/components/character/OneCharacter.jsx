import React from 'react';
import PropTypes from 'prop-types';

function OneCharacter({ name, url }) {

  return (
    <div  >

      <figure>
        <img src={url}/>
        <figcaption>
          {name}
        </figcaption>    
      </figure>
    </div>
  );
}

OneCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default OneCharacter;

