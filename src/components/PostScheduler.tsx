import React, { useState } from "react";
import { Calendar, Clock, Trash2 } from "lucide-react";
// import { Alert, AlertDescription } from "@/components/ui/alert";

interface ScheduledPost {
  id: string;
  date: string;
  time: string;
  content: string;
  status: "pending" | "published";
}

const PostScheduler = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [postContent, setPostContent] = useState("");
  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>([]);
  // const [showAlert, setShowAlert] = useState(false);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostContent(event.target.value);
  };

  const handleSchedulePost = () => {
    if (!selectedDate || !selectedTime || !postContent.trim()) {
      // setShowAlert(true);
      // setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    const newPost: ScheduledPost = {
      id: Date.now().toString(),
      date: selectedDate,
      time: selectedTime,
      content: postContent,
      status: "pending",
    };

    setScheduledPosts([...scheduledPosts, newPost]);
    setSelectedDate("");
    setSelectedTime("");
    setPostContent("");
  };

  const deletePost = (id: string) => {
    setScheduledPosts(scheduledPosts.filter((post) => post.id !== id));
  };

  const isInPast = (date: string, time: string) => {
    const postDateTime = new Date(`${date}T${time}`);
    return postDateTime < new Date();
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Post Scheduler</h2>

      {/* {showAlert && (
        <Alert className="mb-4 bg-red-50 border-red-200">
          <AlertDescription className="text-red-800">
            Please fill in all fields before scheduling a post.
          </AlertDescription>
        </Alert>
      )} */}

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="border p-2 w-full rounded"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Time:</label>
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Content:</label>
          <textarea
            value={postContent}
            onChange={handleContentChange}
            className="border p-2 w-full rounded"
            rows={4}
            placeholder="What would you like to post?"
          />
        </div>
        <button
          onClick={handleSchedulePost}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
        >
          Schedule Post
        </button>
      </div>

      {scheduledPosts.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold mb-4">Scheduled Posts</h3>
          <div className="space-y-4">
            {scheduledPosts.map((post) => (
              <div
                key={post.id}
                className={`border rounded-lg p-4 ${
                  isInPast(post.date, post.time) ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="space-y-1">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.time}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-800 whitespace-pre-wrap">
                  {post.content}
                </p>
                <div className="mt-2">
                  <span
                    className={`inline-block px-2 py-1 text-sm rounded ${
                      isInPast(post.date, post.time)
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {isInPast(post.date, post.time) ? "Published" : "Scheduled"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostScheduler;
