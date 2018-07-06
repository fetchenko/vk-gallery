import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Login from '../../inputs/buttons/login';

const styles = {
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8%',
  },
  textCenter: {
    textAlign: 'center',
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
      <Grid container className={classes.textCenter}>
        <Grid item xs={12} lg={4}>
          <Typography>
            You can find your VK photo here
          </Typography>
          <Typography>
            Join now
          </Typography>
          <Login />
        </Grid>
        <Grid item xs={12} lg={6}>
          <img src="http://chudo.tech/wp-content/uploads/2017/05/vk-mobile.jpg" alt="VK logo" className={classes.image} />
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

const mapDispatchToProps = () => ({
});

const mapStateToProps = state => ({
  authed: state.auth.authed,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Authorization));
