/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Flexbox from 'flexbox-react';

function Modal(props) {
  const { character } = props;
  return (
    <div style={{
      width: '800px',
      height: '575px',
      border: '2px solid #525252',
      borderRadius: '30px',
      margin: '10px',
      position: 'fixed',
      background: 'white',
      zIndex: '2',
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
          <div>
            {' '}
            {character.gender}
          </div>
        </Flexbox>
      </Flexbox>
      Location:
      {' '}
      {character.location.name}
    </div>
  );
}

export default Modal;
