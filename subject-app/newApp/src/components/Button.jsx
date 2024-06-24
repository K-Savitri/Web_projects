export default function Button({ children, ...props}){

    return(
      <button className="bg-gray-600 mx-8 rounded p-3 text-white hover:bg-gray-500"{...props}>
         {children}</button>
    );
}


// <button 
// className="bg-gray-600 rounded p-3 text-white hover:bg-gray-500"
// {...props}>
    
//     {children} hi</button>