import React from 'react';
import { StyledContactList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { ContactListElement } from 'components/ContactListElement/ContactListElement';
import { getFilteredAndSortedContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredAndSortedContacts = useSelector(getFilteredAndSortedContacts);
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
