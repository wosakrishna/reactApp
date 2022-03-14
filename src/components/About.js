
import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  
  return (
    //  p-3 mb-2 bg-success text-white shadow-lg rounded fs-5
   
    <div className="container">
        
        <div className='form-control btn-dark my-3 text-white text-center'><h1>PTE Practice Zone</h1></div>
    <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header " id="headingOne">
            <button className="accordion-button p-3 mb-2 bg-success text-white shadow-lg rounded fs-5" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            
            <strong>Speaking Zone </strong>
            </button>
            </h2>
         
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body " >
            <Link className="btn btn-lg btn-primary my-2 mx-2" aria-current="page" to="Recoder">Read Aloud</Link>
            <Link className="btn btn-lg btn-dark my-2 mx-3" aria-current="page" to="RepertSentence">Repeat Sentence</Link>
            <Link className="btn btn-lg btn-success my-2 mx-3" aria-current="page" to="Des">Describe Image</Link>
            <Link className="btn btn-lg btn-danger my-2 mx-3" aria-current="page" to="RetellLecture">Re-tell Lecture</Link>
            <Link className="btn btn-lg btn-warning  my-2 mx-3" aria-current="page" to="Ansshot">Answer Short Questions</Link>

            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className=" p-3 mb-2 bg-danger text-white shadow-lg rounded fs-5 accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Writing Zone </strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
            <Link className="btn btn-lg btn-primary mx-2" aria-current="page" to="/Sumwt">Summarize written text</Link>
            <Link className="btn btn-lg btn-dark mx-3" aria-current="page" to="Essay">Write Essay</Link>
          
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="p-3 mb-2 bg-primary text-white shadow-lg rounded fs-5 accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Reading Zone</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
            <Link className="btn btn-lg btn-primary my-2 mx-2" aria-current="page" to="Radio">Multiple Type, Single Answer</Link>
            <Link className="btn btn-lg btn-dark my-2 mx-3" aria-current="page" to="Drag">Multiple Type, Multiple Answer</Link>
            <Link className="btn btn-lg btn-success my-2 mx-3" aria-current="page" to="Basket">Reorder Paragraph</Link>
            <Link className="btn btn-lg btn-danger  my-2 mx-3" aria-current="page" to="Abc">Reading Fill In The Blanks</Link>
            <Link className="btn btn-lg btn-warning  my-2 mx-3" aria-current="page" to="Abc">Fill In The Blanks Reading And Writting</Link>

            </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
            <button className="p-3 mb-2 bg-warning text-white shadow-lg rounded fs-5 accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <strong>Listening Zone </strong>
            </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
            <Link className="btn btn-lg btn-primary my-2 mx-2" aria-current="page" to="Summarizespokentext">Summarize Spoken Text</Link>
            <Link className="btn btn-lg btn-dark my-2 mx-2" aria-current="page" to="Abc">MCQ Single Answer</Link>
            <Link className="btn btn-lg btn-success my-2 mx-2" aria-current="page" to="Abc">MCQ Multiple Answer</Link>
            <Link className="btn btn-lg btn-danger my-2 mx-2" aria-current="page" to="Abc">Listening Fill In The Blank</Link>
            <Link className="btn btn-lg btn-warning  my-2 mx-2" aria-current="page" to="Abc">Highlight Correct Summary</Link>
            <Link className="btn btn-lg btn-warning  my-2 mx-2" aria-current="page" to="Abc">Select Missing Word</Link>
            <Link className="btn btn-lg btn-warning  my-2 mx-2" aria-current="page" to="Abc">Highlight Incorrect Word</Link>
            <Link className="btn btn-lg btn-warning  my-2 mx-2" aria-current="page" to="Abc">Write From Dictation</Link>
         
            </div>
            </div>
        </div>
    </div>

</div>
   
  )
}

export default About


// import React, { useState } from 'react'


// const About = () => {
//     const [code, setCode] = useState("red")
//     const [text, setTest] = useState('')
//     const handle = () => {
//         setCode("black")
//     }
//     const handleOnChange = (event) => {
//         setTest(event.target.value)
//     }
//     const handleUpClick = () => {
//         let setText = text.toUpperCase()
//         setTest(setText)

//     }

//     const handleLowerClick = () => {
//         let setText = text.toLowerCase()
//         setTest(setText)

//     }

//     const handlefClick = () => {
//         let arr = text.split(" ");

//         for (var i = 0; i < arr.length; i++) {
//             arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//         }
//         const str2 = arr.join(" ");
//         setTest(str2);

//     }
//     return (
//         <div>
//             <p >this is my current {code} </p>
//             <button onClick={handle}>Change the color</button>

//             <br />
//             <br />
//             <textarea className="form-control" value={text} onChange={handleOnChange} id='' rows="10" cols="10"></textarea>
//             <br />
//             <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
//             <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
//             <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handlefClick}>Convert to Firstcase</button>
//             <p>{text.length > 0 ? text : "Nothing to preview!"}</p>


//         </div>
//     )
// }

// export default About
// import React from "react";




//     const About = ({ hours = 0, minutes = 0, seconds = 0 }) => {
//         // const [paused, setPaused] = React.useState(false);
//         const [over, setOver] = React.useState(false);
//         const [[h, m, s], setTime] = React.useState([hours=0, minutes=0 ,seconds=5]);
      
//         const tick = () => {
//           if ( over) 
//           return;
//           if (h === 0 && m === 0 && s === 0)setOver(true);     
//           else if (m === 0 && s === 0) {
//             setTime([h - 1, 59, 59]);
//           } else if (s === 0) {
//             setTime([h, m - 1, 59]);
//           } else {
//             setTime([h, m, s - 1]);
//           }
//         };
      
//      const start=()=>{
//          console.log("Timesup")
//      }
//      const reset = () => {
//         setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
//        setOver(false);
//        console.log("i am clicked")
//       };
      
//         React.useEffect(() => {
//           const timerID = setInterval(() => tick(), 1000);
        
//           return () => clearInterval(timerID);
        
//         });
        
//   return <div>
//     < div>
//       <p>{`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>

//       <div>{over ? start() : ''}</div>
//       <div>{over ? reset() : ''}</div>
     
//     </div>
 


 

//   </div>;
// };

// export default About;

