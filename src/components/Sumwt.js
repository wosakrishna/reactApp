
import React,{useState} from 'react'
// import ReactAudioPlayer from 'react-audio-player';
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
// import AudioSpectrum from 'react-audio-spectrum'
import './main.css'
const Sumwt = () => { 
  
    const [text, setText] = useState(''); 
    // const Completionist = () => <span> Time up</span>;
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
         
            return    <Redirect push  to="/Sumwt2" />
            
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
            

            <div> <strong>
            Read the passage and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. your response will be judge on the quality of your writing and on how well your response presents the key points in the passage.
            </strong>
            </div>
            <hr className='hr'/>
            <div className=' '>
            Currently, it appears quite possible that the two most dreaded diseases - cardiovascular disease and cancer - can be treated or prevented with the use of catechins, a group of polyphenol compounds found in tea leaves. This protective agent is found in the Australian gardens that grow tea. Some of the varieties of tea that contain catechins are White Tea, Green Tea, Oolong Tea (semi-fermented), and Black Tea (completely fermented). Black Tea and Oolong Tea are considered to be less effective for treatment because of their degrees of oxidation. 

Amongst other things, tea polyphenols help prevent deposits that narrow the arteries. Prostate cancer in men can be slowed down with a daily dose of Green Tea. Acute hepatic failure, caused by inflammation or oxidative stress, can also be healed with Green Tea.


            </div>
            <div className="form-control my-3 text-end">
                <span className='mx-2'><Countdown date={Date.now() + 600000} renderer={renderer} />/10:00</span>
                {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words 

            </div>
            <div>
                <textarea className="form-control my-3" id="myBox" value={text} onChange={handleOnChange} rows="10" cols="10"></textarea>
            </div>
            <div > 
                
                
            <Link to="/Sumwt2" className="btn btn-primary form-control">Next</Link>
            
            </div>
        </div>
    )
}



export default Sumwt