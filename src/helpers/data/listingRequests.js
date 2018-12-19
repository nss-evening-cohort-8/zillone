import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/listings.json`)
    .then((res) => {
      const listings = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          listings.push(res.data[key]);
        });
      }
      resolve(listings);
    })
    .catch(err => reject(err));
});

const deleteListing = listingId => axios.delete(`${firebaseUrl}/listings/${listingId}.json`);

const postRequest = listing => axios.post(`${firebaseUrl}/listings.json`, listing);

const getSingleListing = listingId => axios.get(`${firebaseUrl}/listings/${listingId}.json`);
export default {
  getRequest,
  deleteListing,
  postRequest,
  getSingleListing,
};
