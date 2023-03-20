import styled from 'styled-components';

export const StyledContactsArea = styled.div`
  margin: auto auto 50px auto;
  max-width: 40%;
  min-width: 210px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #e8e8e8;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 7px 7px 10px 3px #24004628;
  color: #240046;
  font-weight: 500;
  align-items: center;
  padding-bottom: 20px;
  @media (max-width: 765px) {
    max-width: 90%;
  }
`;
