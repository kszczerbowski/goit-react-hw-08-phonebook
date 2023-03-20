import {
  StyledContainer,
  StyledNavigation,
  StyledNavLink,
  StyledLogOut,
} from './App.styled';
import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { HeadStripe } from './HeadStripe/HeadStripe';
import { BottomStripe } from './BottomStripe/BottomStripe';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleLogOut = () => {
    dispatch(logOut());
  };
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
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            ></Route>
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
