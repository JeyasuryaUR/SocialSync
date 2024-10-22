import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Analytics: React.FC = () => {
  // Sample data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Engagement',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Analytics</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Audience Engagement</h2>
        <Line data={data} options={options} />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Post Performance</h2>
        <ul className="list-disc pl-5">
          <li>Facebook: 200 likes, 50 comments</li>
          <li>Twitter: 150 retweets, 300 likes</li>
          <li>Instagram: 500 likes, 100 comments</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Follower Growth</h2>
        <ul className="list-disc pl-5">
          <li>Facebook: +50 followers</li>
          <li>Twitter: +30 followers</li>
          <li>Instagram: +100 followers</li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;