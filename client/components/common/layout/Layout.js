import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';

// Import custom components
import Header from '../header/Header';
import NavDrawer from './NavDrawer';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.width !== nextProps.width) {
            this.setState({open: nextProps.width === LARGE});
        }
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        let {open} = this.state;
        const paddingLeftDrawer = 236;

        const styles = {
            header: {
                paddingLeft: open ? paddingLeftDrawer : 0
            },
            container: {
                margin: '80px 20px 20px 15px',
                paddingLeft: open && this.props.width !== SMALL ? paddingLeftDrawer : 0
            }
        };
        return (
            <div>
                <Header styles={styles.header} handleToggleDrawer={this.handleToggle}/>
                <NavDrawer navDrawerOpen={open}/>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }

}

Layout.propTypes = {
    children: PropTypes.element,
    width: PropTypes.string
};

export default withWidth()(Layout)