import React from 'react'
import Button from './Button'


const SubjectsSidebar = ({onstartAddsubject ,subjects,onSelectSubject,selectedSubjectId}) => {
    console.log('Received subjects:', subjects);
  return (
    <div className='h-screen bg-black'>
         <aside className='  w-1/3 px=8 py-10  text-red md:w-72 ' >
        
        <h2 className='mb-8 font-bold uppercase md:text-xl text-white text-center' > Subjects</h2>

       
            {/* <Button onClick={onStartAddSubject}>Add Subject</Button> */}
            <Button onClick={onstartAddsubject}> Add Subject</Button>

            {/* {showForm && <NewSubject onAdd={addSubject} />} */}
</aside>
<ul className='mt-10'>
    {/* {console.log('list called'+subjects)} */}
    {subjects.map(subject => {
            
            let cssClass = "w-full text-left px-8 py-2 text-white  rounded-sm "
            if(subject.id === selectedSubjectId){
              cssClass += ' bg-gray-800 text-white'
            }else{
              cssClass += ' text-gray-200'
            }
            
            
            return (
            <li key={subject.id} > 
              <button className={cssClass} 
              onClick={() => onSelectSubject(subject.id)}>{subject.title}
                </button>
                </li>)
})}
      
</ul>
      
    </div>
  )
}

export default SubjectsSidebar


//  w-1/4 h-screen px-8 pt-4 pb-16 bg-gray-800 

// text-grey text-2xl font-semibold pb-5 