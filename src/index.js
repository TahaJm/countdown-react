import React, { useState, useEffect } from 'react'

const CountDown = ({ s, m, h, run, setRun }) => {
  const [time, setTime] = useState(0)
  const [seconds, setSecconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  useEffect(() => {
    let sec = s
    let min = m
    let hou = h
    if (!s) sec = 0
    if (!m) min = 0
    if (!h) hou = 0

    setTime(parseInt(hou) * 3600 + parseInt(min) * 60 + parseInt(sec))
  }, [s, m, h])
  const secondsToTime = (secs) => {
    const hours = Math.floor(secs / (60 * 60))

    const divisorForMinutes = secs % (60 * 60)
    const minutes = Math.floor(divisorForMinutes / 60)

    const divisorForSeconds = divisorForMinutes % 60
    const seconds = Math.ceil(divisorForSeconds)

    setSecconds(seconds)
    setMinutes(minutes)
    setHours(hours)
  }
  useEffect(() => {
    if (run && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
      if (time === 1) {
        setRun(false)
      }
    } else {
      setRun(false)
    }
    secondsToTime(time)
  })

  return (
    <div>
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    </div>
  )
}

export default CountDown
