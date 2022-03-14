
import * as React from "react";
// import ReactAudioPlayer from 'react-audio-player';
import { useVoiceRecorder } from "use-voice-recorder";
import { Link } from "react-router-dom";
import  {  useState,useRef } from "react";


  
const Ansshot3 = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [over, setOver] = React.useState(false);
  const [audioStatus, changeAudioStatus] = useState(true);
      
   
    const myRef = useRef();

  const [[h, m, s], setTime] = React.useState([hours=0, minutes=0 ,seconds=3]);

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
   
      setPaused(true);
      setTime([parseInt(hours), parseInt("0"), parseInt("0")]);
      
})
const btnClick=()=>{
   start()
}

const reset = () => {
  setTime([parseInt(hours), parseInt(0), parseInt(3)]);
    setOver(false);
    stop()
    
}
const skip=()=>{
    
  start()
    reset()
}
const restart=(e)=>{
  e.preventDefault();
  setPaused(false)
  setTime([parseInt(hours), parseInt(minutes), parseInt(5)]);
  myRef.current.play();
  changeAudioStatus(true);

}


  React.useEffect(() => {
   
    const timerID = setInterval(() => tick(), 1000);
    
    return () => clearInterval(timerID);
  
  });
 

const startAudio = () => {
    myRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    console.log("here");
    myRef.current.pause();
    changeAudioStatus(false);
    start()
    reset()
  };
 

  return (
    <div>

      <div className="container border border-dark  ">
        <div className="form-control text-white bg-dark"><b> Look at the text below. In the 30 seconds, you must read this text aloud as naturally and clearly as possible. You have 30 seconds to read aloud.</b></div>
        <div className="container w-50 align-items-center justify-content-center  my-2 border border-info">
          <div className=" text-center"><h3>Recorded your answer</h3></div>
          <div className="text-center">Recording: {isRecording ? 'Start' : 'Ready for Start'}</div>

        <div className=" my-5 text-center "><b>
          <label htmlFor="">Time left {`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}  to start recording</label></b>
          <audio id='audio'
                 className="audio-element d-none"
                    src="../audio/Ans3.mp3"
                   autoPlay
                    controls
            //    onPlay={Adu}
            //    ref={audioRef}
            ref={myRef}
            //    onLoadedMetadata={timr}
                                        />
         { over ?  btnClick() :''}
          { over ? reset() : ''}
          
          <div className="text-center my-4 ">
          {audioStatus ? (
             <button className="border rounded-pill btn btn-info  " onClick={pauseAudio}>skip</button>
      ) : (
        <button  className="border rounded-pill btn btn-info  " disabled onClick={startAudio}>skip</button>
        // <button id="auto" onClick={startAudio}>start</button>
      )}


          <button className="border bg-gradient-light text-dark d-none "   onClick={skip}  >   
           <span role="img" aria-label="Heart">
             skip
          </span>
          </button>
         
          </div>
        
        
         
       
    
      </div>
          </div>
          <div className="text-center">    
            {records.map((data, idx) => (
          <div key={idx}>
            <audio src={data} controls preload={'metadata'} />
          </div>
        ))}</div>
         
          <div className="text-center "> </div>

          <div className="text-left">
          <Link to="/about" className=" btn btn-success float-end mx-5 my-5  ">Next</Link>
          <button className="btn btn-info mx-2 my-5"  onClick={restart}>Restart</button> 
          <button className=" btn btn-primary mx-2 my-5"  onClick={stop}>Submit</button>
            </div>

        
    

  </div>
  </div>
  )
}

export default Ansshot3;
