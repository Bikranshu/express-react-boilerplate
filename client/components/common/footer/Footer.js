import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  legal: {
    backgroundColor: '#fff',
    position: 'static',
    bottom: 0,
    width: '97.6%',
    borderTop: '1px solid #eee',
    padding: '15px',
    overflow: 'hidden',
    textAlign: 'center',
  },
});
const Footer = (props) => {
  const { classes } = props;

  return (
    <div className={classes.legal}>
      <div className="copyright">
        © 2016 - 2017 <a href="https://github.com/Bikranshu">Krishna Prasad Timilsina</a>
      </div>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
