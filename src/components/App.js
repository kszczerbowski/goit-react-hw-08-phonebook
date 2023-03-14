import { StyledContainer, StyledNavigation, StyledNavLink } from './App.styled';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { HeadStripe } from './HeadStripe/HeadStripe';
import { BottomStripe } from './BottomStripe/BottomStripe';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <HeadStripe />
      <StyledContainer>
        <header>
          <StyledNavigation>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            <div>
              <StyledNavLink to="/login">Log in</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </div>
          </StyledNavigation>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </StyledContainer>
      <BottomStripe />
    </>
  );
};
