import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as authorizeActions from '../../../../store/actions/authorizationActions';

function Login(props) {
  const { vkLogin } = props;

  return (
    <button
      onClick={() => { vkLogin(); }}
    >
      login
    </button>
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
