import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  font-size: 15px;
  text-align: center;
  max-width: 1200px;
  margin: 0px auto;
  border: 1px solid black;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  padding-top: 10px;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin: 0px 5px;
  color: white;
  &.active {
    color: #D2042D;
  }
`;
