const formatPrice = dollars => dollars.toLocaleString(
  'en-US',
  {
    style: 'currency',
    currency: 'USD',
  },
);

export default formatPrice;
