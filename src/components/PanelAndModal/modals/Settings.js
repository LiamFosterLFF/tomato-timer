import React from 'react'

const SettingsModal = (props) => {


  const onPomodoroChange = (value) => {
    props.setPomodoro(value)
  }

  const onShortBreakChange = (value) => {
    props.setShortBreak(value)
  }

  const onLongBreakChange = (value) => {
    props.setLongBreak(value)
  }

  const onSave = () => {
    localStorage.setItem('showTimerIndicator', props.showTimerIndicator)
    localStorage.setItem('notification', props.notification)
    localStorage.setItem('ringerType', props.ringerType)
    localStorage.setItem('ringerVolume', props.ringerVolume)
    localStorage.setItem('pomodoro', props.pomodoro)
    localStorage.setItem('shortBreak', props.shortBreak)
    localStorage.setItem('longBreak', props.longBreak)
    localStorage.setItem('pomodoroGoal', props.pomodoroGoal)
  }

  const onReset = () => {
    localStorage.setItem('showTimerIndicator', true)
    localStorage.setItem('notification', false)
    localStorage.setItem('ringerType', 'WristwatchAlarm')
    localStorage.setItem('ringerVolume', 1)
    localStorage.setItem('pomodoro', 25)
    localStorage.setItem('shortBreak', 5)
    localStorage.setItem('longBreak', 10)
    localStorage.setItem('pomodoroGoal', 1)
    props.setShowTimerIndicator(true)
    props.setNotification(false)
    props.setRingerType("WristwatchAlarm")
    props.setRingerVolume(".5")
    props.setPomodoro(25)
    props.setShortBreak(5)
    props.setLongBreak(10)
    props.setPomodoroGoal(1)
  }

   return (
    <div>
      <h2>Options</h2>
      <h3>User preferences</h3>
      <p className="flex-container">
        <input
          id="checkBoxTimerIndication"
          type='checkbox'
          checked={props.showTimerIndicator}
          onChange={() => props.setShowTimerIndicator(!props.showTimerIndicator)}
        />
        <label htmlFor="checkBoxTimerIndication">Timer indication in title?</label>
      </p>

      <p className="flex-container">
        <input id="checkBoxAutoStart" type='checkbox'/>
        <label htmlFor="checkBoxAutoStart">Auto start pomodoros and breaks?</label>
      </p>
      <p className="flex-container">
        <label htmlFor="pomodoro_goal">Pomodoro goal for the day</label>
        <input className="small-input" id="pomodoro_goal" type='number' step='1' min='1' value={props.pomodoroGoal} onChange={e => props.setPomodoroGoal(e.target.value)}/>
      </p>
      <p></p>
      <h3>Select Sound</h3>
      <select id="sound_option" size='5' value={props.ringerType} onChange={e => props.setRingerType(e.target.value)}>
        <option value="80sAlarm">80s Alarm</option>
        <option value="AlarmClock">Alarm Clock</option>
        <option value="WristwatchAlarm">Wristwatch Alarm</option>
        <option value="ElevatorDing">Elevator Ding</option>
        <option value="DoorBell">Door Bell</option>
      </select>
      <br/>
      <h3>Select Volume</h3>
      <select id="volume_option" size='5' value={props.ringerVolume} onChange={e => props.setRingerVolume(e.target.value)}>
        <option value="0"> Mute</option>
        <option value="0.25">25%</option>
        <option value="0.5">50%</option>
        <option value="0.75">75%</option>
        <option value="1.0">100%</option>
      </select>
      <br/>
      <h3>Set Custom Times <small>(in minutes)</small></h3>
      <label htmlFor="time_pomodoro">Pomodoro</label>
      <input type="number" id="time_pomodoro" step="1" min="1" value={props.pomodoro} onChange={e => onPomodoroChange(e.target.value)}/>
      <label htmlFor="time_shortbreak">Short Break</label>
      <input type="number" id="time_shortbreak" step="1" min="1" value={props.shortBreak} onChange={e => onShortBreakChange(e.target.value)}/>
      <label htmlFor="time_longbreak">Long Break</label>
      <input type="number" id="time_longbreak" step="1" min="1" value={props.longBreak} onChange={e => onLongBreakChange(e.target.value)}/>
      <p></p>
      <button className="save-settings-button" onClick={() => onSave()} >Save</button>
      <button className="reset-settings-button" onClick={() => onReset()}>Reset</button>
      <button className="sound-test-button" onClick={() => props.setIsRinging(true)}>Sound Test</button>
      <br/>
    </div>
  )
}

export default SettingsModal;
