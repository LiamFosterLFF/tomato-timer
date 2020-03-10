import React from 'react'


const ControlsComponent = ({start, stop, reset}) => {
  return (
    <div className = "buttons">
      <button onClick={start} className='control-button start'>Start</button>
      <button onClick={stop} className='control-button stop'>Stop</button>
      <button onClick={reset} className='control-button reset'>Reset</button>
    </div>
  )
}

export default ControlsComponent;
