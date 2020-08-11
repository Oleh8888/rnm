import React from 'react';
import Flexbox from 'flexbox-react';
import * as S from './styles';

function Card(props) {
  const { character } = props;
  return (
    <S.Card>
      <Flexbox>
        <S.Avatar src={character.image} />
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
      <div style={{
        textAlign: 'left',
        marginLeft: '10px',
      }}
      >
        Location:
        {' '}
        {character.location.name}
      </div>
    </S.Card>
  );
}

export default Card;
