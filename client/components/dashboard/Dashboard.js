import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {cyan, pink, purple, orange} from '@material-ui/core/colors';
import {AddShoppingCart, ThumbUp, Assessment, Face} from '@material-ui/icons';

import SummaryBox from './SummaryBox';
import Product from './Product';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: theme.spacing.unit * 3,
    }),
});

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

            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                    <SummaryBox Icon={AddShoppingCart}
                                color={pink[600]}
                                title="Total Profit"
                                value="1500k"
                    />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                    <SummaryBox Icon={ThumbUp}
                                color={cyan[600]}
                                title="Likes"
                                value="4231"
                    />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">

                    <SummaryBox Icon={Assessment}
                                color={purple[600]}
                                title="Sales"
                                value="460"
                    />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                    <SummaryBox Icon={Face}
                                color={orange[600]}
                                title="New Members"
                                value="248"
                    />
                </div>
            </div>
            <div className="row" style={{paddingTop: '10px'}}>
                <div className="col-xs-12 col-sm-12">
                    <Product data={data.recentProducts}/>
                </div>
            </div>
        </div>
    )
};

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard)