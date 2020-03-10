import React from 'react'
import EightiesAlarm from '../../static/sounds/EightiesAlarm.wav'
import AlarmClock from '../../static/sounds/AlarmClock.wav'
import WristwatchAlarm from '../../static/sounds/WristwatchAlarm.wav'
import ElevatorDing from '../../static/sounds/ElevatorDing.wav'
import DoorBell from '../../static/sounds/DoorBell.wav'

const Alarm = (props) => {

  let alarmType = null
  switch(props.ringerType) {
    case "80sAlarm":
    alarmType=EightiesAlarm;
    break;
    case "AlarmClock":
    alarmType= AlarmClock;
    break;
    case "WristwatchAlarm":
    alarmType= WristwatchAlarm;
    break;
    case "ElevatorDing":
    alarmType= ElevatorDing;
    break;
    case "DoorBell":
    alarmType= DoorBell;
    break;
    default:
    alarmType=WristwatchAlarm;
    break;
  }


  const playSound = () => {
    if (props.isRinging) {
      const alarm = new Audio(alarmType)
      alarm.volume = Number(props.ringerVolume)
      alarm.play()
    }
    props.setIsRinging(false)
  }

  return(
    <div>
      <audio
      controls={playSound()}
      >
      </audio>
    </div>
  )
}

export default Alarm
