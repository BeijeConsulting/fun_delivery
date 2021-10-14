import React, { useState } from 'react'

const CountDownDaysTimer = (props) => {

    let time = props.time



    const { days = 0, hours = 0, minutes = 0, seconds = 0 } = time;
    const [[ds, hrs, mins, secs], setTime] = useState([days, hours, minutes, seconds]);


    const tick = () => {

        if (ds === 0 && hrs === 0 && mins === 0 && secs === 0)
            reset()
        else if (hrs === 0 && mins === 0 && secs === 0) {
            setTime([ds - 1, 23, 59, 59])
        }
        else if (mins === 0 && secs === 0) {
            setTime([ds, hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([ds, hrs, mins - 1, 59]);
        } else {
            setTime([ds, hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(days), parseInt(hours), parseInt(minutes), parseInt(seconds)]);


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });


    return (
        <div style={{ letterSpacing: "10px" }}>
            {`${ds.toString().padStart(2, '0')}:${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
        </div>
    );
}

export default CountDownDaysTimer;