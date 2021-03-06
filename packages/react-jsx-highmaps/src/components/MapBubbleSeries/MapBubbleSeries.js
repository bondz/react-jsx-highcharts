import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Series } from 'react-jsx-highcharts';

class MapBubbleSeries extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
  };

  render () {
    return (
      <Series {...this.props} type="mapbubble" axisId="yAxis" />
    );
  }
}

export default MapBubbleSeries;
