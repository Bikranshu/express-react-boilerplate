import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const renderPassword = ({input, label, meta: {touched, error}}) => (

    <TextField
        label={label}
        error={touched && error}
        margin="normal"
        type="password"
        {...input}
    />

);

renderPassword.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object,
};

export default renderPassword;