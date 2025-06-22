import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import UploadVideo from './pages/UploadVideo';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/" element={<Home />} />
        </Routes>
      
    </Router>
  );
}

export default App;
