import React,{useState} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import Countdown from "react-countdown";
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import AudioSpectrum from 'react-audio-spectrum'
const Aca = () => {
  
    const [text, setText] = useState(''); 
 
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            return    <Redirect push  to="/Acb" />
       

            
        } else {
            return (
                <span>
                    {minutes}:{seconds}
                </span>
            );
        }
    };
    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }


    return (
        <div>

            <div className="form-control my-1 bg-danger  text-dark">Summarize Spoken Text</div>
            <div>
                <ReactAudioPlayer id='audio-element' className="audio-element form-control my-3 "
                    src="../audio/grav-matin.mp3"
                    autoPlay
                    controls
                />
                               <AudioSpectrum
               className="form-control my-3"
              id="audio-canvas"
              height={100}
              width={1100}
              audioId={'audio-element'}
              capColor={'red'}
              capHeight={2}
              meterWidth={5}
              meterCount={512}
              meterColor={[
                {stop: 0, color: '#f00'},
                {stop: 0.5, color: '#0CD7FD'},
                {stop: 1, color: 'red'}
              ]}
              gap={1}
            />

            </div>
            <div className="form-control my-3 text-end">
                <span className='mx-2'><Countdown date={Date.now() + 120000} renderer={renderer} />/20:00</span>
                {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words 

            </div>
            <div>
                <textarea className="form-control my-2" id="myBox" value={text} onChange={handleOnChange} rows="10" cols="10"></textarea>
            </div>
            <div > 
            <Link to="/Acb" className=" form-control btn btn-primary">Next</Link>
            </div>
        </div>
    )
}

export default Aca