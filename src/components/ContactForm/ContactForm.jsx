import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from "./ContactForm.module.css";

import phonebookActions from '../../redux/phonebook/phonebook-actions'

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    })

  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name && number) {
      this.props.onCreateContact(this.state.name, this.state.number);
      return this.setState({ name: '', number: '' });  // alert (...) is already in contacts`);
    }

    return null;
  };


  render() {

    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        
<label className={styles.Label}>
            Name
            <input
                className={styles.Input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={this.state.name}
                onChange={this.handleChange}
            />
          </label>
          <label className={styles.Label}>
            Number
            <input
                className={styles.Input}
                type="tel"
                name="number"
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                required
                value={this.state.number}
                onChange={this.handleChange}
            />
          </label>
            <button className={styles.Button} type="submit">
              Add contact
            </button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  onCreateContact: phonebookActions.addContact,
};

ContactForm.propTypes = {
  onCreateContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)  (ContactForm);