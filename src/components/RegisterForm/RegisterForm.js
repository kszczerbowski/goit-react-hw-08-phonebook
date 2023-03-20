import React from 'react';
import {
  StyledForm,
  StyledRegisterSpan,
  StyledInput,
  StyledTermsBox,
  StyledLabel,
  StyledCheckbox,
  StyledButton,
} from './RegisterForm.styled';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledRegisterSpan>Register</StyledRegisterSpan>
      <StyledInput type="name" name="name" placeholder="Name" />
      <StyledInput type="email" name="email" placeholder="Email address" />
      <StyledInput type="password" name="password" placeholder="Password" />
      <StyledInput
        type="password"
        name="passwordConfirm"
        placeholder="Confirm password"
      />

      <StyledTermsBox>
        <StyledCheckbox id="okayToEmail" type="checkbox" />
        <StyledLabel htmlFor="okayToEmail">
          I agree to terms and conditions
        </StyledLabel>
      </StyledTermsBox>
      <StyledButton>Register</StyledButton>
    </StyledForm>
  );
};

// export default RegisterForm;
