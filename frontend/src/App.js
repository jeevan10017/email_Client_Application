import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EmailList from './components/EmailList';
import EmailDetail from './components/EmailDetail';
import Navbar from './components/Navbar.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        {/* Always show the EmailList on the left side */}
        <EmailList />

        {/* Conditionally render the EmailDetail component when an email is selected */}
        <Routes>
          {/* Redirect from root (/) to /emails */}
          <Route path="/" element={<Navigate to="/emails" />} />

          {/* Render email list and email details */}
          <Route path="/emails/:id" element={<EmailDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
