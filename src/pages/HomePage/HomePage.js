import React from 'react';
import {
  StyledHomeBox,
  StyledHomeMessage,
  StyledImage,
} from './HomePage.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const user = useSelector(selectUser)
  const username = user.name
  return (
    <StyledHomeBox>
      <StyledHomeMessage>Welcome {isLoggedIn && 'back '}to the phonebook{isLoggedIn && `, ${username}`}!</StyledHomeMessage>
      <StyledImage
        src="https://github.com/kszczerbowski/goit-react-hw-08-phonebook/blob/main/public/welcomeCat.jpg?raw=true"
        alt="welcome image, cat using a phone book"
      />
      {!isLoggedIn && <StyledHomeMessage>You can use the phonebook without an account, but to get the full experience, please log in 😸</StyledHomeMessage>}
      {isLoggedIn && <StyledHomeMessage>We missed you! 😸</StyledHomeMessage>}
    </StyledHomeBox>
  );
}
