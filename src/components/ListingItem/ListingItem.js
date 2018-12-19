import React from 'react';
import PropTypes from 'prop-types';

import listingShape from '../../helpers/propz/listingShape';
import formatPrice from '../../helpers/formatPrice';
import authRequests from '../../helpers/data/authRequests';

import './ListingItem.scss';

class ListingItem extends React.Component {
  static propTypes = {
    listing: listingShape.listingShape,
    deleteSingleListing: PropTypes.func,
    passListingToEdit: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleListing, listing } = this.props;
    deleteSingleListing(listing.id);
  }

  editEvent = (e) => {
    e.preventDefault();
    const { passListingToEdit, listing } = this.props;
    passListingToEdit(listing.id);
  }

  listingClick = (e) => {
    e.stopPropagation();
    const { listing, onSelect } = this.props;
    onSelect(listing.id);
  }

  render() {
    const { listing } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (listing.uid === uid) {
        return (
          <div>
            <span className="col">
              <button className="btn btn-default" onClick={this.editEvent}>
                <i className="fas fa-pencil-alt"></i>
              </button>
            </span>
            <span className="col">
              <button className="btn btn-default" onClick={this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };
    return (
      <li className="listing-item text-center" onClick={this.listingClick}>
        <span className="col-7">{listing.address}</span>
        <span className="col-3">{formatPrice(listing.price)}</span>
        {makeButtons()}
      </li>
    );
  }
}

export default ListingItem;
