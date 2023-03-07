import React, { useState } from 'react'

function Comp(props) {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  }
  return (
    <>
    {/* <div className='todo_style'>
        <i className="fa fa-times" aria-hidden="true" onClick={() => {
            props.onSelect(props.id);
        }}></i>
        <li> 
        {props.text}
        </li>
    </div> */}


    <div className='todo_style'>
        <i className="fa fa-times" aria-hidden="true" onClick={cutIt}></i>
        <li style={{ textDecoration: line ? "line-through" : "none" }}> 
        {props.text}
        </li>
    </div>
    </>
  )
}

export default Comp;