import React from 'react';
import Highcharts from 'highcharts';
import PropTypes from 'prop-types';

class Chart extends React.Component {
  componentDidMount() {
    const serieClick = this.props.onSerieClick;

    Highcharts.chart('chartContainer', {
      chart: {
        type: 'scatter'
      },

      xAxis: {
        title: {
          enabled: true,
          text: 'Impact'
        },
        plotLines: [{
          color: '#FF0000',
          width: 2,
          value: 1,
          zIndex: 3,
        }],
      },

      yAxis: {
        title: {
          text: 'Urgent'
        },

        plotLines: [{
          color: '#FF0000',
          width: 2,
          value: 2.2,
          zIndex: 3,
        }],
      },

      plotOptions: {
        scatter: {
          dataLabels: {
            format: '{point.name}',
            enabled: true,
          },

          tooltip: {
            headerFormat: '<b>{point.key}</b><br/>',
            pointFormat: 'Impact: {point.x}, Urgent: {point.y}'
          },
        },

        series: {
          cursor: 'pointer',
          events: {
            click: (event) => {
              serieClick(event.point.options);
            }
          }
        }
      },

      series: [{
        data: this.props.data
      }]
    });
  }
  render() {
    return <div id="chartContainer" />;
  }
}

Chart.propTypes = {
  onSerieClick: PropTypes.func,
  data: PropTypes.array,
};

export default Chart;
