import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const Dashboard = props => {

    return (
        <div>
            <h3>Application / Dashboard</h3>
            <Paper>
                <Typography type="body1" noWrap>
                    {'You think water moves fast? You should see ice.'}
                </Typography>
            </Paper>
        </div>
    )
};

export default Dashboard