import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import FormA from './components/FormA';
import FormB from './components/FormB';
import ViewStudents from './components/ViewStudents';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/formA" element={<FormA />} />
            <Route path="/formB" element={<FormB />} />
            <Route path="/view-students" element={<ViewStudents />} />
            <Route path="/" element={<div>Home</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
