import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";

export default function NewSubject({onAdd}){

const titleRef = useRef();
const descRef = useRef();
const dueDateRef = useRef();

function handleSave(){
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = dueDateRef.current.calue;
    
    // if(
    //     enteredTitle.trim() === ''||
    //     enteredDesc.trim()===''||
    // ){
    //     // show the error modal
    //     console.log('hi')
    // }
    
    //validation
     onAdd({
        title: enteredTitle,
        desc : enteredDesc,
        dueDate : enteredDueDate 
     })

}

    return (
    <div className=" w=[35rem] mt-16 ">
    <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="" onClick={handleSave} >Save</button></li>
        <li><button>Delete</button></li>
    </menu>
    <div>
        {/* <Input label="title"/>
          <Input label="Description" istextarea />
            <Input label="Due Date"/> */}
            <Input ref={titleRef} label="title"/>
            
          <Input ref={descRef} label="Description" type="textarea" istextarea />
          <Input ref={dueDateRef} label="Due Date" type="date"  />


</div>
    
    </div>
)}