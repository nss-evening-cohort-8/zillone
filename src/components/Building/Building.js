import React from 'react';
import BuildingTile from '../BuildingTile/BuildingTile';
import listingProz from '../../helpers/propz/listingShape';
import formatPrice from '../../helpers/formatPrice';
import './Building.scss';

class Building extends React.Component {
  static propTypes = { listing: listingProz.listingOptionalShape };

  render() {
    const { listing } = this.props;
    if (listing.nope) {
      return (
        <div className="building col">
          <h1 className="unknown-listing">
            <span className="glyphicon glyphicon-arrow-left" /> OH NO!
          </h1>
        </div>
      );
    }
    return (
      <div className="building col">
        <div className="row">
          <div className="col-6">
            <img className="building-image" src={listing.imageUrl} alt="Selected Building" />
          </div>
          <div className="col-6">
            <h3>{formatPrice(listing.price)}</h3>
            <h4>
              {listing.address}
            </h4>
            <h5>
              {listing.numBeds} Bed/{listing.numBaths} Bath
            </h5>
          </div>
        </div>
        <div className="row">
          <BuildingTile imageSrc="flame" altText="flame" pTagText={listing.heating} />
          <BuildingTile imageSrc="snow" altText="snowflake" pTagText={listing.cooling} />
        </div>
      </div>
    );
  }
}

export default Building;
