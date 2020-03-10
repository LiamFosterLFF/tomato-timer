import React from 'react'
import KeyboardPanel from './KeyboardPanel'
import NotificationsPanel from './NotificationsPanel'
import SettingsPanel from './SettingsPanel'

const BoxesComponent = () => {
  return(
    <div className="boxes">
      <KeyboardPanel/>
      <NotificationsPanel/>
      <SettingsPanel/>
    </div>

  )
}

export default BoxesComponent;
