import React from 'react';
import Highcharts from 'highcharts';
import PropTypes from 'prop-types';

class Chart extends React.Component {
  componentDidMount() {
    this.showChart();
  }

  componentDidUpdate() {
    this.chart.series[0].setData(this.props.data, true);
  }

  chart = undefined;
  showChart() {
    const serieClick = this.props.onSerieClick;
    console.log(this.props.data);

    this.chart = Highcharts.chart('chartContainer', {
      chart: {
        type: 'scatter'
      },

      xAxis: {
        min: 0.5,
        max: 10.5,
        title: {
          enabled: true,
          text: 'Impact'
        },
        plotLines: [{
          color: '#FF0000',
          width: 2,
          value: 5.5,
          zIndex: 3,
        }],
      },

      yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1,

        title: {
          text: 'Urgent'
        },

        plotLines: [{
          color: '#FF0000',
          width: 2,
          value: 500,
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
        name: 'Tasks',
        data: this.props.data,
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
