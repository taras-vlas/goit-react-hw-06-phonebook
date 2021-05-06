import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

    import { createUseStyles } from 'react-jss';

    const useStyles = createUseStyles({
        Label:{
            display: 'inline-block',
            marginBottom: 16,
            width: 200,
            fontSize: 16,
            color: '#171718',
            cursor: 'pointer',
            }, 
         
        Input: {
            color: '#171718',
            font: 'inherit',
            fontSize: '0.9rem',
            marginTop: 6,
            borderRadius: 4,
            border: '1px solid #9e9d9d',
            width: 200,
            outline: 0,
            '&:focus': {
                border: '2px solid blue',
                boxShadow: '1px 1px 3px 1px rgba(41, 107, 250, 0.14)',
                },
            }
        });

function Filter({ contacts,  value, onChangeFilter }) {
  const classes = useStyles();

  if (contacts.length > 1) {
    return (
      <div className = {classes.Label}>
        Find contacts by name
        <input className={classes.Input}
          type="text"
          name="filter"
          value={value}
          onChange={event => onChangeFilter(event.target.value)} />
      </div>
    )
  }

  return null;
}

const mapStateToProps = state => {
  return {
    contacts: state.phonebook.contacts,
    value: state.phonebook.filter,
  };
};

const mapDispatchToProps = {
  onChangeFilter: phonebookActions.changeFilter,
};

Filter.propTypes = {
  contacts: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)  (Filter);