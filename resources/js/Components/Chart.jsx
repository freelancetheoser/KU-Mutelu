import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';


const DoughnutChartComponent = () => {
    const chartRef = useRef(null);

    useEffect(() => {
      if (chartRef && chartRef.current) {
        const chartContext = chartRef.current.getContext('2d');
        new Chart(chartContext, {
          type: 'doughnut',
          data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          }
        });
      }
    }, []);

    return <canvas ref={chartRef} />;
  };

  export default DoughnutChartComponent;
