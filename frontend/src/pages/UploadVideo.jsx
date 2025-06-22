import { useState } from 'react';
import axios from 'axios';

export default function UploadVideo() {
  const [form, setForm] = useState({ title: '', description: '', file: null });

  const handleUpload = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("description", form.description);
    fd.append("file", form.file);
    await axios.post("http://localhost:5000/api/upload", fd, {
      withCredentials: true,
      // headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    alert("Uploaded");
  };

  return (
    <form onSubmit={handleUpload} 
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-5">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Upload Video</h2>

      <input 
        type="text"
        placeholder="Title"
        onChange={e => setForm({ ...form, title: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

      <input 
        type="text"
        placeholder="Description"
        onChange={e => setForm({ ...form, description: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

      <input 
        type="file"
        onChange={e => setForm({ ...form, file: e.target.files[0] })}
        className="w-full px-4 py-2 border border-dashed border-gray-400 rounded-lg bg-gray-50 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>

      <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
        Upload
      </button>
    </form>

  );
}
