        import React, { Component } from 'react';

        class Sound extends Component {
          // Checkbox Initial State
          state = {
            isApple: false,
            isOrange: false,
            isBanana: false,
            isCherry: false,
            isAvocado: false
          };
          // React Checkboxes onChange Methods
          onChangeApple = () => {
            this.setState(initialState => ({
              isApple: !initialState.isAvocado,
            }));
          }
          onChangeOrange = () => {
            this.setState(initialState => ({
              isOrange: !initialState.isOrange,
            }));
          }
          onChangeBanana = () => {
            this.setState(initialState => ({
              isBanana: !initialState.isBanana,
            }));
          }
          onChangeCherry = () => {
            this.setState(initialState => ({
              isCherry: !initialState.isCherry,
            }));
          }
          onChangeAvocado = () => {
            this.setState(initialState => ({
              isAvocado: !initialState.isAvocado,
            }));
          }
          // Submit
          onSubmit = (e) => {
            e.preventDefault();
            console.log(this.state);
          }
          render() {
            return (
              <div className="App">
                <h2>Store Multiple Checkboxes Values in React</h2>
                <form onSubmit={this.onSubmit}>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox"
                        checked={this.state.isApple}
                        onChange={this.onChangeApple}
                        className="form-check-input"
                      />
                      Apple
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox"
                        checked={this.state.isAvocado}
                        onChange={this.onChangeAvocado}
                        className="form-check-input"
                      />
                      Avocado
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox"
                        checked={this.state.isBanana}
                        onChange={this.onChangeBanana}
                        className="form-check-input"
                      />
                      Banana
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox"
                        checked={this.state.isCherry}
                        onChange={this.onChangeCherry}
                        className="form-check-input"
                      />
                      Cherry
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox"
                        checked={this.state.isOrange}
                        onChange={this.onChangeOrange}
                        className="form-check-input"
                      />
                      Orange
                    </label>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-success">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            );
          }
        }
        export default Sound;


  










// import React, { useState } from "react";


// const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
//   console.log("Checkbox: ", name, checked);

//   return (
//     <input type={type} name={name} checked={checked} onChange={onChange} />
//   );
// };

// const Sound = () => {
//   const [checkedItems, setCheckedItems] = useState({});

//   const handleChange = event => {
//     setCheckedItems({
//       ...checkedItems,
//       [event.target.name]: event.target.checked
//     });
//     console.log("checkedItems: ", checkedItems);
//   };

//   const checkboxes = [
//     {
//       name: "check-box-1",
//       key: "checkBox1", 
//       label: "Check Box 1"
//     },
//     {
//       name: "check-box-2",
//       key: "checkBox2",
//       label: "Check Box 2"
//     }, {
//       name: "check-box-3",
//       key: "checkBox3",
//       label: "Check Box 3"
//     }
//   ];

//   return (
//     <div>
//       <label>Checked item name : {checkedItems["check-box-1"]} </label> <br />
//       {checkboxes.map(item => 
//       (
//         <label key={item.key}>
//           {item.name}
//           <Checkbox
//             name={item.name}
//             checked={checkedItems[item.name]}
//             onChange={handleChange}
//           />
//         </label>
//       ))}
//     </div>
//   );
// };
// export default Sound;





