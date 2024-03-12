import React, { useEffect, useState } from 'react'

const Displayclock = () => {

    const[second, setSecond] = useState(0)
    const[minute, setMinute] = useState(0)
    const[hour, setHour] = useState(0)

    // const newTime = new Date();

    // let getSecond = newTime.getSeconds();
    // let getMinute = newTime.getMinutes();
    // let getHour = newTime.getHours();

    let getSecond = 25;
    let getMinute = 30;
    let getHour = 12;

    useEffect(()=>{

        setSecond(getSecond)
        setMinute(getMinute)
        setHour(getHour)

        setInterval(()=>{

            if(getSecond > 59){
                getSecond = 0

                // setSecond(getSecond)

                getMinute = getMinute + 1

                // setMinute(getMinute)

                if(getMinute > 59){
                    getMinute = 0

                    // setMinute(getMinute)

                    getHour = getHour + 1

                    // setHour(getHour)

                    if(getHour > 23){
                        getHour = 0

                        // setHour(getHour)
                    }
                }

                else{
                    getMinute = getMinute + 1; 

                    // setMinute(getMinute)
                }
            }

            else{
                getSecond = getSecond + 1

                // setSecond(getSecond)
            }

            

        },1000)

    })

  return (
    <div>

        {hour} : {minute} : {second}
    </div>
  )
}

export default Displayclock