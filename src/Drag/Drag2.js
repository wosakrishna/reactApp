import * as React from "react";

import { Link } from "react-router-dom";
// import {singleFileUpload} from '../data/api';
import { useState } from "react";




// import { useHistory } from "react-router-dom";

// import fileDownload from 'js-file-download';

const Drag2 = () => {
    // let history = useHistory();
    const [checked, setChecked] = useState([]);
    const checkList = ["People who are taking care of their overweight do not necessarily need to consume meat in order to stay healthy.", "Food provides energy that must be partially used up in order to reduce the risk of becoming fat.", "The more calories a person consumes, the healthier the person will be.", "Calories can only be offered by meats and vegetables."];


    // let audio = new Audio("../audio/beep.mp3")

  

   
    const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };
        // const formData = new FormData();
        // formData.append('file', data);
        // singleFileUpload(formData);
     

    

    return (
        <div>

            <div className="container-fluid border border-dark  ">
                <div className="form-control text-white bg-dark"><b> Read the text and answer the question by selecting all the correct responses. More than one response is correct.</b></div>
                                <div className="  my-5 text-center row">
                <div className="col-5 mx-5 text-center border border-info">
                A calorie is a measure of heat. One calorie is the amount of energy required to raise one kilogram of water by 1?. The energy that provides the human body with power is also measured in calories. Thus, when people mention the calorific value of food, what is being referred to is the quantity of energy that specific food items offer to the person who consumes them. However, it is important to notice that calorific value does not equal nutritional value. Our bodies require specific types of food in order to stay healthy. Thus, people who are on a diet, for instance, must still eat a good deal of meat, or other form of protein, and vegetables; otherwise, their bodies will be undernourished and exposed to illness. On the other hand, when people gain extra weight it is because they are absorbing more calories than they are using up in energy, and the extra is being stored as fat.
      </div>
                    <div className="col-5 border border-info">
                    <div className=" title"><h3>Which of the following statements are true?</h3></div>
               
        
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {`Items checked are: ${checkedItems}`}
     

                </div>
          
                </div>
 
                {/* <div>The survey found that the statistical chances of someone from a poor background being accepted at one of the country's most respected universities are far lower than those of a student from a wealthy family. This means that the inequalities in society are likely to be passed down from one generation to the next.</div> */}
                

                <div className="text-left">
                    <Link to="/About" className=" btn btn-success float-end mx-5 my-5  ">Next</Link>
                    
                    <button className=" btn btn-primary mx-2 my-5" >Submit</button>
                </div>




            </div>
        </div>
    )
}

export default Drag2;



