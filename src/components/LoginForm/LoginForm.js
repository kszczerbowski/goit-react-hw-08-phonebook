import React, { useEffect } from 'react';
import {
  StyledForm,
  StyledLoginSpan,
  StyledInput,
  StyledButton,
} from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const LoginForm = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(logIn({ email, password }));
  };

  useEffect(() => {
    const navigateToContacts = () => navigate(`/contacts`);
    if (isLoggedIn) navigateToContacts();
  }, [isLoggedIn, navigate]);
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLoginSpan>Log in</StyledLoginSpan>
      <StyledInput type="email" name="email" placeholder="Email address" />
      <StyledInput type="password" name="password" placeholder="Password" />
      <StyledButton>Log in</StyledButton>
    </StyledForm>
  );
};

// export default LoginForm;
