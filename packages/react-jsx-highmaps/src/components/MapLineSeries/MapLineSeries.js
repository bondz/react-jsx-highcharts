import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Series } from 'react-jsx-highcharts';

class MapLineSeries extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
  };

  render () {
    return (
      <Series {...this.props} type="mapline" axisId="yAxis" />
    );
  }
}

export default MapLineSeries;
