import { StyledContainer } from './App.styled';
import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactsArea } from './ContactsArea/ContactsArea';
import { Loader } from './Loader/Loader';
import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactsArea>
        <Filter />
        <Loader />
        <ContactList />
      </ContactsArea>
    </StyledContainer>
  );
};
