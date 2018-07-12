import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import * as authorizeActions from '../../../../store/actions/authorizationActions';

const styles = {
  button: {
    margin: '10px',
  },
};

function Login(props) {
  const { classes, vkLogin } = props;

  return (
    <Button
      variant="contained"
      color="default"
      className={classes.button}
      onClick={() => { vkLogin(); }}
    >
      Login with VK
    </Button>
  );
}

Login.propTypes = {
  vkLogin: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    button: PropTypes.string,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  vkLogin: () => dispatch(authorizeActions.vkAuthorize()),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Login));
