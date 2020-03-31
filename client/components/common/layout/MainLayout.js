import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Import custom components
import Header from '../header/Header';
import MiniDrawer from '../drawer/MiniDrawer';
import Footer from '../footer/Footer';

const styles = (theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    flexGrow: 1,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

const MainLayout = (props) => {
  const { classes, children } = props;
  const [open, setOpen] = useState(true);

  const handleToggle = () => setOpen(!open);

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Header navDrawerOpen={open} handleToggleDrawer={handleToggle} />
        <MiniDrawer navDrawerOpen={open} />
        <main className={classes.content}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default withStyles(styles)(MainLayout);
