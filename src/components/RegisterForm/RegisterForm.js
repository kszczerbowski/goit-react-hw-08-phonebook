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
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const passwordConfirm = form.elements.passwordConfirm.value;
    const okayToTerms = form.elements.okayToTerms.checked;
    if (password !== passwordConfirm) {
      Notify.failure('Both passwords need to be the same!');
      return;
    }
    if (okayToTerms !== true) {
      Notify.failure('You need to accept the terms to register!');
      return;
    }
    dispatch(register({ name, email, password }));
    form.reset();
  };
  // hasło minimum 7 znaków, jedna duża litera i cyfra, zrób funkcję handleBlur czy coś
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
        <StyledCheckbox name="okayToTerms" type="checkbox" />
        <StyledLabel htmlFor="okayToTerms">
          I agree to terms and conditions
        </StyledLabel>
      </StyledTermsBox>
      <StyledButton>Register</StyledButton>
    </StyledForm>
  );
};

// export default RegisterForm;
