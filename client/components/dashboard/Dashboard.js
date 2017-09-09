import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: theme.spacing.unit * 3,
    }),
});

const Dashboard = props => {
    const classes = props.classes;
    return (
        <div>
            <h3>Application / Dashboard</h3>
            <Paper className={classes.root} elevation={4}>
                <Typography type="body1" noWrap>
                    {'You think water moves fast? You should see ice.'}
                </Typography>
            </Paper>
        </div>
    )
};

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard)