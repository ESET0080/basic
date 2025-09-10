import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const Button = ({label, onClick}) => {
  return <button onClick={onClick}>{label}</button>;
}


  return(
    <div> 
      <h1>COUNTER</h1>
      <h2 id="a"> 0 </h2>
      <Button 
      label = "Increment"
      onClick = {() =>{
        const element = document.getElementById("a");
        var curr = parseInt(element.textContent)
        element.textContent = curr + 1;
        console.log("Increment clicked")
      }
      
      }/>


      <Button 
      label = "Decrement"
      onClick = {() =>{
        const element = document.getElementById("a");
        var curr = parseInt(element.textContent)
        element.textContent = curr - 1;
        console.log("Decrement clicked")
      }
      
      }/>
    </div>
  )

}
export default App