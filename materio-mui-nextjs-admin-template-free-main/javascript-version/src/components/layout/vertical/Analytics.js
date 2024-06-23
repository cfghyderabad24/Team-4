import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../Analytics.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = () => {

  const data = {
    labels: ['Space Requirements', 'Aesthetic Preferences'],
    datasets: [
      {
        label: 'Number of Votes',
        data: [35, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="analytics-container">
      <h2>Analytics</h2>
      <div className="chart-container">
        <Doughnut data={data} />
      </div>
      <div className="data-container">
        <div className="data-item">
          <p className="label">Total Requests</p>
          <p className="value">50</p>
        </div>
        <div className="data-item">
          <p className="label">Space Requirements</p>
          <p className="value">35</p>
        </div>
        <div className="data-item">
          <p className="label">Aesthetic Preferences</p>
          <p className="value">15</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;