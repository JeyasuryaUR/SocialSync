import React, { useState } from 'react';

const PostScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [postContent, setPostContent] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(event.target.value);
  };

  const handleSchedulePost = () => {
    // Logic to schedule the post
    console.log('Post scheduled for', selectedDate, selectedTime, 'with content:', postContent);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Post Scheduler</h2>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Time:</label>
        <input
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Content:</label>
        <textarea
          value={postContent}
          onChange={handleContentChange}
          className="border p-2 w-full"
          rows={4}
        />
      </div>
      <button
        onClick={handleSchedulePost}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Schedule Post
      </button>
    </div>
  );
};

export default PostScheduler;