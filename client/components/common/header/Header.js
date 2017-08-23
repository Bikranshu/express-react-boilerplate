import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import * as authService from '../../../services/authService';


class Header extends Component {

    logOut(e) {
        e.preventDefault();
        this.props.actions.logout();
    }

    render() {
        const {styles, handleToggleDrawer} = this.props;
        const customStyle = {
            appBar: {
                position: 'static',
                top: 0,
                overflow: 'hidden'
            }
        };
        return (
            <div>
                <AppBar style={{...styles, ...customStyle.appBar}}>
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu" onClick={handleToggleDrawer}>
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

export default connect(null, mapDispatchToProps)(Header)