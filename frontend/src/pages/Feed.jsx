import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Feed() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("/api/videos").then(res => setVideos(res.data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Video Feed</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map(v => (
          <div
            key={v._id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <video
              controls
              src={v.videoUrl}
              className="rounded-lg w-full h-60 object-cover mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-800">{v.title}</h3>
            <p className="text-gray-600 mt-1">{v.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Uploaded by: <span className="font-medium">{v.uploadedBy?.name || "Unknown"}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
