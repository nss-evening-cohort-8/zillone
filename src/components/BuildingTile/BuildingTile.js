import React from 'react';
import PropTypes from 'prop-types';

import cal from './images/cal.png';
import flame from './images/flame.png';
import hill from './images/hill.png';
import snow from './images/snow.png';


import './BuildingTile.scss';

class BuildingTile extends React.Component {
  static propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    pTagText: PropTypes.string.isRequired,
  }

  render() {
    const { imageSrc, altText, pTagText } = this.props;
    const imageMaker = () => {
      if (imageSrc === 'cal') {
        return <img src={cal} alt={altText}/>;
      }
      if (imageSrc === 'hill') {
        return <img src={hill} alt={altText}/>;
      }
      if (imageSrc === 'flame') {
        return <img src={flame} alt={altText}/>;
      }
      if (imageSrc === 'snow') {
        return <img src={snow} alt={altText}/>;
      }
      return '';
    };

    return (
      <div className="col-3 building-tile">
        <div className="image-detail">
          {imageMaker()}
          <p>{pTagText}</p>
        </div>
      </div>
    );
  }
}

export default BuildingTile;
