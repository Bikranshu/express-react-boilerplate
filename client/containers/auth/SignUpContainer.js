import React, {Component} from 'react';
// Import custom components
import SignUpForm from '../../components/auth/SignUpForm';

class SignUpContainer extends Component {

    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    /**
     * Submit the form.
     *
     * @param {object} formProps
     */
    submitForm(formProps) {
        console.log(formProps);
    }

    render() {

        return (
            <SignUpForm
                onSubmit={this.submitForm}
            />
        );
    }

}

export default SignUpContainer