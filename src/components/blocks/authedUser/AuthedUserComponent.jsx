import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function AuthedUser({ user }) {
  const isObjEmpty = obj => Object.keys(obj).length;

  const authedUser = (isObjEmpty(user))
    ? (
      <div style={{ display: 'flex' }}>
        <div>{user.first_name} {user.last_name}</div>
        <IconButton color="inherit" aria-label="Menu">
          <ExitToAppIcon />
        </IconButton>
      </div>
    ) : null;

  return (
    <div>{authedUser}</div>
  );
}

AuthedUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

// const mapDispatchToProps = dispatch => ({
// });

const mapStateToProps = state => ({
  user: state.auth.userInfo,
});

export default connect(mapStateToProps, null)(AuthedUser);
