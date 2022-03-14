import * as React from "react";
import { useVoiceRecorder } from "use-voice-recorder";
import { Link } from "react-router-dom";
// import {singleFileUpload} from '../data/api';
import { useState } from "react";
import './main.css';
import logo from './logo.png';
import { FaMicrophone } from 'react-icons/fa';

// import { useHistory } from "react-router-dom";

// import fileDownload from 'js-file-download';

const Des = ({ hours = 0, minutes = 0, seconds = 0 }) => {
    // let history = useHistory();

    const [over, setOver] = React.useState(false);
    const [[h, m, s], setTime] = React.useState([hours = 0, minutes = 0, seconds = 30]);
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
    const btnClick = () => {

        start()
    }


    const reset = () => {
        setTime([parseInt(hours), parseInt(minutes), parseInt("30")]);
        setOver(false);

        if (over) {

            stop()

        }
    }
    const skip = () => {
        start()
        reset()
    }
    const restart = (e) => {
        e.preventDefault();
        setPaused(false)
        setTime([parseInt(hours), parseInt(minutes), parseInt("30")]);

    }


    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => clearInterval(timerID);

    });

    return (
        <div>

            <div className="container-fluid border border-dark  ">
                <div className="form-control text-white bg-dark"><b> Look at the Image below. In 25 seconds,please speak into the microphone and describe in detail what the graph showing. You will have 40 seconds to give your response.</b></div>
                <div className="  my-5 text-center row">
                <div className="col-5 mx-5 text-center border border-info">
                <img src={logo} alt="Logo" />
      </div>
                    <div className="col-5 border border-info">
                    <div className=" text-center"><h3>Recorded your answer</h3></div>
                    <div className="text-center">Recording: {isRecording ? 'Start' : 'Ready for Start'}</div>

                    <div className=" my-5 text-center row">
                        <b>
                            <label htmlFor="">Time left  {`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}  to start recording</label></b>
                        <div>{over ? btnClick() : ''}</div>
                        <div>{over ? reset() : ''}</div>

                        <div className="text-center my-4 ">
                            <button className="border-info" >  <FaMicrophone className="app-logo" onClick={skip} />
                            </button>

                        </div>

                    </div>

                </div>
          
                </div>
                <div className="text-center">
                    {records.map((data, idx) => (
                        <div key={idx}>
                            <audio src={data} controls preload={'metadata'} />
                        </div>
                    ))}</div>
                {/* <div>The survey found that the statistical chances of someone from a poor background being accepted at one of the country's most respected universities are far lower than those of a student from a wealthy family. This means that the inequalities in society are likely to be passed down from one generation to the next.</div> */}
                <div className="text-center "> </div>

                <div className="text-left">
                    <Link to="/Des2" className=" btn btn-success float-end mx-5 my-5  ">Next</Link>
                    <button className="btn btn-info mx-2 my-5" onClick={restart}>Restart</button>
                    <button className=" btn btn-primary mx-2 my-5" onClick={stop}>Submit</button>
                </div>




            </div>
        </div>
    )
}

export default Des;



