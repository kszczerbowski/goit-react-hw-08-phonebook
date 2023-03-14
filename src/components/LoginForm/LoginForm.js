import React from 'react';
import {
  StyledForm,
  StyledLoginSpan,
  StyledInput,
  StyledButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <StyledForm>
      <StyledLoginSpan>Log in</StyledLoginSpan>
      <StyledInput type="email" placeholder="Email address" />
      <StyledInput type="password" placeholder="Password" />
      <StyledButton>Log in</StyledButton>
    </StyledForm>
  );
};

// export default LoginForm;
