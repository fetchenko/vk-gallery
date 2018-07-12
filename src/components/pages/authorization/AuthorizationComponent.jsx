import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Login from '../../inputs/buttons/login';

const styles = {
  root: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  marginTop: {
    marginTop: '10%',
  },
  typographyHeadline: {
    fontSize: '1.5rem',
    padding: '30px',
  },
  circle: {
    borderRadius: '50%',
    maxWidth: '500px',
    maxHeight: '500px',
  },
  typographyInline: {
    display: 'inline',
  },
};

class Authorization extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { authed } = nextProps;

    if (authed) {
      this.setState({
        redirect: true,
      });
    }
  }
  // window.VK.Widgets.Auth('vk_auth', {});

  render() {
    const { classes } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} lg={4}>
          <Typography className={classes.typographyHeadline} >
            You can find all your VK photos here
          </Typography>
          <Typography className={classes.typographyInline} variant="title">
            Join now
          </Typography>
          <Login />
        </Grid>
        <Grid item xs={12} lg={6}>
          <img
            src="https://i.pinimg.com/originals/21/8b/c0/218bc0b5fcb668f94205f2e5368c7680.png"
            alt="VKontakte dog"
            className={classNames(classes.image, classes.marginTop)}
          />
        </Grid>
      </Grid>
    );
  }
}

Authorization.propTypes = {
  classes: PropTypes.shape({
    image: PropTypes.string,
  }).isRequired,
  authed: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  authed: state.auth.authed,
});

export default connect(mapStateToProps, null)(withStyles(styles)(Authorization));
