import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

const styles = {};

class Footer extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div>
             <span>This is test</span>
            </div>
        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer)