import React from 'react';
import {
  StyledInputArea,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledAddButton,
} from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const contactName = form.elements.name.value;
    const contactNumber = form.elements.number.value;
    if (contacts.map(contact => contact.name).includes(contactName)) {
      window.alert(`${contactName} is already in contacts!`);
    } else {
      dispatch(addContact({ name: contactName, number: contactNumber }));
    }
    form.reset();
    document.querySelector('input#nameInput').focus();
  };
  return (
    <>
      <h1>Phonebook</h1>
      <StyledInputArea>
        <StyledForm onSubmit={onSubmit}>
          <StyledLabel htmlFor="nameInput">Name</StyledLabel>
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="nameInput"
          />
          <StyledLabel htmlFor="phoneInput">Phone number</StyledLabel>
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="phoneInput"
          />
          <StyledAddButton type="submit">Add contact</StyledAddButton>
        </StyledForm>
      </StyledInputArea>
    </>
  );
};
