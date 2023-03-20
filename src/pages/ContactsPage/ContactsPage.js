import React from 'react';
import { ContactsArea } from 'components/ContactsArea/ContactsArea';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function ContactsPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggedIn && <UserMenu />}
      <ContactForm />
      <ContactsArea />
    </>
  );
}
