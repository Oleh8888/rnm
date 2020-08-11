import React from 'react';
import Flexbox from 'flexbox-react';
import * as S from './styles';

function Modal(props) {
  const { character } = props;
  return (
    <S.Modal>
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
    </S.Modal>
  );
}

export default Modal;
