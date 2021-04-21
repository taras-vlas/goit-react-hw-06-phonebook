import React from "react";
import PropTypes from 'prop-types';
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

function Filter({ value, onChangeFilter }) {
    const classes = useStyles();
  return (
    <div className = {classes.Label}>
      Find contacts by name
      <input className = {classes.Input}
        type="text"
        value={value}
        onChange={(event) => onChangeFilter(event.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func.isRequired,
};

export default Filter;