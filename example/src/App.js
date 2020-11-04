import React, {useState} from 'react'

import CountDown from 'countdown-react'
import 'countdown-react/dist/index.css'

const App = () => {
  const [run, setRun] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  return (
    <div>
      Seconds:<input value={seconds} onChange={e => setSeconds(e.target.value)}/>
      Minutes:<input value={minutes} onChange={e => setMinutes(e.target.value)}/>
      Hours:<input value={hours} onChange={e => setHours(e.target.value)}/>

      <button onClick={e => setRun(true)}>Start</button>
      <button onClick={e => setRun(false)}>Pause</button>
      <CountDown  s={seconds} m={minutes} h={hours} run={run} setRun={setRun} />
    </div>
    )
}

export default App
