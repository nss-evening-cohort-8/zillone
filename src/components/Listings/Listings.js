import React from 'react';
import PropTypes from 'prop-types';
import listingShape from '../../helpers/propz/listingShape';

import ListingItem from '../ListingItem/ListingItem';

import './Listings.scss';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape.listingShape),
    deleteSingleListing: PropTypes.func,
    passListingToEdit: PropTypes.func,
    onListingSelection: PropTypes.func,
  }

  render() {
    const {
      listings,
      deleteSingleListing,
      passListingToEdit,
      onListingSelection,
    } = this.props;
    const listingsItemComponents = listings.map(listing => (
      <ListingItem
        listing={listing}
        key={listing.id}
        deleteSingleListing={deleteSingleListing}
        onSelect={onListingSelection}
        passListingToEdit={passListingToEdit}
      />
    ));
    return (
      <div className="listings col">
        <h2>Listings</h2>
        <ul>{listingsItemComponents}</ul>
      </div>
    );
  }
}

export default Listings;
