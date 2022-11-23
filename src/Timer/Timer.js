// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const Timer = () => {
//     const [seconds, setSeconds] = useState(0)
//     const [minutes, setMinutes] = useState(0)
//     var timer = 0
//     useEffect(() => {
//         timer = setInterval(() => {
//             setSeconds(seconds + 1);
//             if (seconds === 59) {
//                 setMinutes(minutes + 1)
//                 setSeconds(0)
//             }
//         }, 1000)
//         return () => clearInterval(timer)
//     })
//     const restart = () => {
//         setMinutes(0)
//         setSeconds(0)
//     }
//     const stop = () => {
//         clearInterval(timer)
//     }
//     return (
//         <div>
//             <h1>Timer</h1>
//             <h2>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h2>
//             <button onClick={restart}>
//                 Restart
//             </button>
//             <button onClick={stop}>
//                 Stop
//             </button>
//         </div>
//     )
// }

// export default Timer

import React, { useEffect, useState } from 'react'
import './Timer.css'
import { useTimer } from 'react-timer-hook';

const Timer = ({ expiryTimestamp }) => {
    const [time, setTime] = useState(0)
    const [startTimer, setSartTimer] = useState(false)
    const [timerId, setTimerId] = useState(0)
    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => alert('onExpire called') });

    // useEffect(() => {
    //     let interValid = null;
    //     if (startTimer) {
    //         interValid = setInterval(() => {
    //             setTime(t => t += 1)
    //         }, 1000)
    //         setTimerId(interValid)
    //     } else {
    //         clearInterval(timerId)
    //     }
    //     return () => clearInterval(timerId)
    // }, [startTimer])
    useEffect(() => {
        pause()
    }, [])
    const handlClick = () => {
        pause()
    }
    const handleChange = () => {
        if (seconds < 10) {
            console.log('sdf');
        }
    }
    return (
        <div className='container'>
            {/* <div className="time">{time}</div>
            <div className="button_wrap">
                <div className={startTimer && 'not_allowed'}>
                    <button className={`button btn_start ${startTimer && 'disable'}`} onClick={() => setSartTimer(true)}>Start</button>
                </div>
                <div className={!startTimer && 'not_allowed'}>
                    <button className={`button btn_stop ${!startTimer && 'disable'}`} onClick={() => setSartTimer(false)}>Stop</button>
                </div>
            </div> */}
            <div style={{ textAlign: 'center' }}>
                <h1>react-timer-hook </h1>
                <p>Timer Demo</p>
                <div style={{ fontSize: '100px', color: 'black' }} onChange={handleChange}>
                    <span>{minutes < 10 ? '0' + minutes : minutes}</span>:
                    <span>{seconds < 10 ? '0' + seconds : seconds}</span>
                </div>
                <p>{isRunning ? 'Running' : 'Not running'}</p>
                <button onClick={start}>Start</button>
                <button onClick={() => handlClick()}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 180);
                    restart(time)
                }}>Restart</button>
            </div>
        </div>
    )
}

export default Timer


// import React from "react";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import './Timer.css'


// const minuteSeconds = 60;
// const hourSeconds = 3600;

// const timerProps = {
//     isPlaying: true,
//     size: 100,
//     strokeWidth: 5
// };

// const renderTime = (dimension, time) => {
//     return (
//         <div className="time-wrapper">
//             <div className="time">{time}</div>
//             <div>{dimension}</div>
//         </div>
//     );
// };

// const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
// const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

// export default function Timer() {
//     const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
//     const endTime = stratTime + 30; // use UNIX timestamp in seconds

//     const remainingTime = endTime - stratTime;

//     return (
//         <div className="Timer">
//             <CountdownCircleTimer
//                 {...timerProps}
//                 colors="#EF798A"
//                 duration={hourSeconds}
//                 initialRemainingTime={remainingTime % hourSeconds}
//                 onComplete={(totalElapsedTime) => ({
//                     shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
//                 })}
//             >
//                 {({ elapsedTime, color }) => (
//                     <span style={{ color }}>
//                         {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
//                     </span>
//                 )}
//             </CountdownCircleTimer>
//             <CountdownCircleTimer
//                 {...timerProps}
//                 colors="#218380"
//                 duration={minuteSeconds}
//                 initialRemainingTime={remainingTime % minuteSeconds}
//                 onComplete={(totalElapsedTime) => ({
//                     shouldRepeat: remainingTime - totalElapsedTime > 0
//                 })}
//             >
//                 {({ elapsedTime, color }) => (
//                     <span style={{ color }}>
//                         {renderTime("seconds", getTimeSeconds(elapsedTime))}
//                     </span>
//                 )}
//             </CountdownCircleTimer>
//         </div>
//     );
// }


// import React from "react";

// const App = () => {
//     const [time, setTime] = React.useState(0);
//     const [timerOn, setTimerOn] = React.useState(false);

//     React.useEffect(() => {
//         let interval = null;

//         if (timerOn) {
//             interval = setInterval(() => {
//                 setTime((prevTime) => prevTime + 10);
//             }, 10);
//         } else if (!timerOn) {
//             clearInterval(interval);
//         }

//         return () => clearInterval(interval);
//     }, [timerOn]);

//     return (
//         <div className="Timers">
//             <h2>Stopwatch</h2>
//             <div id="display">
//                 <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
//                 <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
//                 <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
//             </div>

//             <div id="buttons">
//                 {!timerOn && time === 0 && (
//                     <button onClick={() => setTimerOn(true)}>Start</button>
//                 )}
//                 {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
//                 {!timerOn && time > 0 && (
//                     <button onClick={() => setTime(0)}>Reset</button>
//                 )}
//                 {!timerOn && time > 0 && (
//                     <button onClick={() => setTimerOn(true)}>Resume</button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default App;


// import React from 'react'
// import { useState, useEffect } from 'react';

// const Timer = () => {
//     const [minutes, setMinutes] = useState(3);
//     const [seconds, setSeconds] = useState(0);
//     useEffect(() => {
//         let myInterval = setInterval(() => {
//             if (seconds > 0) {
//                 setSeconds(seconds - 1);
//             }
//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     clearInterval(myInterval)
//                 } else {
//                     setMinutes(minutes - 1);
//                     setSeconds(59);
//                 }
//             }
//         }, 1000)
//         return () => {
//             clearInterval(myInterval);
//         };
//     });

//     return (
//         <div>
//             <h1>CountDown</h1>
//             {minutes === 0 && seconds === 0
//                 ? null
//                 : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
//             }
//         </div>
//     )
// }

// export default Timer;