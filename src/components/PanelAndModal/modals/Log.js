import React, { useState } from 'react'
import moment from 'moment'

const LogComponent = (props) => {

  const [description, setDescription] = useState("")
  const [pomodorosDoneToday, setPomodorosDoneToday] = useState(Number(localStorage.getItem("pomodorosDoneToday")))


  const formatDate = (date) => {
    return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')
  }

  const handleClearButtonClick = () => {
    localStorage.setItem("timerLog", JSON.stringify([]))
    props.setCurrentTimerLog({})
  }

  const handleClearDoneTodayClick = () => {
    localStorage.setItem('pomodorosDoneToday', 0)
    setPomodorosDoneToday(0)
  }


  const goalDotColor = "pom-goal-circle " + ((pomodorosDoneToday >= props.pomodoroGoal) ? "green-dot" : "red-dot")


  const handleDescriptionSubmit = (event) => {
    const timerLog = JSON.parse(localStorage.getItem("timerLog"))
    const logEntryToUpdate = timerLog.findIndex(entry => entry.id === Number(event.target.id))
    timerLog[logEntryToUpdate].description = description
    localStorage.setItem('timerLog', JSON.stringify(timerLog))
  }

  const log = localStorage.getItem("timerLog") ? JSON.parse(localStorage.getItem("timerLog")) : []

  const logEntries =
    log.map(e => {
      return (
        <tr>
          <td>{e.current}</td>
          <td>{formatDate(e.startTime)}</td>
          <td>{formatDate(e.stopTime)}</td>
          <td><input type="text" id={e.id} value={description} onFocus={(e) => setDescription(e.target.value)}  onChange={(e) => setDescription(e.target.value)} onBlur ={(e) => handleDescriptionSubmit(e)}/></td>
        </tr>
      )
    })


  return (
    <div>
    <h2>Time log</h2>
    <div>
      <div>Pomodoro Goal Tracker: </div>
      <div className={goalDotColor}></div>
    </div>
    <button onClick={() => handleClearDoneTodayClick()}>Clear pomodoro&apos;s done today</button>
    <table>
      <tbody>
        <tr>
          <th>Session</th>
          <th>Start time</th>
          <th>End time</th>
          <th>Description</th>
        </tr>
        {logEntries}
      </tbody>
    </table>
    <button onClick={handleClearButtonClick}>Clear timer log</button>
    </div>
  )
}

export default LogComponent;
