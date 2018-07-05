import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {cyan, pink, purple, orange} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import {AddShoppingCart, ThumbUp, Assessment, Face} from '@material-ui/icons';

import SummaryBox from './SummaryBox';
import Product from './Product';

const data = {
    recentProducts: [
        {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
        {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
        {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
        {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ]
};


const Dashboard = props => {

    const classes = props.classes;

    return (
        <div>
            <h2 style={{paddingBottom: '15px'}}>Dashboard</h2>

            <Grid container spacing={24}>
                <Grid item xs>
                    <SummaryBox Icon={AddShoppingCart}
                                color={pink[600]}
                                title="Total Profit"
                                value="1500k"
                    />
                </Grid>

               <Grid item xs>
                    <SummaryBox Icon={ThumbUp}
                                color={cyan[600]}
                                title="Likes"
                                value="4231"
                    />
                </Grid>

               <Grid item xs>
                    <SummaryBox Icon={Assessment}
                                color={purple[600]}
                                title="Sales"
                                value="460"
                    />
                </Grid>

                <Grid item xs>
                    <SummaryBox Icon={Face}
                                color={orange[600]}
                                title="New Members"
                                value="248"
                    />
                </Grid>

            </Grid>

             <Grid container spacing={24}>
               <Grid item xs>
                    <Product data={data.recentProducts}/>
                </Grid>
            </Grid>

        </div>
    )
};

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Dashboard