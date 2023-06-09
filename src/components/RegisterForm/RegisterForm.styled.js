import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: white;
  padding: 3.125em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.75);
  max-width: 30%;
  margin: 40px auto;
  @media (max-width: 800px) {
    max-width: 50%;
  }
  @media (max-width: 800px) {
    max-width: 50%;
  }
  @media (max-width: 500px) {
    max-width: 70%;
  }
`;

export const StyledRegisterSpan = styled.span`
  color: rgb(77, 75, 75);
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 0.5em;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 0.625em;
  margin-top: 0.625em;
  height: 20px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 0.6em;
  font-family: 'Inter', sans-serif;
  outline: none;
  &focus: {
    border: 1px solid #639;
    outline: none;
  }
  `;
  //   ${({ faulty }) => faulty === 'true' && `
  //     &:after {
  //       content: "This is a fancy orange box.";
  //       background-color: #ffba10;
  //       border-color: black;
  //       border-style: dotted;
  //   }
  // `}

export const StyledTermsBox = styled.div`
  display: flex;
  margin-bottom: 0.625em;
  margin-top: 0.625em;
  align-items: center;
`;

export const StyledLabel = styled.label`
  color: grey;
  accent-color: #639;
`;

export const StyledCheckbox = styled.input`
  margin-right: 0.625em;
  accent-color: #639;
`;

export const StyledButton = styled.button`
  width: 50%;
  padding: 0.625em;
  border-radius: 5px;
  color: white;
  background-color: #639;
  border: 1px dashed #639;
  cursor: pointer;
  &hover: {
    color: #639;
    background-color: white;
    border: 1px dashed #639;
    cursor: pointer;
    transition: 0.5s;
  }
`;

export const StyledErrorMessage = styled.div`
color: #FFFFFF;
background-color: #639;
border-radius: 12px;
padding: 8px 16px;
width: calc(100% - 16px);
font-size: 12px;
`