/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Flexbox from 'flexbox-react';

function Card(props) {
  const { character } = props;
  return (
    <div style={{
      width: '20em',
      height: '10em',
      border: '2px solid #DADADA',
      borderRadius: '30px',
      margin: '10px',
      background: 'white',
    }}
    >
      <Flexbox>
        <img
          src={character.image}
          style={{
            width: '20%',
            borderRadius: '100px',
            margin: '20px',
          }}
        />
        <Flexbox flexDirection="column" alignItems="flex-start">
          <div style={{
            marginTop: '20px',
          }}
          >
            {' '}
            <b>{character.name}</b>

          </div>
          <div>
            {' '}
            {character.species}
          </div>
        </Flexbox>
      </Flexbox>
      Location:
      {' '}
      {character.location.name}
    </div>
  );
}

export default Card;
