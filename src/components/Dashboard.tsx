import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Social Sync Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
        <ul className="list-disc pl-5">
          <li><Link to="/analytics" className="text-blue-500">View Analytics</Link></li>
          <li><Link to="/scheduler" className="text-blue-500">Schedule a Post</Link></li>
          <li><Link to="/integration" className="text-blue-500">Manage Integrations</Link></li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Recent Activity</h2>
        <ul className="list-disc pl-5">
          <li>Posted on Facebook: "New product launch!"</li>
          <li>Scheduled a post on Twitter for tomorrow</li>
          <li>Connected Instagram account</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Notifications</h2>
        <ul className="list-disc pl-5">
          <li>New comment on your Instagram post</li>
          <li>Twitter post reached 100 likes</li>
          <li>Facebook page received a new review</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;