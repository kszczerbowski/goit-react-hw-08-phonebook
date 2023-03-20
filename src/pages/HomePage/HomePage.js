import React from 'react';
import { StyledHomeBox, StyledHomeMessage } from './HomePage.styled';

export default function HomePage() {
  return (
    <StyledHomeBox>
      <StyledHomeMessage>Welcome to the phonebook!</StyledHomeMessage>
      <StyledHomeMessage>Please log in to access the app.</StyledHomeMessage>
    </StyledHomeBox>
  );
}
