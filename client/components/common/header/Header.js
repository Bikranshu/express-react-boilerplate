import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import * as authService from '../../../services/authService';

const drawerWidth = 250;

const styles = theme => ({
    appBar: {
        position: 'absolute',
        zIndex: theme.zIndex.navDrawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: -15
    },
    flex: {
        flex: 1
    }
});

class Header extends Component {
  logOut(e) {
    e.preventDefault();
    this.props.actions.logout();
  }

  render() {
    const { classes, navDrawerOpen, handleToggleDrawer } = this.props;

    return (
      <div>
        <AppBar className={classNames(classes.appBar, navDrawerOpen && classes.appBarShift)}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={handleToggleDrawer}
              className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
            </Typography>
            <Button color="inherit" onClick={this.logOut.bind(this)}>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    navDrawerOpen: PropTypes.func.isRequired,
    handleToggleDrawer: PropTypes.func.isRequired,
};

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, authService), dispatch)
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Header));
