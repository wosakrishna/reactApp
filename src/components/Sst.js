import * as React from "react";
import { useVoiceRecorder } from "use-voice-recorder";
import { Link } from "react-router-dom";
// import {singleFileUpload} from '../data/api';
import  {  useState,useRef } from "react";
//  import { FaMicrophone } from 'react-icons/fa';
// import soundUrl from './beep.mp3'
// import useSound from 'use-sound'
// import { useHistory } from "react-router-dom";

// import fileDownload from 'js-file-download';

const Sst = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  // let history = useHistory();

  const [audioStatus, changeAudioStatus] = useState(true);
  

  const myRef = useRef();


 



  const [over, setOver] = React.useState(false);
  const [[h, m, s], setTime] = React.useState([hours=0, minutes=0 ,seconds=30]);
  // let audio = new Audio("../audio/beep.mp3")
  const [paused, setPaused] = React.useState(false);
  const tick = () => {
    if (paused || over) return;
    if (h === 0 && m === 0 && s === 0)
    
    setOver(true);     
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
      
      // const formData = new FormData();
      // formData.append('file', data);
      // singleFileUpload(formData);
      console.log("hello")
      setPaused(true);
      setTime([parseInt(hours), parseInt(minutes), parseInt("0")]);
      
})
// const btnClick=()=>{
 
//   start()
// }


const reset = () => {
  setTime([parseInt(hours), parseInt(minutes), parseInt("30")]);
 

  setOver(false);
 
  if (over) {
    pauseAudio()
    stop()
   
    }
}
const skip=()=>{
 
  start()
  reset()
}
const restart=(e)=>{

  e.preventDefault();
  setPaused(false)
  changeAudioStatus(true);
  setTime([parseInt(hours), parseInt(minutes), parseInt("30")]);

}


  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
  
    return () => clearInterval(timerID);
  
  });
  const startAudio = () => {
    myRef.current.play();
    changeAudioStatus(true);
    start()
    reset()
  };

  const pauseAudio = () => {
    stop()
    console.log("here");
    myRef.current.pause();

   
  };

  return (
    <div>

      <div className="container border border-dark  ">
        <div className="form-control text-white bg-dark"><b> Look at the text below. In the 30 seconds, you must read this text aloud as naturally and clearly as possible. You have 30 seconds to read aloud.</b></div>
        <div className="container w-50 align-items-center justify-content-center  my-2 border border-info">
          <div className=" text-center"><h3>Recorded your answer</h3></div>
          <div className="text-center">Recording: {isRecording ? 'Start' : 'Ready for Start'}</div>

        <div className=" my-5 text-center "><b>
          <label htmlFor="">Time left  {`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}  to start recording</label></b>
        
          <div>{over ?  startAudio() : ''}</div>
         
          
          <div className="text-center my-4 ">
          {audioStatus? (
         <button className="border rounded-pill btn btn-info  " onClick={startAudio}>skip</button>
  ) : (
    <button  className="border rounded-pill btn btn-info  " disabled="true" onClick={pauseAudio}>Skip</button>
    // <button id="auto" onClick={startAudio}>start</button>
  )}
          <button className="border bg-gradient-light text-dark d-none"  onClick={skip} >    <span role="img" aria-label="Heart">
      skip
    </span>
          </button>
         
          </div>
            <audio id='audio'
             className="audio-element d-none"
                src="../audio/beep.mp3"
               
                controls
      
        ref={myRef}  />
        
       
      </div>
          </div>
          <div className="text-center">    
            {records.map((data, idx) => (
          <div key={idx}>
            <audio src={data} controls preload={'metadata'} />
          </div>
        ))}</div>
          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nemo dolorum eaque earum nesciunt fugit vel voluptate corrupti dolor, reprehenderit aliquid voluptatem laudantium quae quas libero. Cum rerum soluta enim.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit modi, excepturi aliquam sunt nulla debitis explicabo tempore dolore dignissimos id ratione voluptatibus quibusdam fuga hic quisquam eaque reiciendis repudiandae laborum?
          </div>
          <div className="text-center "> </div>

          <div className="text-left">
          <Link to="/about" className=" btn btn-success float-end mx-5 my-5  ">Next</Link>
          <button className="btn btn-info mx-2 my-5"  onClick={restart}>Restart</button> 
          <button className=" btn btn-primary mx-2 my-5"  onClick={pauseAudio}>Submit</button>
            </div>

        
    

  </div>
  </div>
  )
}

export default Sst;



