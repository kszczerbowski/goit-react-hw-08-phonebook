import React from 'react';
import { StyledContactList } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { ContactListElement } from 'components/ContactListElement/ContactListElement';
import { getFilteredAndSortedContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const filteredAndSortedContacts = useSelector(getFilteredAndSortedContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <StyledContactList id="contactsList">
      {filteredAndSortedContacts.map(contact => (
        <ContactListElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </StyledContactList>
  );
};
