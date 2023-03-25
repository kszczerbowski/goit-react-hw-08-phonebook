import styled from 'styled-components';

export const StyledInputArea = styled.div`
  margin: auto;
  max-width: 40%;
  min-width: 210px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #240046;
  max-height: 420px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 7px 7px 10px 3px #24004628;
  @media (max-width: 765px) {
    max-width: 90%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
`;

export const StyledInput = styled.input`
  display: block;
  margin: auto;
  max-width: 80%;
`;

export const StyledLabel = styled.label`
  margin: auto;
  display: block;
  font-weight: 500;
  color: #ffffff;
`;

export const StyledAddButton = styled.button`
  margin: auto;
  height: 40px;
  color: #fff;
  background: #573b8a;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in;
  padding: 0px 30px 0px 30px;
  &:hover {
    cursor: pointer;
    background-color: #6d44b8;
  }
`;

export const StyledHeading = styled.h1`
  @media (max-width: 670px) {
    margin-top: 70px;
  }
`;
