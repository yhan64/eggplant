import React from 'react';
import Highcharts from 'highcharts';
import PropTypes from 'prop-types';

const COLOR_LIGHTBLUE = '#7cb5ec';

class Chart extends React.Component {
  componentDidMount() {
    this.showChart();
  }

  componentDidUpdate() {
    this.chart.update({
      series: [{
        name: 'Tasks',
        color: COLOR_LIGHTBLUE,
        data: this.props.data,
      }],
    });
  }

  chart = undefined;
  showChart() {
    const serieClick = this.props.onSerieClick;
    console.log(this.props.data);

    this.chart = Highcharts.chart('chartContainer', {
      title: {
        text: 'Active Tasks',
      },

      chart: {
        type: 'scatter',
        zoomType: 'xy',
        marginLeft: 50,
        marginRight: 20,
        height: `${(9 / 16) * 100}%`,
      },

      legend: {
        align: 'left',
        verticalAlign: 'bottom',
        x: 0,
        y: 0,
        floating: true
      },

      xAxis: {
        min: 0.5,
        max: 10.5,
        title: {
          text: 'Impact (high)',
          align: 'high',
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
        max: 100000,
        min: 1,
        minorTickInterval: 0.1,

        title: {
          text: 'Urgent (high)',
          align: 'high',
          style: {
            'text-anchor': 'start'
          },
          rotation: 0,
          y: -10,
          x: 15
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
        color: COLOR_LIGHTBLUE,
        data: this.props.data,
      }],

      credits: false,
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
