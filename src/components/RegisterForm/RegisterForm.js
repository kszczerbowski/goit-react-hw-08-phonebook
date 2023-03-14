import React from 'react';
import { StyledForm, StyledRegisterSpan, StyledInput, StyledTermsBox, StyledLabel, StyledCheckbox, StyledButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <StyledForm>
      <StyledRegisterSpan>Register</StyledRegisterSpan>
      <StyledInput type="email" placeholder="Email address"/>
      <StyledInput type="password" placeholder="Password"/>
      <StyledInput
        type="password"
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
