import React, { useEffect, useState } from 'react'

const Displayclock = () => {

    const newTime = new Date();

    const [second, setSecond] = useState(newTime.getSeconds())
    const [minute, setMinute] = useState(newTime.getMinutes())
    const [hour, setHour] = useState(newTime.getHours())

    

    let newSecond = second;
    let newMinute = minute;
    let newHour = hour;

    var timerFunction = 0;

    function handleChange() {
        newSecond = second + 1

        if (newSecond > 59) {
            newSecond = 0;
            newMinute = minute + 1;
            setMinute(newMinute)
        }

        if(newMinute > 59){
            newMinute = 0
            setMinute(newMinute)
            newHour = hour + 1;
            setHour(newHour)
        }

        if(newHour > 23){
            newHour = 0
            setHour(newHour)
        }

        setSecond(newSecond)
    }

    function stopChange(){
        clearTimeout(timerFunction)
    }


    useEffect(() => {

       setHour(newHour)
       setMinute(newMinute)
       setSecond(newSecond)

       timerFunction = setTimeout(() => handleChange(), 10)

    })

    return (
        <div>

            <div>
                <button onClick={handleChange}>Start</button>

                <button onClick={stopChange}>Stop</button>
            </div>

            {hour} : {minute} : {second}
        </div>
    )
}

export default Displayclock