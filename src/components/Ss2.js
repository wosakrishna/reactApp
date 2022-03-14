import React from 'react';
import { singleFileUpload } from '../data/api';
import { useState } from "react";
import { useVoiceRecorder } from "use-voice-recorder";

import { useHistory } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
// import { Link } from "react-router-dom";
const Ss2 = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  let history = useHistory();
  const [over, setOver] = React.useState(false);
  const [[h, m, s], setTime] = React.useState([hours=0, minutes=0 ,seconds=5]);
  let audio = new Audio("../audio/beep.mp3")
  const tick = () => {
    if ( over) 
    return;
    if (h === 0 && m === 0 && s === 0)setOver(true);     
    else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

    const [records, updateRecords] = useState([]);
   
    const { isRecording, stop, start } = useVoiceRecorder((data) => {
      updateRecords([...records, window.URL.createObjectURL(data)]
      );   
      const formData = new FormData();
      formData.append('file', data);
      singleFileUpload(formData);
 audio.pause()
      history.push('/Ss3')
})
const btnClick=()=>{
 
  start()
 
}

const reset = () => {
  setTime([parseInt(hours), parseInt(minutes), parseInt("5")]);
  // audio.play()
 setOver(false);
    if (over) {
     
      stop()
    }
}








 
  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
  
    return () => clearInterval(timerID);
  
  });


  return <div>
  <h3>Recording : {isRecording ? 'on' : 'off'}</h3>
  <div className="form-control my-3 bg-danger  text-dark">Summarize Spoken Text
    <span className='mx-2'>   {`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`} 
    </span>
    
    <div>{over ?  btnClick() : ''}</div>
    <div>{over ? reset() : ''}</div>
    
    </div>
    {/* <audio  className="audio-element d-none">
          <source src="../audio/beep.mp3"></source>
        </audio> */}
     
  <p className="form-control my-3 blockquote"  >Despite a number of events in recent years devoted to language diversity, language endangerment, and multilingualism, such as the International Year of Languages in 2008, public awareness of the issues is still remarkably limited. Only one in four of the population know that half the languages of the world are so seriously endangered that they are unlikely to survive the present century.</p>
  <div className='form-control'>
    <button  onClick={() => { start(); reset();}}>Start</button>
    <button onClick={stop}>Stop</button></div>
  {/* <div> <Link to="/Sst" onClick={handleClick} className="btn btn-primary">NEXT</Link></div> */}
  <div>
    <h1>Your Recording:</h1>
    {records.map((data, idx) => (
      <div key={idx}>
        <audio src={data} controls preload={'metadata'} />
      </div>
    ))}
  </div>
</div>;
};

export default Ss2;























































// import React from 'react';
// import Countdown from "react-countdown";
// // import { Link } from "react-router-dom";
// // import { Redirect } from 'react-router-dom';
// import { useVoiceRecorder } from "use-voice-recorder";
// import { useState,useRef } from "react";
// import { singleFileUpload } from '../data/api';


// const Sst = () => {
//   const [time, setTime] = useState();
//   const [records, updateRecords] = useState([]);
//   const ref = useRef(null)
//   const { isRecording, stop, start } = useVoiceRecorder((data) => {
//     updateRecords([...records, window.URL.createObjectURL(data)]
//     );   
//     const formData = new FormData();
//     formData.append('file', data);
//     singleFileUpload(formData);
     
//   });

//     const s_time = ({  minutes, seconds, completed }) => {
//    if(completed){
  
  
//    console.log(completed)
     
//    }

//       return (
//         <span>
//             {"0"+minutes}:{seconds}
//         </span>
//     );
   
  
//   };






//   return <div>
//     <h3>Recording : {isRecording ? 'on' : 'off'}</h3>
//     <div className="form-control my-3 bg-danger  text-dark">Summarize Spoken Text
//       <span className='mx-2'><Countdown date= {Date.now()+30000} renderer={s_time}/>/20:00 </span>
          
//       </div>

//     <label htmlFor="myInput" className="form-control my-3"  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi doloribus maxime dolor, autem nisi veniam perferendis suscipit iste corrupti facilis nobis quae inventore quas quia sed! Accusantium saepe suscipit necessitatibus
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi doloribus maxime dolor, autem nisi veniam perferendis suscipit iste corrupti facilis nobis quae inventore quas quia sed! Accusantium saepe suscipit necessitatibus</label>
//     <div className='form-control'>
//       <button ref={ref} onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button></div>
//     <div>
//       <h1>Your Recording:</h1>
//       {records.map((data, idx) => (
//         <div key={idx}>
//           <audio src={data} controls preload={'metadata'} />
//         </div>
//       ))}
//     </div>
//   </div>;

// };

// export default Sst;

