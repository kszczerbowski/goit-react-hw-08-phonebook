import styled from 'styled-components';

export const StyledHomeBox = styled.div`
  margin: 20px 15px;
`;

export const StyledHomeMessage = styled.h1`
  margin: 20px 15px;
`;

export const StyledImage = styled.img`
  margin-top: 20px;
  max-height: 80vh;
  width: 70%;
  aspect-ratio: 1.7;
  @media (min-width: 900px) {
    width: 50%;
  }
`;
