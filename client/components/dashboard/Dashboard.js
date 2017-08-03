import React, {Component} from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styleSheet = createStyleSheet(theme => ({
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    }
}));

const Dashboard = props => {

    const {classes} = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Button color="contrast">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default withStyles(styleSheet)(Dashboard)