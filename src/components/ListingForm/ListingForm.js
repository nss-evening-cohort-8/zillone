import React from 'react';
import PropTypes from 'prop-types';
import './ListingForm.scss';
import authRequests from '../../helpers/data/authRequests';
import listingRequests from '../../helpers/data/listingRequests';

const defaultListing = {
  address: '',
  squareFootage: 0,
  price: 0,
  numBeds: 0,
  numBaths: 0,
  heating: '',
  cooling: '',
  imageUrl: '',
  uid: '',
};

class ListingForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    isEditing: PropTypes.bool,
    editId: PropTypes.string,
  }

  state = {
    newListing: defaultListing,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempListing = { ...this.state.newListing };
    tempListing[name] = e.target.value;
    this.setState({ newListing: tempListing });
  }

  formFieldNumberState = (name, e) => {
    const tempListing = { ...this.state.newListing };
    tempListing[name] = e.target.value * 1;
    this.setState({ newListing: tempListing });
  }

  addressChange = e => this.formFieldStringState('address', e);

  squareFootageChange = e => this.formFieldNumberState('squareFootage', e);

  priceChange = e => this.formFieldNumberState('price', e);

  numBedsChange = e => this.formFieldNumberState('numBeds', e);

  numBathsChange = e => this.formFieldNumberState('numBaths', e);

  heatingChange = e => this.formFieldStringState('heating', e);

  coolingChange = e => this.formFieldStringState('cooling', e);

  imageUrlChange = e => this.formFieldStringState('imageUrl', e);

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const myListing = { ...this.state.newListing };
    myListing.uid = authRequests.getCurrentUid();
    onSubmit(myListing);
    this.setState({ newListing: defaultListing });
  }

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      listingRequests.getSingleListing(editId)
        .then((listing) => {
          this.setState({ newListing: listing.data });
        })
        .catch(err => console.error('error with getSingleListing', err));
    }
  }

  render() {
    const { newListing } = this.state;
    const { isEditing } = this.props;
    const title = () => {
      if (isEditing) {
        return <h2>Edit Listing:</h2>;
      }
      return <h2>Add New Listing:</h2>;
    };
    return (
      <div className="listing-form col">
        {title()}
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="addressHelp"
              placeholder="123 Main Street Nashville, TN 37209"
              value={newListing.address}
              onChange={this.addressChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image Url:</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              aria-describedby="imageUrlHelp"
              placeholder="www.google.com"
              value={newListing.imageUrl}
              onChange={this.imageUrlChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="squareFootage">Square Footage:</label>
            <input
              type="number"
              className="form-control"
              id="squareFootage"
              aria-describedby="squareFootageHelp"
              placeholder="1234"
              value={newListing.squareFootage}
              onChange={this.squareFootageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numBeds">Number of Bedrooms:</label>
            <input
              type="number"
              className="form-control"
              id="numBeds"
              aria-describedby="numBedsHelp"
              placeholder="4"
              value={newListing.numBeds}
              onChange={this.numBedsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numBaths">Number of Bathrooms:</label>
            <input
              type="number"
              className="form-control"
              id="numBaths"
              aria-describedby="numBathsHelp"
              placeholder="2"
              value={newListing.numBaths}
              onChange={this.numBathsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              aria-describedby="priceHelp"
              placeholder="123345345"
              value={newListing.price}
              onChange={this.priceChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="heating">Heating:</label>
            <input
              type="text"
              className="form-control"
              id="heating"
              aria-describedby="heatingHelp"
              placeholder="Fireplace"
              value={newListing.heating}
              onChange={this.heatingChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cooling">Cooling:</label>
            <input
              type="text"
              className="form-control"
              id="cooling"
              aria-describedby="coolingHelp"
              placeholder="AC"
              value={newListing.cooling}
              onChange={this.coolingChange}
            />
          </div>
          <button className="btn btn-danger">Save Listing</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
