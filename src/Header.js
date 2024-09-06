import React from 'react';

function Header() {
  return (
    <div className="header">
     <div className="logo">Logo</div>
      <div className="nav">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
   
    </div>
  );
}

export default Header;