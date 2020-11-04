# countdown-react

> Simple, light adn reusable component for countdown timer in react

[![NPM](https://img.shields.io/npm/v/countdown-react.svg)](https://www.npmjs.com/package/countdown-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save countdown-react
```

## Usage

```jsx
import React from 'react'

import CountDown from 'countdown-react'
import 'countdown-react/dist/index.css'

const Example = () => {
  return {
     <CountDown s={35} m={1} h={0}/>
  }
}
```

## Documentation
### parameters
* `s` {`number`} seconds that countdown is going to run
* `m` {`number`} minutes that countdown is going to run
* `h` {`number`} hours that countdown is going to run
* `run` {`boolean`} set this to true whenever you want the countdown to start
* `setRun` {`function`} with this props you can pause or resume the countdown

### full example
```jsx
import React, {useState} from 'react'
import CountDown from 'countdown-react'

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
      <CountDown  s={5} m={minutes} h={hours} run={run} setRun={setRun} />
    </div>
    )
}

export default App

```
## License

MIT © [TahaJm](https://github.com/TahaJm)
