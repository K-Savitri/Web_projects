import React from 'react'
import NewTask from './NewTask'

const Tasks = ({tasks,onAdd, onDelete}) => {
  return (
    <div>
        <h2 className='text-2xl font-bold text-gray-700 mb-4'></h2>

        <NewTask onAdd={onAdd}/>
        {tasks.length ===0 && (
        <p className='text-gray-800 mb-4'> This project does not have any task yet </p>

        )}
   
   
   {tasks.length>0 && 
   <ul className='p-4 mt-8 rounded-md bg-gray-300'>
    {tasks.map((task)=> <li key={task.id} className='flex justify-between my-4'>
        <span>{task.text}</span>
        <button className='hover:text-red-400'>Clear</button></li>)}
    </ul>}
      {console.log(tasks)}
    </div>
  )
}

export default Tasks
