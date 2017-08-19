import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import * as authService from '../../../services/authService';

const styleSheet = createStyleSheet(theme => ({
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    }
}));

class Header extends Component {

    logOut(e) {
        e.preventDefault();
        this.props.actions.logout();
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Button color="contrast" onClick={this.logOut.bind(this)}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, authService), dispatch)
});

export default connect(null, mapDispatchToProps)(withStyles(styleSheet)(Header))