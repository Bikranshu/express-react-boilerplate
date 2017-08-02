import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';

// Import custom components
import renderText from '../common/form/renderText';

const styleSheet = createStyleSheet(theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        minWidth: 275,
        textAlign: "center"
    },
    button: {
        marginTop: 21
    }
}));

const SignUpForm = props => {

    const {handleSubmit, onSubmit, classes} = props;

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    title="Sign Up"
                />
                <CardContent>
                    <form method="post" onSubmit={handleSubmit(onSubmit)}>
                        <Field
                            type="text"
                            name="first_name"
                            component={renderText}
                            label="First Name"

                        />
                        <br />
                        <Field
                            type="text"
                            name="last_name"
                            component={renderText}
                            label="Last Name"

                        />
                        <br />
                        <Field
                            type="text"
                            name="email"
                            component={renderText}
                            label="Email"
                        />
                        <br />
                        <Button className={classes.button} type="submit" raised color="primary">Create New
                            Account</Button>
                    </form>
                    <p>Already have an account? <Link to={'/'}>Login</Link>.</p>
                </CardContent>

            </Card>
        </div>
    )
};

const validateSignUp = values => {
    const errors = {};

    const requiredFields = [
        'first_name',
        'last_name',
        'email'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = '(The ' + field + ' field is required.)'
        }
    });

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '(Invalid email address.)'
    }
    return errors
};

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default reduxForm({
    form: 'SignUpForm', // a unique identifier for this form
    validate: validateSignUp // ←Callback function for client-side validation
})(withStyles(styleSheet)(SignUpForm))