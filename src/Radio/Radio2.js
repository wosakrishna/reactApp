import * as React from "react";

import {Link} from "react-router-dom";
// import {singleFileUpload} from '../data/api';
import {useState} from "react";

// import { useHistory } from "react-router-dom"; import fileDownload from
// 'js-file-download';

const Radio2 = () => {
    // let history = useHistory();
    const [checked,
        setChecked] = useState([]);
    const checkList = ["He achieved success rapidly.", "He completed his degree in 1910.", "He studied medicine.", "His abilities were evident at a young age.", "He was born in Africa."];

    // let audio = new Audio("../audio/beep.mp3")

    // const checkedItems = checked.length
    //     ? checked.reduce((total, item) => {
    //         return total + ", " + item;
    //     })
    //     : "";

    const handleCheck = (event) => {
      
        setChecked(event.target.value);
    };
    

    return (
        <div>

            <div className="container-fluid border border-dark  ">
                <div className="form-control text-white bg-dark">
                    <b>
                        Read the text and answer the question by selecting all the correct responses.
                        More than one response is correct.</b>
                </div>
                <div className="  my-5 text-center row">
                    <div className="col-5 mx-5 text-center border border-info">
                        When he was awarded an Honorary Degree by the University of Newcastle, even John
                        Robertson himself must surely have looked back in wonder at his astonishing rise
                        to success. The year was 1910, and those assembled were to hear not only of his
                        generosity to the University, which enabled it to contribute to the pioneering
                        research into tropical diseases being carried out at that time, but also of his
                        humanitarian work in southern Africa, where he was ahead of his time in
                        improving the working conditions of local mine workers. To those who knew John
                        in his youth, it will have come as no surprise to hear of his success. He was
                        now enjoying the rewards of the fierce determination, desire to succeed and
                        extraordinary ability to acquire knowledge, which they had noticed in the young
                        man.
                    </div>
                    <div className="col-5 border border-info">
                        <div className=" title">
                            <h3>What does the reader of this text learn about John Robertson?</h3>
                        </div>

                        <div className="list-container">
                            {checkList.map((item, index) => (
                                <div key={index}>
                                    <input name="Radio" value={item} type="radio" onChange={handleCheck}/>
                                    <span className={(item)}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        Items checked are: {checked}

                    </div>

                </div>

                < div className = "text-left" > <Link to="/about" className=" btn btn-success float-end mx-5 my-5  ">Next</Link> <button className = " btn btn-primary mx-2 my-5" > Submit </button>
                </div > </div> </div>
    )
}

export default Radio2;
