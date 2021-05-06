import React from 'react';
import styled from 'styled-components'
import AddContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const App = () => {

  return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <AddContactForm />
        </Section>
      
        <Section>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Section>
      </>  
  )
}


const Section = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

export default App;