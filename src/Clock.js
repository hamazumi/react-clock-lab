import { useState, useEffect } from "react"

export default function Clock() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [intervalHolder, setIntervalHolder] = useState(null)

    const convertDegree = (increment, step) => {
        return (increment / step) * 360
    }

    const stopTimer = (timer) => {
        return clearInterval(timer)
    }

    const time = (secondHand, minuteHand, hourHand) => {
        setSeconds(seconds + 1)
        const secDegrees = convertDegree(seconds, 60)
        secondHand.style.transform = `rotate(${secDegrees}deg)`
        if((seconds % 60) === 0) {
            setMinutes(minutes + 1)
            const minDegrees = convertDegree(minutes, 60)
            minuteHand.style.transform = `rotate(${minDegrees}deg)`
        }
        if((seconds % 3600) === 0) {
            setHours(hours + 1)
            const hourDegrees = convertDegree(hours, 12)
            hourHand.style.transform = `rotate(${hourDegrees}deg)`
        }
    }

 
    useEffect(() => {
        const secondHand = document.getElementById("second")
        const minuteHand = document.getElementById("minute")
        const hourHand = document.getElementById("hour")

        let intervalRun = setInterval(() => {
            let newSecs = seconds + 1
            setSeconds(newSecs)
            const secDegrees = convertDegree(seconds, 60)
            secondHand.style.transform = `rotate(${secDegrees}deg)`
            if((seconds % 60) === 0){
              let newMins = minutes + 1
              setMinutes(newMins)
              const minDegrees = convertDegree(minutes, 60)
              minuteHand.style.transform = `rotate(${minDegrees}deg)`
            }
            if((seconds % 3600) === 0){
              let newHours = hours + 1
              setHours(newHours)
              const hourDegrees = convertDegree(hours, 12)
              hourHand.style.transform = `rotate(${hourDegrees}deg)`
            }
          }, 1000)
        setIntervalHolder(intervalRun)
        console.log(intervalHolder)
        return clearInterval(intervalHolder)
    }, [seconds])

    return (
        <div id="clock">
            <img id="face" src="./img/clockface.png"/>
            <img id="second" src="./img/second-hand.png"/>
            <img id="minute" src="./img/minute-hand.png"/>
            <img id="hour" src="./img/hour-hand.png"/>
        </div>
    )
}