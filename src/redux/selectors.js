import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filter.filter;

export const getIsLoadingContacts = state => state.contacts.isLoading;

export const getFilteredAndSortedContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (contacts.length === 0) {
      return contacts;
    } else {
      return contacts
        .filter(contact => {
          return contact.name?.toLowerCase().includes(filter.toLowerCase());
        })
        .sort((firstContact, secondContact) =>
          firstContact.name.localeCompare(secondContact.name)
        );
    }
  }
);
