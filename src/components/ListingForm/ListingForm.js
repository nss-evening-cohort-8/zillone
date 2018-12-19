import React from 'react';
import './ListingForm.scss';

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
  state = {
    newListing: defaultListing,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempListing = { ...this.state.newListing };
    tempListing[name] = e.target.value;
    this.setState({ newListing: tempListing });
  }

  // formFieldNumberState = (name, e) => {
  //   const tempListing = { ...this.state.newListing };
  //   tempListing[name] = e.target.value * 1;
  //   this.setState({ newListing: tempListing });
  // }

  addressChange = e => this.formFieldStringState('address', e);

  render() {
    const { newListing } = this.state;
    return (
      <div className="listing-form col">
        <h2>Add New Listing:</h2>
        <form>
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
          <button className="btn btn-danger">Save Listing</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
