import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import * as authorizeActions from '../../../../store/actions/authorizationActions';

function Login(props) {
  const { vkLogin } = props;

  return (
    <Button
      color="default"
      onClick={() => { vkLogin(); }}
    >
      Login with VK
    </Button>
  );
}

Login.propTypes = {
  vkLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  vkLogin: () => dispatch(authorizeActions.vkAuthorizeUser()),
});

const mapStateToProps = () => ({
  // return {
  // };
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
