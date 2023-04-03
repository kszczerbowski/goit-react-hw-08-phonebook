import {
  StyledContainer,
  StyledNavigation,
  StyledNavLink,
  StyledLogOut,
} from './App.styled';
import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { HeadStripe } from './HeadStripe/HeadStripe';
import { BottomStripe } from './BottomStripe/BottomStripe';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { logOut, refreshUser } from 'redux/auth/operations';
import { getContacts } from 'redux/contacts/selectors';

const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(getContacts);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    dispatch(refreshUser());
    if (!isLoggedIn) {
      const phonebookListStringified = JSON.stringify(contacts);
      window.localStorage.setItem('phonebook-list', phonebookListStringified);
    }
  }, [dispatch, isLoggedIn, contacts]);
  return (
    <>
      <Suspense fallback={null}>
        <HeadStripe />
        <StyledContainer>
          <header>
            <StyledNavigation>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              {isLoggedIn && (
                <StyledLogOut onClick={handleLogOut}>Log out</StyledLogOut>
              )}
              {!isLoggedIn && (
                <div>
                  <StyledNavLink to="/login">Log in</StyledNavLink>
                  <StyledNavLink to="/register">Register</StyledNavLink>
                </div>
              )}
            </StyledNavigation>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/contacts" element={<ContactsPage />}></Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            ></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            ></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </StyledContainer>
        <BottomStripe />
      </Suspense>
    </>
  );
};
