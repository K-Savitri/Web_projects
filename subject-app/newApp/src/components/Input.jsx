import { forwardRef } from "react";



const Input = forwardRef (function Input({label,istextarea, ...props}, ref){
    const classes = "w-full p-1  rounded-sm bg-stone-200 text-grey-600"
    return (
    <div className="flex flex-col gap-1 my-4 w-[20rem]" >
        <label className="text-sm font-bold uppercase text-grey-800 focus:outline-none focus:border-grey-800">{label}</label>
        {istextarea ? <textarea ref={ref} className={classes}
        {...props}/> : <input ref={ref} className={classes} {...props}/>}
    </div>
)});


export default Input; 