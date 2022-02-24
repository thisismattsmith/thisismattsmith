import React from "react"
import { Link } from "gatsby"
import Header from "./header"

const Greeting = ({ data, location }) => {
  var welcome
  var date = new Date();  
  var hour = date.getHours();  
  
  if (hour < 12) {  

    return (
      
       
      <h1 className="greeting-title">
         Good morning!
        </h1>
     
    )
  }


if (hour < 17) {  

  return (
    
     
    <h1 className="home-title">
        Good afternoon!
      </h1>
   
  )
}


  if (hour < 23) {  
   
    return (
      
      <h1 className="home-title">
        Good evening!
        </h1>
          
    )
  } 
  
  else {  
    
    return (
    
      <h1 className="home-title">
          Welcome!
        </h1>
      
    )
  }  
}

export default Greeting
