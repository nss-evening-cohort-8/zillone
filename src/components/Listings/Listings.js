import React from 'react';
import PropTypes from 'prop-types';
import './Listings.scss';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    return (
      <div className="listings col">
        <h2>Listings</h2>
      </div>
    );
  }
}

export default Listings;
