import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, authed, path }) => (
  <Route
    path={path}
    render={() => (authed
      ? <Component />
      : <Redirect to="/login" />
    )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authed: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  authed: state.auth.authed,
});

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
