import React from 'react';
import {
  StyledHomeBox,
  StyledHomeMessage,
  StyledImage,
} from './HomePage.styled';

export default function HomePage() {
  return (
    <StyledHomeBox>
      <StyledHomeMessage>Welcome to the phonebook!</StyledHomeMessage>
      <StyledImage
        src="https://github.com/kszczerbowski/goit-react-hw-08-phonebook/blob/main/public/welcomeCat.jpg?raw=true"
        alt="welcome image, cat using a phone book"
      />
      <StyledHomeMessage>Please log in to access the app 😸</StyledHomeMessage>
    </StyledHomeBox>
  );
}
