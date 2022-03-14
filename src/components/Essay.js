
import React,{useState} from 'react'
// import ReactAudioPlayer from 'react-audio-player';
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
// import AudioSpectrum from 'react-audio-spectrum'
import './main.css'
import {MdOutlineTimer} from 'react-icons/md';

const Essay = () => { 
  
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
            You will have 20 minutes to plan, write and revise an essay about the topic below. your response will be judged on how well you develop a position, oraganize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.
            </strong>
            </div>
            <hr/>
            <div className='lead'><>
            <b>
            Some universities deduct marks from students' works if given in late, what are your views and what action will you recommend to take?
            </b></>


            </div>
            <div className="form-control my-3 text-end">
            <span className='mx-2'><MdOutlineTimer /> <Countdown date={Date.now() + 1200000} renderer={renderer} />/20:00</span>
                {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words 

            </div>
            <div>
                <textarea className="form-control my-3" id="myBox" value={text} onChange={handleOnChange} rows="10" cols="10"></textarea>
            </div>
            <div > 
                
                
            <Link to="/Essay2" className="btn btn-primary form-control">Next</Link>
            
            </div>
        </div>
    )
}



export default Essay