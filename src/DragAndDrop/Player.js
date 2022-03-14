import React, { useState,useRef } from 'react'
import "./d.css"

const data=[
  {title:'Group 1',items:[1,2,3]},
  {title:'Group 2',items:[4,5]}
]
const Player = () => {
  const [list, setList] = useState(data)
  const [dragging, setDragging] = useState(false)
  const dragItem =useRef()
  const dragNode = useRef()

  const handleDragStart = (e, param) => {
    console.log("drag start...", param)
    dragItem.current=param;
    dragNode.current=e.target;
   dragNode.current.addEventListener('dragend',handleDragEnd)
    setTimeout(() => {
      setDragging(true)
    }, 0);
  }
const handleDragEnter=(e,params)=>{
console.log("Entering dragging...",params)
const currentItem =dragItem.current;
  if (e.target !==dragNode.current) {
    console.log("Target is not Same...")  
    setList(oldList=>{
      let newList = JSON.parse(JSON.stringify(oldList));
      newList[params.grpI].items.splice(params.itemI,0,newList[currentItem.grpI].items.splice(currentItem.itemI,1)[0])
      dragItem.current=params;
      localStorage.setItem('List', JSON.stringify(newList));
      return newList
    })  
  } 

}
  const handleDragEnd=()=>{
    console.log("Ending draging")
    dragNode.current.removeEventListener('dragend',handleDragEnd)
    setDragging(false)
    dragItem.current=null;
    dragNode.current=null;
  }
  const getStyles=(param)=>{
    const currentItem =dragItem.current
    if (currentItem.grpI===param.grpI && currentItem.itemI===param.itemI) {
      return 'current dnd-item'
    }
    return ' dnd-item'
  }

  return (

    <div className='Appp'>
      <header className='App-header'>
 
      
  
    <div className='drag-n-drop'>
      {list.map((grp, grpI) => (
        <div key={grp.title}  
        className="dnd-group"
        onDragEnter={dragging && !grp.items.lenght?(e)=>handleDragEnter(e,{grpI,itemI:0}):null}
        >

          <div className="group-title">{grp.title}</div>

          {grp.items.map((item, itemI) => (
           
           <div draggable 
            onDragStart={(e)=>{handleDragStart(e,{grpI,itemI})}} 
            onDragEnter={dragging?(e)=>{handleDragEnter(e,{grpI,itemI})}:null}
            key={item} 
            className={dragging?getStyles({grpI,itemI}):"dnd-item"}>
        
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
    </header>

</div>
  )
}

export default Player;