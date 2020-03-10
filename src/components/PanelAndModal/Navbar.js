import React from 'react'

const NavbarComponent = ({showModal}) => {
  return (
    <div className="nav-bar right">
      <ul>
        <li>
          <button onClick={() => showModal('Log')} className='nav-button'>Log</button>
        </li>
        <li>
          <button onClick={() => showModal('FAQ')} className='nav-button'>FAQ</button>
        </li>
        <li href='#'>
          <button onClick={() => showModal('Settings')} className='nav-button'>Settings</button>
        </li>
        
      </ul>
    </div>
  )
}

export default NavbarComponent;
