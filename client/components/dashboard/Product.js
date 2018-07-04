import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {cyan, purple, orange} from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import {List, ListItem, ListItemIcon, ListItemText, ListSubheader} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Wallpaper from '@material-ui/icons/Wallpaper';

const styles = theme => ({
    root: {
        paddingTop: 0
    },
    subheader: {
        fontSize: 24,
        backgroundColor: cyan[600],
        color: '#FFFFFF'
    }
});

const Product = props => {
    const classes = props.classes;
    return (
        <Paper>
            <List className={classes.root}>
                <ListSubheader className={classes.subheader}>Recent Products</ListSubheader>

                {props.data.map(item =>
                    <div key={item.title}>
                        <ListItem>
                            <ListItemIcon>
                                <Avatar>
                                    <Wallpaper />
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText
                                primary={item.title}
                                secondary={item.text}
                            />
                        </ListItem>
                        <Divider inset={true}/>
                    </div>
                )}
            </List>
        </Paper>
    )
};

Product.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array,
};

export default withStyles(styles)(Product)