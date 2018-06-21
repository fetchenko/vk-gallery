import React from 'react';
import { connect } from 'react-redux';

import Login from '../../inputs/buttons/login';

function Authorization() {
  return (
    <div>
      <h1>Auth page</h1>
      <Login />
    </div>
  );
}
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

export default connect(null, null)(Authorization);
