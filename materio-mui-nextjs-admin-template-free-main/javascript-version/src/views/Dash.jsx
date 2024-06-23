import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, ArcElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, ArcElement, LineElement);

const Abcd = () => {
  const lineChartRef = useRef(null);
  let lineChart = useRef(null);

  // Dummy data for pie chart 1 (Accepted vs Rejected)
  const pieData1 = {
    labels: ['Accepted', 'Rejected'],
    datasets: [
      {
        label: 'Number of Applications',
        data: [1200, 800], // Dummy data
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // Dummy data for line graph (Year vs Number of Applications)
  const lineData = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Number of Applications',
        data: [500, 600, 700, 800, 900, 1000], // Dummy data
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Dummy data for pie chart 2 (Female vs Male count)
  const pieData2 = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        label: 'Gender Distribution',
        data: [600, 400], // Dummy data
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.formattedValue;
          },
        },
      },
    },
  };

  useEffect(() => {
    if (lineChartRef && lineChartRef.current) {
      // Destroy previous chart instance if it exists
      if (lineChart.current) {
        lineChart.current.destroy();
      }

      const ctx = lineChartRef.current.getContext('2d');
      lineChart.current = new ChartJS(ctx, {
        type: 'line',
        data: lineData,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Yearly Applications',
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return 'Applications: ' + tooltipItem.raw.toFixed(0);
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Year',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Number of Applications',
              },
              suggestedMin: 0,
            },
          },
        },
      });
    }

    // Clean up function to destroy chart instance on component unmount
    return () => {
      if (lineChart.current) {
        lineChart.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Application Statistics</h2>
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
        {/* Pie Chart 1: Accepted vs Rejected */}
        <div>
          <h3 style={{ textAlign: 'center' }}>Accepted vs Rejected</h3>
          <Pie data={pieData1} options={pieOptions} />
        </div>
        {/* Line Graph: Year vs Number of Applications */}
        <div>
          <h3 style={{ textAlign: 'center' }}>Yearly Applications</h3>
          <canvas ref={lineChartRef}></canvas>
        </div>
        {/* Pie Chart 2: Female vs Male Count */}
        <div>
          <h3 style={{ textAlign: 'center' }}>Gender Distribution</h3>
          <Pie data={pieData2} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default Abcd