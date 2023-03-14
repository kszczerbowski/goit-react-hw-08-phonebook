import { StyledContactsArea } from './ContactsArea.styled';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactList } from 'components/ContactList/ContactList';

export const ContactsArea = () => {
  return (
    <>
      <h2>Contacts</h2>
      <StyledContactsArea>
        <Filter />
        <Loader />
        <ContactList />
      </StyledContactsArea>
      ;
    </>
  );
};
