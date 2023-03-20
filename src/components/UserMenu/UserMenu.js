import React from 'react';
import { StyledUserMenu, StyledGreeting } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const userEmail = user.email;
  return (
    <StyledUserMenu>
      <StyledGreeting>Hello {userEmail}!</StyledGreeting>
    </StyledUserMenu>
  );
};
