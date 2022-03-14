import './main.css'
import React,{useEffect,useState,useRef} from 'react';
import { useHistory } from 'react-router-dom';

const Cha = () => {
  let history = useHistory();
  const [text, setText] = useState(''); 
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

}




  const handleOnChange = (event)=>{
    setText(event.target.value) 
}
const handleClick1=()=>{
  history.push('/Countdown')
}
  
const clearTimer = (e) => {
    setTimer('00:00:10');
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
        startTimer(e);
    }, 1000)
    Ref.current = id;
}

const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
}
  useEffect(() => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
    // eslint-disable-next-line

  
    clearTimer(getDeadTime());
    // eslint-disable-next-line

   }, [])


    return (
          
        <div>
          
        <div className="form-control my-3 bg-danger  text-dark">Summarize Spoken Text</div>
        <div>
        <audio controls   className="audio-element form-control my-3 ">
        <source src="../audio/speaking.mp3"></source>  
        </audio></div>   
        <div className="form-control my-3 text-end">
             <span className='mx-2'>{timer }</span> 
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters

        </div>
        <div>
          <textarea className="form-control my-3" id="myBox" value={text} onChange={handleOnChange} rows="10" cols="10"></textarea>
        </div>
        <div > <button type="button"  className="btn btn-primary" onClick={handleClick1}>Update Note</button></div>
      </div>
    )
}

export default Cha
