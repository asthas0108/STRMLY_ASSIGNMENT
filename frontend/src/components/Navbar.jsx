import { Link } from 'react-router-dom';

export default function Navbar () {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600">
        STRMLY
      </div>
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/sign-in" className="hover:text-blue-600 transition duration-200">
          Login
        </Link>
        <Link to="/upload" className="hover:text-blue-600 transition duration-200">
          Upload
        </Link>
      </div>
    </nav>
  );
};
