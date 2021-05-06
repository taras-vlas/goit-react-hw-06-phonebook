import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebook-actions';

const initContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "380444591256" },
  { id: "id-2", name: "Hermione Kline", number: "380444438912" },
  { id: "id-3", name: "Eden Clements", number: "380446451779" },
  { id: "id-4", name: "Annie Copeland", number: "380442279126" },
];

const addContact = (state, action) => {
  if (state.find(contact => contact.name === action.payload.contact.name)) {
    alert(`${action.payload.contact.name} is already in contacts`);
    return state
  }

  return [...state, action.payload.contact]
}

const deleteContact = (state, action) => {
  return state.filter(({ id }) => id !== action.payload);
}

const changeFilter = (state, action) => {
  return action.payload
}

                            /* reducers */

const contacts = createReducer(initContacts, {
  [phonebookActions.addContact]: addContact,
  [phonebookActions.deleteContact]: deleteContact,
});

const filter = createReducer ('', {
  [phonebookActions.changeFilter]: changeFilter,
});


export default combineReducers({ contacts, filter });




















// import { createReducer } from "@reduxjs/toolkit";
// import {addContact, deleteContact, changeFilter } from "./phonebook-actions";


// const contacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "380444591256" },
//   { id: "id-2", name: "Hermione Kline", number: "380444438912" },
//   { id: "id-3", name: "Eden Clements", number: "380446451779" },
//   { id: "id-4", name: "Annie Copeland", number: "380442279126" },
// ];

// const contactsReducer = createReducer(contacts, {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
//  //[getContactsFromLS]: (state, { payload }) => payload,
//   [changeFilter]: (state, { payload }) => payload,
// });

// export default contactsReducer;