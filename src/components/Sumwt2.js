
import React,{useState} from 'react'
// import ReactAudioPlayer from 'react-audio-player';
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
// import AudioSpectrum from 'react-audio-spectrum'

const Sumwt2 = () => { 
  
    const [text, setText] = useState(''); 
    // const Completionist = () => <span> Time up</span>;
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
         
            return    <Redirect push  to="/About" />
            
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
        <div className='container-fluid  border border-dark'>

            <div className=" form-control text-white bg-dark display-4  ">Summarize written text</div>
            

            <div> <b>
            Read the passage and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. your response will be judge on the quality of your writing and on how well your response presents the key points in the passage.
            </b>
            
            
                
            </div>
            <hr />
            <div className=' '>
            The koala bear, Australia’s national icon, is on the verge of extinction, say wildlife experts and researchers. Wildlife detection dogs that can identify koala bears, and, therefore, their population, is one of the techniques being used to detect how low the density of this species actually is. The community of koala bears has reduced more than ten times in Australia.

Science for Wildlife is working for the conservation of koala bears that are being pushed towards extinction in the mountain regions, due to natural calamities. Once the population of this national treasure gets mapped, community protection groups can help protecting and rehabilitating them.


            </div>
            <div className="form-control my-3 text-end">
                <span className='mx-2'><Countdown date={Date.now() + 600000} renderer={renderer} />/10:00</span>
                {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words 

            </div>
            <div>
                <textarea className="form-control my-3" id="myBox" value={text} onChange={handleOnChange} rows="10" cols="10"></textarea>
            </div>
            <div > 
                
                
            <Link to="/About" className="btn btn-primary form-control">Next</Link>
            
            </div>
        </div>
    )
}



export default Sumwt2