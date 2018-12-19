import PropTypes from 'prop-types';

const listingShape = PropTypes.shape({
  address: PropTypes.string.isRequired,
  squareFootage: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  numBeds: PropTypes.number.isRequired,
  numBaths: PropTypes.number.isRequired,
  heating: PropTypes.string.isRequired,
  cooling: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

const listingOptionalShape = PropTypes.oneOfType([
  PropTypes.shape({
    nope: PropTypes.string.isRequired,
  }),
  listingShape,
]);

export default { listingShape, listingOptionalShape };
