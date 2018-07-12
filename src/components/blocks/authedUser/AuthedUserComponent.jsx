import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import * as authorizationActions from '../../../store/actions/authorizationActions';
import * as userActions from '../../../store/actions/userActions';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    margin: '10px',
  },
  hidden: {
    display: 'none',
  },
};

class AuthedUser extends React.Component {
  constructor(props) {
    super(props);

    this.authedUser = this.authedUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { authed, session, getSmallAvatar } = nextProps;
    const { mid, sid } = session;

    if (authed) {
      getSmallAvatar(mid, sid);
    }
  }

  authedUser() {
    const {
      user,
      classes,
      vkLogout,
      smallAvatar,
    } = this.props;

    const isObjNotEmpty = obj => obj && Object.keys(obj).length;

    return (isObjNotEmpty(user))
      ? (
        <div className={classes.root}>
          <Avatar
            alt={`${user.first_name} ${user.last_name}`}
            src={smallAvatar}
            className={classNames(classes.avatar, classes.hidden)}
          />
          <Typography variant="body2" color="inherit">
            {user.first_name} {user.last_name}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Exit"
            onClick={() => { vkLogout(); }}
          >
            <ExitToAppIcon />
          </IconButton>
        </div>
      ) : null;
  }

  render() {
    return (
      <div>{this.authedUser()}</div>
    );
  }
}

AuthedUser.propTypes = {
  session: PropTypes.shape({
    mid: PropTypes.string,
    sid: PropTypes.string,
  }).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  vkLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  authed: PropTypes.bool.isRequired,
  getSmallAvatar: PropTypes.func.isRequired,
  smallAvatar: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  vkLogout: () => dispatch(authorizationActions.vkLogout()),
  getSmallAvatar: (mid, sid) => dispatch(userActions.vkGetSmallAvatar(mid, sid)),
});

const mapStateToProps = state => ({
  authed: state.auth.authed,
  session: state.auth.session || {},
  user: state.auth.session.user || {},
  smallAvatar: state.user.photo || '',
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AuthedUser));
