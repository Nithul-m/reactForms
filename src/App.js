import React from "react";
import './App.css'
function App() {
  const title = "My heading"
  return (
    <div>
      <Message message="This is a test message" variant={"success"}/>      
      <Message message="Second message"/>      
      <Message message="Third message" variant={"error"}/>      

    </div>
  )
  
  ;
}


export default App;
function Message({message, variant}){
 return (<div className={variant}>
    <span>{message}</span>
  </div>
 )
}



