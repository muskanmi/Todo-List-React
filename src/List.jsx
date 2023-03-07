import React, { useState } from 'react';
import Comp from './Comp';

function List() {
    const [value, setValue] = useState("");
    const [name, setName] = useState([]);

    const itemEvent = (event) => {
        // console.log(event.target.value);
        setValue(event.target.value);
    }
    const onSubmit = () => {
        setName((oldItems) => {
            // add data in value to empty array name.
            return [...oldItems, value];
        });
        setValue('');
    };

    const onDelete = (id) => {
        // console.log("deleted!");
        setName((oldItems) => {
            return oldItems.filter((arr, index) => {
                return index !== id;

            });
        });

    }

  return (
    <>
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1> ToDo List </h1>
                <br />
                <input type='text' placeholder='Add a Item' onChange={itemEvent}
                value={value}></input>
                <button onClick={onSubmit}> + </button>

                <ol>
                    {/* <li> {value} </li> */}

                    {/* {name.map((itemval, index) => {
                        return (
                            // without using other component
                            <>
                            <div className='todo_style'>
                                <i className="fa fa-times" aria-hidden="true" onClick={onDelete}></i>
                                <li> 
                                {index}
                                { itemval }
                                {onDelete}
                                 </li>
                            </div>
                            </>
                            
                        );
                    })} */}

                    {/* // with using component Comp */}

                    {name.map((itemval, index) => {
                        return (
                            <Comp
                                id={index}
                                text={itemval}
                                onSelect={onDelete}
                            />
                        );
                    })};

                </ol>
            </div>
        </div>
    </>
  )
}

export default List;