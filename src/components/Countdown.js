import React, { useState, useRef, useEffect  } from 'react'


  
const App = () => {


 
    const Ref = useRef(null);
  

    const [timer, setTimer] = useState('00:00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
      const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
              setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            
                )         
        }
        if (total === 0){
          console.log("timeup")
        }
    }
  
  
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:00:10');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
        // eslint-disable-next-line 
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());

    }
  
    return (
        <div className="App">
            <h2>{timer} </h2>
            <button onClick={onClickReset}>Reset</button>
            
        </div>
    )
}
  
export default App;
// import "../App.css";
// import React, { useState, useEffect } from "react";
// import Clock from "./Clock";

// function App() {
//   const [timerDays, setTimerDays] = useState();
//   const [timerHours, setTimerHours] = useState();
//   const [timerMinutes, setTimerMinutes] = useState();
//   const [timerSeconds, setTimerSeconds] = useState();

//   let interval;

//   const startTimer = () => {
//     const countDownDate = new Date().getSeconds()+20;
  
//     interval = setInterval(() => {
//       const now = new Date().getSeconds()+20;
      
//       const distance = countDownDate - now;
      
//       const days = Math.floor(distance / (24 * 60 * 60 * 1000));
//       const hours = Math.floor(
//         (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
//       const seconds = Math.floor((distance % (60 * 1000)) / 1000);

//       if (distance < 0) {
//         // Stop Timer

//         clearInterval(interval.current);
//       } else {
//         // Update Timer
//         setTimerDays(days);
//         setTimerHours(hours);
//         setTimerMinutes(minutes);
//         setTimerSeconds(seconds);
//       }
//     });
//   };

//   useEffect(() => {
//     startTimer();
//   });
//   const time =()=>
//   {
//       console.log(new Date().getSeconds())
//   }

//   return (
//     <div className="App">
//       <Clock
//         timerDays={timerDays}
//         timerHours={timerHours}
//         timerMinutes={timerMinutes}
//         timerSeconds={timerSeconds}
//       />
//       <button  onClick={time}>get </button>
//     </div>
//   );
// }

// export default App;
