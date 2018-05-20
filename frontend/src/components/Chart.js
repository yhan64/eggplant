import React from 'react';
import Highcharts from 'highcharts';

class Chart extends React.Component {
  componentDidMount() {
    Highcharts.chart('chartContainer', {
      chart: {
        type: 'bar'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      plotOptions: {
        series: {
          cursor: 'pointer',
          events: {
            click: (event) => {
              console.log(event.point.options);
            }
          }
        }
      },

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    });
  }
  render() {
    return <div id="chartContainer" />;
  }
}

export default Chart;
