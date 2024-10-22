import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Social Sync</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            <li><Link to="/scheduler">Scheduler</Link></li>
            <li><Link to="/integration">Integration</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;