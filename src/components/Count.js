import React, { useEffect, useState } from "react";
import { ProgressBar } from "primereact/progressbar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Count() {
  const [progressBarValue, setProgressBarValue] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgressBarValue((prev) => {
        if (prev >= 30) {
          clearInterval(intervalId);
          return 100;
        } else {
          return prev + 1;
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <div className="progress-bar-container">
        <ProgressBar
          className="progress-bar"
          value={progressBarValue}
        ></ProgressBar>
      </div>
    </div>
  );
}









// import React,{useEffect} from 'react';

// const Count = () => {


// 	useEffect(() => {
	 
// 		const bar=()=>{
// 		 {
// 				var current_progress = 0;
// 				var interval = setInterval(function() {
// 					current_progress += 3;
			  
// 					$("#dynamic")
// 					.css("width", current_progress+10 + "%")
// 					.attr("aria-valuenow", current_progress)
// 					.text(current_progress/3 + "% Complete");
// 					if (current_progress >= 90)
// 						clearInterval(interval);
// 				}, 1000);
// 			  };

// 		}
// 		bar();
// 	}, []);
	
//   return <div>
// 	    <div id="progress">
//          <div id="dynamic" class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar"
//              aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
//              <span id="current-progress"></span>
//          </div>
//      </div>
//   </div>;
// };

// export default Count;






// import React from 'react'

// const count = () => {


//     var time_in_minutes = 10;
// var current_time = Date.parse(new Date());
// var deadline = new Date(current_time + time_in_minutes*60*1000);


// function time_remaining(endtime){
// 	var t = Date.parse(endtime) - Date.parse(new Date());
// 	var seconds = Math.floor( (t/1000) % 60 );
// 	var minutes = Math.floor( (t/1000/60) % 60 );
// 	var hours = Math.floor( (t/(1000*60*60)) % 24 );
// 	var days = Math.floor( t/(1000*60*60*24) );
// 	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
// }
// function run_clock(id,endtime){
// 	var clock = document.getElementById(id);
// 	function update_clock(){
// 		var t = time_remaining(endtime);
// 		clock.innerHTML = +t.minutes+': '+t.seconds;
// 		if(t.total<=0){ clearInterval(timeinterval); }
// 	}
// 	update_clock(); // run function once at first to avoid delay
// 	var timeinterval = setInterval(update_clock,1000);
// }
// run_clock('clockdiv',deadline);

//     return (
//         <div>
//             <div id="clockdiv"></div>
//         </div>
//     )
// }

// export default count




