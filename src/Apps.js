import React from 'react'

function Apps() {
    function handleClick(){
        console.log("this is working");
    }
    
  return (
    <div> 
      
        <MyButton testFunction={handleClick}/>
    </div>
  )
}

export default Apps

function MyButton({testFunction}){
    return <button onClick={testFunction}>press me</button>
}