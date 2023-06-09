import React from 'react';
import {
  StyledDeleteButton,
  StyledSVG,
  StyledLI,
} from './ContactListElement.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { deleteContactFromStorage } from 'redux/contacts/contactsSlice';

export const ContactListElement = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const onDeleteContact = () => {
    if (isLoggedIn) {
      dispatch(deleteContact(id));
    } else {
      dispatch(deleteContactFromStorage(id));
    }
  };
  return (
    <StyledLI>
      <span id="name">{name}</span>: {number}
      <StyledDeleteButton
        onClick={() => {
          onDeleteContact(id);
        }}
        type="button"
      >
        <span>
          <StyledSVG
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
          </StyledSVG>
        </span>
      </StyledDeleteButton>
    </StyledLI>
  );
};
ContactListElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
