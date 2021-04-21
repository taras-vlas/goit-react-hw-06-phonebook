import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { v4 as uuidv4 } from "uuid";
import './styles.css';

class App extends Component {
	state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
       filter: "",
  };
          // збереження контактів телефонної книги в localStorage
            componentDidMount() {
              console.log(':)App componentDidMount');
              const savedContacts = localStorage.getItem("contacts");

              if (savedContacts) {
                //метод setState
                this.setState({ contacts: JSON.parse(savedContacts) });
              }
            }

            componentDidUpdate(prevState) {
              console.log(':)App componentDidUpdate');
              const { contacts } = this.state;
              if (prevState.contacts !== contacts) {
                console.log(':)Обновилось поле contacts');
                localStorage.setItem("contacts", JSON.stringify(contacts));
              }
            }
                  
                    changeFilter = ({ target: { value } }) => {
                      this.setState({ filter: value });
                    };
  
  
  addContact = (contacts) => {
    const searchName = this.state.contacts
      .map((contact) => contact.name)
      .includes(contacts.name);
       
    if (searchName) {
      alert(`${contacts.name} is already in contacts`);
      } else {
      const contact = {
        ...contacts,
        id: uuidv4(),
      };
      
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };


  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };


  DeleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
     
    return (
        <div>
          <h1>Phonebook</h1>

          <ContactForm onAddContact={this.addContact} />
          <h2>Contacts</h2>
        
          {visibleContacts.length > 0 && (
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          )}          
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.DeleteContact}
            />
          
        </div>
    );
  };
}

export default App;