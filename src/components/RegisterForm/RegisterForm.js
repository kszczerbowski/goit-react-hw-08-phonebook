import React, { useCallback} from 'react';
import {
  StyledForm,
  StyledRegisterSpan,
  StyledInput,
  StyledTermsBox,
  StyledLabel,
  StyledCheckbox,
  StyledButton,
  StyledErrorMessage,
} from './RegisterForm.styled';
import { register } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  changePasswordState,
  changePasswordConfirmationState,
} from 'redux/auth/authSlice';
import {
  selectIsPasswordOk,
  selectIsPasswordConfirmationOk,
} from 'redux/auth/selectors';
const debounce = require('../../../node_modules/lodash.debounce/index.js');
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isPasswordOk = useSelector(selectIsPasswordOk);
  const isPasswordConfirmationOk = useSelector(selectIsPasswordConfirmationOk);
  const regexValidate = input => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{7,}$/;
    return regex.test(input);
  };

  const checkPasswordConfirmation = event => {
    const passwordConfirmation = event.target.value;
    const form = event.target.parentNode;
    const password = form.elements.password.value;
    if (passwordConfirmation !== password && passwordConfirmation !== '') {
      dispatch(changePasswordConfirmationState(false));
    } else {
      dispatch(changePasswordConfirmationState(true));
    }
  };

  const checkPassword = event => {
    const password = event.target.value;
    if (!regexValidate(password) && password !== '') {
      dispatch(changePasswordState(false));
    } else {
      dispatch(changePasswordState(true));
    }
  };

  // eslint-disable-next-line
  const debouncedCheckPassword = useCallback(debounce(checkPassword, 700), []);
  // eslint-disable-next-line
  const debouncedCheckPasswordConfirmation = useCallback(
    debounce(checkPasswordConfirmation, 700),
    []
  );

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const okayToTerms = form.elements.okayToTerms.checked;
    if (okayToTerms !== true) {
      Notify.failure('You need to accept the terms to register!');
      return;
    }
    dispatch(register({ name, email, password }));
    form.reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledRegisterSpan>Register</StyledRegisterSpan>
      <StyledInput required type="name" name="name" placeholder="Name" />
      <StyledInput
        required
        type="email"
        name="email"
        placeholder="Email address"
      />
      <StyledInput
        onChange={debouncedCheckPassword}
        required
        type="password"
        name="password"
        placeholder="Password"
      />
      {!isPasswordOk && (
        <StyledErrorMessage>
          Your password needs to be at least 7 characters, include one digit,
          one uppercase letter and one lowercase letter!
        </StyledErrorMessage>
      )}
      <StyledInput
        onChange={debouncedCheckPasswordConfirmation}
        required
        type="password"
        name="passwordConfirm"
        placeholder="Confirm password"
      />
      {!isPasswordConfirmationOk && (
        <StyledErrorMessage>
          Both passwords need to be the same!
        </StyledErrorMessage>
      )}
      <StyledTermsBox>
        <StyledCheckbox required name="okayToTerms" type="checkbox" />
        <StyledLabel htmlFor="okayToTerms">
          I agree to terms and conditions
        </StyledLabel>
      </StyledTermsBox>
      <StyledButton>Register</StyledButton>
    </StyledForm>
  );
};

// export default RegisterForm;
