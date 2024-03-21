import React from 'react';
import "./header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { height } from '@mui/system';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <h1 className='headername'>METRO MALL</h1>
      </div>
      <div> 
      <AccountCircleIcon style={{ fontSize: 40, width: 40, height: 40 }}/>
      </div>
    </div>
  )
}

export default Header