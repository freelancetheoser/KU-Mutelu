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
            labels: ['ทั้งหมด', 'สำเร็จแล้ว', 'ยังไม่สำเร็จ'],
            datasets: [{
              label: 'จำนวน',
              data: [300, 105, 295],
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(127,255,0, 0.7)',
                'rgba(135,206,250, 0.7)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(127,255,0, 1)',
                'rgba(135,206,250, 1)'
              ],
              borderWidth: 2
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
