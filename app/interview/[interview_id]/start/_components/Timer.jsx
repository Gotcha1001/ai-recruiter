"use client"

import { Timer as TimerIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function Timer({ isRunning = false, initialTime = 0, onTimeUpdate = null }) {
    const [timer, setTimer] = useState(initialTime)
    const timerRef = useRef(null)

    // For passing the time updates to parent without causing render cycle issues
    const timeUpdateRef = useRef(onTimeUpdate)

    // Update the ref when onTimeUpdate changes
    useEffect(() => {
        timeUpdateRef.current = onTimeUpdate
    }, [onTimeUpdate])

    // Format the timer value (seconds) to HH:MM:SS
    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600)
        const minutes = Math.floor((timeInSeconds % 3600) / 60)
        const seconds = timeInSeconds % 60

        return [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0')
        ].join(':')
    }

    useEffect(() => {
        // Start or stop timer based on isRunning prop
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTimer(prevTimer => {
                    const newTime = prevTimer + 1
                    // Call parent update function after state has been updated
                    if (timeUpdateRef.current) {
                        // Use setTimeout to defer the execution to the next tick
                        setTimeout(() => timeUpdateRef.current(newTime), 0)
                    }
                    return newTime
                })
            }, 1000)
        } else if (timerRef.current) {
            clearInterval(timerRef.current)
        }

        // Clean up interval when component unmounts
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
        }
    }, [isRunning]) // Removed onTimeUpdate from dependency array since we use the ref

    return (
        <span className='flex gap-2 items-center'>
            <TimerIcon /> {formatTime(timer)}
        </span>
    )
}

export default Timer