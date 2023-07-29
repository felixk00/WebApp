import React from 'react';
import './Pictures.css';
import one from '/Users/melihavci/Documents/GitHub/WebApp/frontend/mafilms/src/assets/DSC_0305.jpg'

function Picture() {
    return (
      <div>
        <img src={one} className="Picture" alt="Pic" />
      </div>
    );
  }

export default Picture;