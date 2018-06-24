import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Login from '../../inputs/buttons/login';

const styles = {
  image: {
    width: '100%',
    height: 'auto',
  },
  textCenter: {
    textAlign: 'center',
  },
};

function Authorization({ classes }) {
  // window.VK.Widgets.Auth('vk_auth', {});

  return (
    <Grid container className={classes.textCenter}>
      <Grid item xs={12} lg={4}>
        <Login />
        <div id="vk_auth">-</div>
      </Grid>
      <Grid item xs={12} lg={6}>
        <img src="http://chudo.tech/wp-content/uploads/2017/05/vk-mobile.jpg" alt="VK logo" className={classes.image} />
      </Grid>
    </Grid>
  );
}

Authorization.propTypes = {
  classes: PropTypes.shape({
    image: PropTypes.string,
  }).isRequired,
};

/*
const mapDispatchToProps = () => ({
  // return {
  // };
});

const mapStateToProps = () => ({
  // return {
  // };
});
*/

export default connect(null, null)(withStyles(styles)(Authorization));
