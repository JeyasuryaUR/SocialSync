import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="container mx-auto p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800">
            Social Sync Dashboard
          </h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Settings
          </button>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/analytics"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  View Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/scheduler"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  Schedule a Post
                </Link>
              </li>
              <li>
                <Link
                  to="/integration"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  Manage Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Recent Activity
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  Facebook
                </span>
                Posted: "New product launch!"
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  Twitter
                </span>
                Scheduled a post for tomorrow
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  Instagram
                </span>
                Connected account
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Notifications
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  New
                </span>
                Comment on your Instagram post
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  Milestone
                </span>
                Twitter post reached 100 likes
              </li>
              <li className="flex items-center">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  Review
                </span>
                New review on Facebook page
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-blue-100">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Performance Overview
          </h2>
          <div className="h-64 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 border border-blue-200">
            Chart placeholder: Add your preferred charting library here
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Upcoming Posts
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="text-blue-600">
                  Product Update Announcement
                </span>
                <span className="text-blue-400">Tomorrow, 10:00 AM</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-blue-600">Customer Spotlight</span>
                <span className="text-blue-400">Jun 15, 2:00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-blue-600">Weekly Tips & Tricks</span>
                <span className="text-blue-400">Jun 17, 11:00 AM</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Account Health
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-blue-600">Engagement Rate</span>
                  <span className="text-blue-800 font-semibold">85%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-blue-600">User Interaction Rate</span>
                  <span className="text-blue-800 font-semibold">70%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-blue-600">Audience Growth</span>
                  <span className="text-blue-800 font-semibold">92%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
