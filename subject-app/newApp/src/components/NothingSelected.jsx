import React from 'react'


//due today due this week view


const NothingSelected = ({onstartAddsubject}) => {
  return (
    <div className='flex flex-col h-full text-center'>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">You have not selected any Subject</h1>
      <p className="text-gray-600 mb-4" >Create a new subject or select one to get started</p>
    </div>
  )
}

export default NothingSelected
