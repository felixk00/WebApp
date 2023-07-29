import React from 'react';
import './Logo.css';
import myLogo from '/Users/melihavci/Documents/GitHub/WebApp/frontend/mafilms/src/assets/logo.png'

function LogoMain() {
    return (
      <div>
        <img src={myLogo} className="logo main" alt="Logo" />
      </div>
    );
  }

export default LogoMain;