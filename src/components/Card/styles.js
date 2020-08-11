import styled from 'styled-components';

export const Card = styled.div`
  width: 30vw;
  min-width: 330px;
  height: 21vh;
  border: 2px solid #DADADA;
  border-radius: 30px;
  margin: 10px;
  background: white;
  &:hover {
    background-color: #edebeb;
  }
  &:active {
    background-color: #dadada;
  }
`;
export const Avatar = styled.img`
  width: 20%;
  border-radius: 100px;
  margin: 20px;
`;
