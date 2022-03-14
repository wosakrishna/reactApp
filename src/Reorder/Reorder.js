import React, { useState } from "react";
import "./styles.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Reorder() {

  const defaultList = ["A", "B", "C", "D", "E"];
  // React state to track order of items
  const [itemList, setItemList] = useState(defaultList);

  // Function to update list on drop
  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...itemList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setItemList(updatedList);
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {(provided) => (
            <div
              className="list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {itemList.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <div
                      className="item-container"
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      {item}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div>
        
      </div>
    </div>
  );
}


// import React from "react";


// import TaskList from "./TaskList";
// import { TASKS } from "./Constants";
// // import "./Appp.css";

// function Reorder() {
//   return (
//     <div className="App">
//       <TaskList tasks={TASKS} />
//     </div>
//   );
// }
// export default Reorder;

// import React, { Component } from 'react';
// import './Last.css';

// export default class Reorder extends Component {
//     state = {
//         tasks: [
//           {name:"Vue", category:"wip", bgcolor:"skyblue"}, 
//           {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
//             {name:"React", category:"wip", bgcolor:"pink"}
         
//           ]
//     }

//     onDragStart = (ev, id) => {
//         console.log('dragstart:',id);
//         ev.dataTransfer.setData("id", id);
//     }

//     onDragOver = (ev) => {
//         ev.preventDefault();
//     }

//     onDrop = (ev, cat) => {
//        let id = ev.dataTransfer.getData("id");
       
//        let tasks = this.state.tasks.filter((task) => {
//            if (task.name == id) {
//                task.category = cat;
//            }
//            return task;
//        });

//        this.setState({
//            ...this.state,
//            tasks
//        });
//     }

//     render() {
//         var tasks = {
//             wip: [],
//             complete: []
//         }

//         this.state.tasks.forEach ((t) => {
//             tasks[t.category].push(
//                 <div key={t.name} 
//                     onDragStart = {(e) => this.onDragStart(e, t.name)}
//                     draggable
//                     className="draggable"
//                     style = {{backgroundColor: t.bgcolor}}
//                 >
//                     {t.name}
//                 </div>
//             );
//         });

//         return (
//             <div className="container-drag">
//                 <h2 className="header">DRAG & DROP DEMO</h2>
//                 <div className="wip"
//                     onDragOver={(e)=>this.onDragOver(e)}
//                     onDrop={(e)=>{this.onDrop(e, "wip")}}>
//                     <span className="task-header">WIP</span>
//                     {tasks.wip}
//                 </div>
//                 <div className="droppable" 
//                     onDragOver={(e)=>this.onDragOver(e)}
//                     onDrop={(e)=>this.onDrop(e, "complete")}>
//                      <span className="task-header">COMPLETED</span>
//                      {tasks.complete}
//                 </div>


//             </div>
//         );
//     }
// }



// import React from 'react'

// const Reorder = () => {
//   return (
//     <div>Reorder</div>
//   )
// }

// export default Reorder