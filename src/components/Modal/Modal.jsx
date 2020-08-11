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
          onClick={() => console.log(character)}
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

          <div>
            {' '}
            {character.episodes}
          </div>
        </Flexbox>
      </Flexbox>
      <Flexbox flexDirection="column" flexWrap="wrap">
        <S.InfoItem>
          Location:
          {' '}
          {character.location.name}
        </S.InfoItem>
        <S.InfoItem>
          Origin:
          {' '}
          {character.origin.name}
        </S.InfoItem>
        <S.InfoItem>
          Episodes:
          {' '}
          {character.episode.length}
        </S.InfoItem>
        <S.InfoItem>
          Created:
          {' '}
          {character.created.substring(0, 10).replace(/-/gi, '.')}
        </S.InfoItem>
      </Flexbox>
    </S.Modal>
  );
}

export default Modal;
