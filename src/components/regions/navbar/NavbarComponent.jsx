import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AuthedUser from '../../blocks/authedUser';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

function Navbar({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography className={classes.flex} variant="title" color="inherit">
            VK-GALLERY
          </Typography>
          <AuthedUser />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    flex: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Navbar);
