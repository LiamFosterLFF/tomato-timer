import React, { useState, useEffect } from 'react'
import { HotKeys } from 'react-hotkeys'
import TitleComponent from './TitleComponent'
import Alarm from './Alarm'
import TimerTypes from './TimerTypes'
import Stopwatch from './Stopwatch'
import Controls from './Controls'

const TimerComponent = (props) => {

  
  const [seconds, setSeconds] = useState(props.pomodoro*60);
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState("pomodoro");
  

  useEffect(() => {
    let interval = null;
    if (isActive && seconds !== 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (isActive && seconds === 0){
      setIsActive(false)
      props.setIsRinging(true)
      props.setCurrentTimerLog({...props.currentTimerLog, "stopTime": new Date(), "id": Math.ceil(Math.random()*100000)})
      clearInterval(interval)
    }
    return () =>  {
      clearInterval(interval)
    } 
  }, [isActive, seconds]);

  useEffect(() => {
    
    if (Object.keys(props.currentTimerLog).length===5) {

      let localStorageLog = localStorage.getItem("timerLog") ? JSON.parse(localStorage.getItem("timerLog")) : []
      localStorageLog.push(props.currentTimerLog)

      let pomodorosDoneToday = Number(localStorage.getItem('pomodorosDoneToday'))

      if ((Date.now() - props.currentTimerLog.startTime.getTime() < 86400000) && (props.currentTimerLog.current==="pomodoro")) {
        pomodorosDoneToday += 1
      }
      localStorage.setItem('timerLog', JSON.stringify(localStorageLog))
      localStorage.setItem('pomodorosDoneToday', pomodorosDoneToday)
      props.setCurrentTimerLog({})
    }
  })

  const timePP = () => {
    const m = Math.floor(seconds/60)
    let s = String(Math.ceil(seconds % 60))
    if (s.length === 1) {
      s = '0' + s
    }
    return `${m}:${s}`
  }

  const titleHandler = () => {
    if (isActive) {
      return `(${timePP(seconds)}) TomatoTimer`
    }
    return 'TomatoTimer'
  }

  const pomodoro = () => {
    setSeconds(props.pomodoro*60)
    setTimer('pomodoro')
    setIsActive(true)
    props.setCurrentTimerLog({"current":timer, "startTime":new Date(), "description":""})
  }

  const shortBreak = () => {
    setSeconds(props.shortBreak*60)
    setTimer((timer) => 'shortBreak')
    setIsActive(true)
    props.setCurrentTimerLog({"current":timer, "startTime":new Date(), "description":""})
  }

  const longBreak = () => {
    setSeconds(props.longBreak*60)
    setTimer('longBreak')
    setIsActive(true)
    props.setCurrentTimerLog({"current":timer, "startTime":new Date(), "description":""})
  }

  const start = () => {
    if (seconds !== 0) {
      setIsActive(true);
    }

    if (Object.keys(props.currentTimerLog).length === 0) {      
      props.setCurrentTimerLog({"current":timer, "startTime":new Date(), "description":""})
    }
  }

  const stop = () => {
    setIsActive(false);
  }

  const reset = () => {
    console.log(timer);
    
    setIsActive(false);
    if (timer === "pomodoro") {
      setSeconds(props.pomodoro*60);
    } else if (timer === "shortBreak"){
      setSeconds(props.shortBreak*60);
    } else {
      setSeconds(props.longBreak*60);
    }
  }

  const handleSpace = () => {
    setIsActive((isActive) => !isActive)  
  }

  const alarmProps = {
    "isActive": isActive,
    "seconds": seconds,
    "ringerType":props.ringerType,
    "isRinging": props.isRinging,
    "setIsRinging": props.setIsRinging,
    "ringerVolume": props.ringerVolume
  }

  const useKeyPress = () => {
    const [pressedKeys, setPressedKeys] = useState([]);

    const downHandler = ({ key }) => {       
      if (!pressedKeys.includes(key) ) {
        setPressedKeys(previouslyPressedKeys => [...previouslyPressedKeys, key])
      }    
    }

    const upHandler = ({ key }) => {      
      setPressedKeys(previouslyPressedKeys => previouslyPressedKeys.filter(k => (k !== key && k !== key.toLowerCase() && k !== key.toUpperCase())))
    };
    
    useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);

      if (pressedKeys.includes(" ")) {
        setIsActive(currentState => !currentState)        
      } else if (pressedKeys.includes("Alt") && pressedKeys.includes("p") || pressedKeys.includes("Alt") && pressedKeys.includes("P")) {
        pomodoro();        
      } else if (pressedKeys.includes("Alt") && pressedKeys.includes("s") || pressedKeys.includes("Alt") && pressedKeys.includes("S")) {
        shortBreak();
      } else if (pressedKeys.includes("Alt") && pressedKeys.includes("l") || pressedKeys.includes("Alt") && pressedKeys.includes("L")) {
        longBreak();
      } else if (pressedKeys.includes("Alt") && pressedKeys.includes("r") || pressedKeys.includes("Alt") && pressedKeys.includes("R")) {
        reset();
      } 
      
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      }
    }, [pressedKeys])
  }

  useKeyPress()

  return(
    <div>
      <TitleComponent title ={titleHandler()} show={props.showTimerIndicator}/>
      <Alarm {...alarmProps}/>
      <TimerTypes pomodoro={pomodoro} shortBreak={shortBreak} longBreak={longBreak} timer={timer}/>
      <Stopwatch time={timePP()}/>
      <Controls start={start} stop={stop} reset={reset}/>
    </div>
  )
}

export default TimerComponent;
