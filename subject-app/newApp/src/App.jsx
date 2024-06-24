import { useState } from 'react'
import './App.css'
import SubjectsSidebar from './components/SubjectsSidebar'
import NewSubject from './components/NewSubject'
import NothingSelected from './components/NothingSelected'
import SelectedSubject from './components/SelectedSubject'

function App() {
  const [subjectsState, setSubjectsState] = useState({  
    selectedSubjectId : undefined,
    subjects:[],
    tasks:[]
  })
function handleAddTask(text){
  setSubjectsState((prevState) =>{
    const taskId = Math.random();
    const newtask ={
      ...prevState,
      text:text,
      subjectId: prevState.selectedSubjectId,
      id:taskId
    }

    return{
      ...prevState,
      task: [newtask, ...prevState.tasks]
    }
  });

}

function handleDeleteTask(){


}
  function handleStartAddSubject(){
    setSubjectsState(prevState =>{
      return {
        ...prevState,
        selectedSubjectId:null //adding a subject
      };
    })
  }

function handleAddSubject(subjectData){
  setSubjectsState(prevState =>{
    const newSubject ={
      ...subjectData,
      id: Math.random() 
    }
    return{
      ...prevState,
      selectedSubjectId : undefined,  
      subjects: [...prevState.subjects, newSubject]
    }
  })
}

function handleSelectSubject(id){
  setSubjectsState( prevState=>{
    return{
      ...prevState,
      selectedSubjectId: id,
    }
  })
}

function handleDeleteSubject(){
  setSubjectsState((prevState)=>{
    return {
      ...prevState,
      selectedSubjectId : undefined,
      subjects : prevState.subjects.filter((subject)=>
        subject.id !== prevState.selectedSubjectId

      )
    };
  });

}

console.log(subjectsState)


const selectedSubject = subjectsState.subjects.find(subject => subject.id == subjectsState.selectedSubjectId);


  let content;

  if(subjectsState.selectedSubjectId===null){
    console.log("null")
    content = <NewSubject onAdd={handleAddSubject}/>

  }else if(subjectsState.selectedSubjectId===undefined) {
    console.log("undef")
    content= <NothingSelected />
  }else if(selectedSubject){
    content = <SelectedSubject subject={SelectedSubject} onDelete={handleDeleteSubject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={subjectsState.tasks}  />
  }
  return (
    <>
    <main className=' flex gap-8 '>
    <SubjectsSidebar 
    onstartAddsubject={handleStartAddSubject} 
    subjects={subjectsState.subjects}
    onSelectSubject={handleSelectSubject}/>
    {content}
    {/* <NewSubject onstartAddsubject={handleStartAddSubject} /> */}

    {/* <NothingSelected onstartAddsubject={handleStartAddSubject}/> */}
    </main>
     
    </>
  )
}

export default App
