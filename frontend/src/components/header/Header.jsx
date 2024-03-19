import React from 'react';
import "./header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <h1>METRO MALL</h1>
      </div>
      <div> 
      <AccountCircleIcon style={{ fontSize: 35, width: 35, height: 35 }}/>
      </div>
    </div>
  )
}

export default Header