import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Sidebar from './SideBar';
import Dashboard from './DashBoard';
import Dropdown from './DropDown';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <div className="app">
            <Header />
            <Sidebar />
            <main>
              <Dropdown />
            </main>
            <Dashboard />
          </div>
        } />
        <Route path="/dashboard/:id" element={
          <div className="app">
            <Header />
            <Sidebar />
            <main>
              <Dropdown />
            </main>
            <Dashboard  />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
