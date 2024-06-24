import React, { useState } from 'react'

const NewTask = ({onAdd}) => {
    const[enteredTask , setEnteredTask] = useState();

    function handleChange(event){
        setEnteredTask(event.target.value);
    }
    function handleClick(){
        onAdd(enteredTask);
        setEnteredTask('');
    }
  return (
    <div className='flex items-center gap-4'>
        <input className='w-64 px-2 py-1 rounded-sm bg-gray-200' type="text" onChange={handleChange} value={enteredTask}/>
        <button className='text-gray-800 hover:text-gray-900' onClick={handleClick}>Add Task</button>
      
    </div>
  )
}

export default NewTask
