import './App.css';
import './main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NextNProgress from "nextjs-progressbar";
import Navbar from './components/Navbar';
// import { Home } from './components/Home';
import About from './components/About';
// import ConnectUs from './components/ConnectUs';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import React, { useState } from 'react';
import Recoder from './components/Recoder';
// import Countdown from './components/Countdown';
// import Sound from './components/Sound';
// import Test from './components/Ac';
// import Sst from './components/Ac2';
import Aca from './components/Aca';
import Acb from './components/Ac4';
import Abt from './components/Sst';
import Ss2 from './components/Ss2';
import Ss3 from './components/Ss3';
import Clock from './components/Clock';
import Pbar from './components/Pbar';
import Count from './components/Count';
import Est from './components/Test';
import Readaloud from './components/Readaloud';
// import Pbar from './components/Pbar';
import Check from './components/Check';
import Des from './components/Des';
import Des2 from './components/Des2';
import Sumwt from './components/Sumwt';
import Sumwt2 from './components/Sumwt2';
import Essay from './components/Essay';
import Essay2 from './components/Essay2';
import Drag from './Drag/Drag'
import Drag2 from './Drag/Drag2';
import Radio from './Radio/Radio';
import Radio2 from './Radio/Radio2';
import Reorder from './Reorder/Reorder';
import Basket  from './hold/Basket';
import PetCard from './hold/PetCard';
import DragDrop from './DragAndDrop/DragDrop';
import Player from './DragAndDrop/Player';
import RepertSentence from './Repert Sentanc/RepertSentence';
import RepertSentence2 from './Repert Sentanc/RepertSentence2';
import RetellLecture from './Retell_Lecture/Retell_Lecture';
import RetellLecture2 from './Retell_Lecture/Retell_Lecture2';
import Ansshot from './Answershot/Ansshot';
import Ansshot2 from './Answershot/Ansshot2';
import Ansshot3 from './Answershot/Ansshot3';
import Hand from './Retell_Lecture/Hand'
import Summarizespokentext from './Summarize/Summarizespokentext';
import Summarizespokentext2 from './Summarize/Summarizespokentext2';
import Summarizespokentext3 from './Summarize/Summarizespokentext3';



function App() {
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}





  return (
    <>
    
      <NoteState>
        <Router>
        <NextNProgress/>
          <Navbar />
        
           <Alert alert= {alert} />
         
          <div className="container">
        
            <Switch>
          
              <Route exact path="/">
                <About showAlert={showAlert}/>
             
              </Route>
              <Route exact path="/about">
                <About    />
              </Route>
        
              {/* <Route exact path="/connact">
                <ConnectUs  showAlert={showAlert}/>
                </Route> */}
                <Route exact path="/Recoder">
                <Recoder  />
                </Route>
                {/* <Route exact path="/Countdown">
                <Countdown  />
                </Route> */}
                {/* <Route exact path="/Sound">
                <Sound  />
                </Route> */}
                {/* <Route exact path="/Test">
                <Test  />
                  </Route> */}
                  {/* <Route exact path="/Sst">
                  <Sst/>
                
                  </Route> */}
                  <Route exact path="/Aca">
                 
                  <Aca/>
                  </Route>
                  <Route exact path="/Acb">
                 
                 <Acb/>
                 </Route>
                 <Route exact path="/Abc">
                 
                 <Abt/>
                 </Route>
                 <Route exact path="/Ss2">
                 
                 <Ss2/>
                 </Route>
                 <Route exact path="/Ss3">
                 
                 <Ss3/>
                 </Route>
                 <Route exact path="/Clock">
                 
                 <Clock/>
                 </Route>
                 <Route exact path="/Pbar">
                 
                 <Pbar done="100"/>
                 </Route>
                 <Route exact path="/Count">
                 
                 <Count/>
                 </Route>
                 <Route exact path="/Est">
                 
                 <Est/>
                 </Route>
                 <Route exact path="/Readaloud">
                 
                 <Readaloud/>
                 </Route>
                 <Route exact path="/Check">
                 
                 <div style={{ width: "200px" }}>
    <Check />
  </div>
                 </Route>
                 <Route exact path="/Des">
                 
                 <Des/>
                 </Route>
                 <Route exact path="/Des2">
                 
                 <Des2/>
                 </Route>
                 <Route exact path="/Sumwt">
                 
                 <Sumwt/>
                 </Route>
                 <Route exact path="/Sumwt2">
                 
                 <Sumwt2/>
                 </Route>
                 <Route exact path="/Essay">
                 
                 <Essay/>
                 </Route>
                 <Route exact path="/Essay2">
                 
                 <Essay2/>
                 </Route>
                 
               
                 <Route exact path="/Drag">
                 
                 <Drag  />
                 </Route>
                 <Route exact path="/Drag2">
                 
                 <Drag2  />
                 </Route>
                 <Route exact path="/Radio">
                 
                 <Radio  />
                 </Route>
                 <Route exact path="/Radio2">
                 
                 <Radio2  />
                 </Route>
                 <Route exact path="/Reorder">
                 
                 <Reorder  />
                 </Route>
                  <Route exact path="/Basket">
                 
                 <Basket  />
                 </Route>
                 <Route exact path="/PetCard">
                 
                 <PetCard  />
                 </Route>
                 <Route>
                 <Route exact path="/DragDrop">
                 
                 <DragDrop />
                 </Route>
                 <Route exact path="/Player">
                 
                 <Player />
                 </Route>
                 <Route exact path="/RepertSentence">
                 
                 <RepertSentence />
                 </Route>
                 <Route exact path="/RepertSentence2">
                 
                 <RepertSentence2 />
                 </Route>
                 <Route exact path="/RetellLecture2">
                 
                 <RetellLecture2 />
                 </Route>
                 <Route exact path="/RetellLecture">
                 
                 <RetellLecture />
                 </Route>
                 <Route exact path="/Ansshot">
                 
                 <Ansshot />
                 </Route>
                 <Route exact path="/Ansshot2">
                 
                 <Ansshot2 />
                 </Route>
                 <Route exact path="/Ansshot3">
                 
                 <Ansshot3 />
                 </Route>
                 <Route exact path="/Hand">
                 
                 <Hand />
                 </Route>
                 <Route exact path="/Summarizespokentext">
                  < Summarizespokentext/>
                 
                 </Route>
                 <Route exact path="/Summarizespokentext2">
                  < Summarizespokentext2/>
                 
                 </Route>
                 <Route exact path="/Summarizespokentext3">
                  < Summarizespokentext3/>
                 
                 </Route>

                
     
                 
                 </Route>
                 
                 

                
                
                
            

                
              
              
             
                
               
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
