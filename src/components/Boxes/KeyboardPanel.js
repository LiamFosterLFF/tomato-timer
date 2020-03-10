import React from 'react'

const KeyboardPanel = () => {
  return (
    <div className="keyboard small-panel">
      <h5>Keyboard Shortcuts</h5>
      <ul>
        <li><strong>SPACE</strong>   Start or Stop the timer</li>
        <li><strong>ALT + P</strong>  Pomodoro</li>
        <li><strong>ALT + S</strong>  Short Break</li>
        <li><strong>ALT + L </strong> Long Break</li>
        <li><strong>ALT + R</strong>  Reset Timer</li>
      </ul>
    </div>
  )
}

export default KeyboardPanel;
