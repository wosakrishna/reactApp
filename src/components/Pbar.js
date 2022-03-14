
import React, { useState, useEffect } from 'react'

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Pbar() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])


  useEffect(() => {
	const handleListen = () => {
		if (isListening) {
		  mic.start()
		  mic.onend = () => {
			console.log('continue..')
			mic.start()
		  }
		} else {
		  mic.stop()
		  mic.onend = () => {
			console.log('Stopped Mic on Click')
		  }
		}
		mic.onstart = () => {
		  console.log('Mics on')
		}
	
		mic.onresult = event => {
		  const transcript = Array.from(event.results)
			.map(result => result[0])
			.map(result => result.transcript)
			.join('')
		  console.log(transcript)
		  setNote(transcript)
		  mic.onerror = event => {
			console.log(event.error)
		  }
		}
	  };
	handleListen()
  

  }, [isListening]);
  

  

  const handleSaveNote = () => {

    setSavedNotes([...savedNotes, note])
    var Note=[...savedNotes, note]
    localStorage.setItem('NOTE', JSON.stringify(Note));
    setNote("")
  }

  return (
    <>
      <h1>Voice Notes</h1>
      <div className="container">
        <div className="box">
          <h2>Current Note</h2>
          <div>The Council will vote on the draft resolution at 3 pm Friday (New York time), two days after it held an emergency meeting on the situation in Ukraine just as Putin had announced Moscow's invasion of Ukraine. A senior US administration official said Washington is putting forward the resolution “with every expectation that Russia will use its veto” and in doing so, "they will underscore their isolation </div>
          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <button onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>
          <p>{note}</p>
        </div>
        <div className="box">
          <h2>Notes</h2>
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </div>
    </>
  )
}

export default Pbar































// import React from 'react';

// import '../data/p.css';
// const Pbar = ({done}) => {
//     const [style, setStyle] = React.useState({});
//     React.useState({});
	
// 	setTimeout(() => {
// 		const newStyle = {
// 			opacity: 1,
// 			width: `${done}%`
// 		}
		
// 		setStyle(newStyle);
// 	}, 1000);
//   return    	<div className="progress">
//   <div className="progress-done" style={style}>
//       {done}%
     
//   </div>
// </div>
// };

// export default Pbar;
