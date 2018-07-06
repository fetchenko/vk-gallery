import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

import { withStyles } from '@material-ui/core/styles';

import * as photosActions from '../../../store/actions/photosActions';

const styles = {
};

class Photos extends React.Component {
  constructor(props) {
    super(props);

    const { authed, session, vkGetPhotos } = props;
    const { mid, sid } = session;

    if (authed) {
      vkGetPhotos(mid, sid);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.photos !== this.props.photos) {
      const { photos } = nextProps;
      console.log({ photos });
    }
  }

  render() {
    const { photos } = this.props;
    return (
      <Gallery images={photos} />
    );
  }
}

Photos.propTypes = {
  session: PropTypes.shape({
    mid: PropTypes.string,
    sid: PropTypes.string,
  }).isRequired,
  authed: PropTypes.bool.isRequired,
  vkGetPhotos: PropTypes.func.isRequired,
  photos: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  vkGetPhotos: (mid, sid) => dispatch(photosActions.vkGetPhotos(mid, sid)),
});

const mapStateToProps = state => ({
  authed: state.auth.authed,
  session: state.auth.session,
  photos: state.photos.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Photos));
