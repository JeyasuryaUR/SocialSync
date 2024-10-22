import React, { useState } from 'react';

const SocialMediaIntegration: React.FC = () => {
  const [connectedAccounts, setConnectedAccounts] = useState<string[]>([]);

  const connectAccount = (platform: string) => {
    if (!connectedAccounts.includes(platform)) {
      setConnectedAccounts((prevAccounts) => [...prevAccounts, platform]);
    } else {
      alert(`${platform} is already connected.`);
    }
  };

  const disconnectAccount = (platform: string) => {
    setConnectedAccounts((prevAccounts) =>
      prevAccounts.filter((account) => account !== platform)
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Social Media Integration</h2>
      <p className="mb-4">Connect your social media accounts:</p>
      <div className="mb-4">
        <button
          onClick={() => connectAccount('Facebook')}
          className="bg-blue-600 text-white p-2 rounded mr-2"
        >
          Connect Facebook
        </button>
        <button
          onClick={() => connectAccount('Twitter')}
          className="bg-blue-600 text-white p-2 rounded mr-2"
        >
          Connect Twitter
        </button>
        <button
          onClick={() => connectAccount('Instagram')}
          className="bg-blue-600 text-white p-2 rounded"
        >
          Connect Instagram
        </button>
      </div>

      <h3 className="text-2xl font-semibold mb-2">Connected Accounts:</h3>
      {connectedAccounts.length > 0 ? (
        <ul className="list-disc pl-5">
          {connectedAccounts.map((account) => (
            <li key={account} className="mb-2">
              {account}{' '}
              <button
                onClick={() => disconnectAccount(account)}
                className="bg-red-600 text-white p-1 rounded"
              >
                Disconnect
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No accounts connected.</p>
      )}
    </div>
  );
};

export default SocialMediaIntegration;