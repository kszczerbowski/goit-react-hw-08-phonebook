import styled from 'styled-components';

export const StyledLI = styled.li`
  margin-top: 10px;
`;

export const StyledDeleteButton = styled.button`
  position: absolute;
  right: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: red;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  background: #e62222;
  transition: 200ms;
  aspect-ratio: 1;
  &:hover {
    background: #ff3636;
  }
  &:focus {
    outline: none;
  }
`;

export const StyledSVG = styled.svg`
  fill: #ffffff;
`;
