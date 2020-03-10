import {createStore} from 'redux'
// const [showTimerIndicator, setShowTimerIndicator] = useState((localStorage.getItem('showTimerIndicator')) ? localStorage.getItem('showTimerIndicator')==='true' : true)
// const [ringerType, setRingerType] = useState(localStorage.getItem('ringerType') || "DoorBell")
// const [ringerVolume, setRingerVolume] = useState(localStorage.getItem('ringerVolume') || 1)
// const [pomodoro, setPomodoro] = useState(localStorage.getItem('pomodoro') || 25)
// const [shortBreak, setShortBreak] = useState(localStorage.getItem('shortBreak') || 5)
// const [longBreak, setLongBreak] = useState(localStorage.getItem('longBreak') || 10)
// const [pomodoroGoal, setPomodoroGoal] = useState(localStorage.getItem('pomodoroGoal') || 1)
// const [currentTimerLog, setCurrentTimerLog] = useState({})

const initialState = {
  "settings": {
    "showTimerIndicator": (localStorage.getItem('showTimerIndicator')) ? localStorage.getItem('showTimerIndicator')==='true' : true)
  }
}

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
)

function reducer(state, { type, payload }) {
  switch(type){
    case "TOGGLE_TIMER_INDICATOR":
      return{
        ...state,
        "showTimerIndicator": 
      }
  }
}

export const addTodoAction = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
})

export const addTodoAction = (todo) => ({
  type: 'TOGGLE_TODO',
  payload: todo
})
