import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Contact-ListItem.module.css";

const ContactListItem = ({ name, number, onDelete }) => {
  return (
    <li className= {styles.List_item}>
      {"• " + name + ":   " + number}
      <button className={styles.List_button}
              type="button"
              name="delete"
              onClick={onDelete}
      >
          Delete
      </button>
    </li>
  )
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default  ContactListItem;

