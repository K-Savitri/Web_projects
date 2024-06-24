import React from 'react'
import Tasks from './Tasks';


const SelectedSubject = ({subject, onDelete, onAddTask, onDeleteTask, tasks}) => {

const fromattedDate = new Date(subject.dueDate).toLocaleDateString('en-US',{
    year: 'numeric',
    month: 'short',
    day: 'numeric'
});


  return (
    <div className='w-[35rem] mt-16'>
      {console.log(subject)}

        <header className='pb-4 mb-4 border-b-2 border-gray-600'>
            <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-gray-700'>{subject.title}</h1>
            <button onClick={onDelete}>Delete</button>
            </div>

            <p>{fromattedDate}</p>
            <p>{subject.description}</p>

        </header>

      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>  
      
    </div>
  )
}

export default SelectedSubject
