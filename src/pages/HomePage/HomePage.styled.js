import styled from 'styled-components';

export const StyledHomeBox = styled.div`
  margin: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHomeMessage = styled.h1`
  margin: 20px 15px;
  width: 85%;
  @media (min-width: 600px) {
    width: 70%;
  }
  @media (min-width: 900px) {
    width: 50%;
  }
`;

export const StyledImage = styled.img`
  margin-top: 20px;
  max-height: 80vh;
  width: 85%;
  aspect-ratio: 1.7;
  @media (min-width: 600px) {
    width: 70%;
  }
  @media (min-width: 900px) {
    width: 50%;
  }
`;
