import React from "react"
import { Link } from "gatsby"
import Header from "./header"

const Greeting = ({ data, location }) => {
  var welcome
  var date = new Date();  
  var hour = date.getHours();  
  
 
  if (hour < 3) {  

    return (
      
       
        <p>
          It's late!
        </p>
     
    )
  }
  if (hour < 6) {  

    return (
      
       
        <p>
          It's late!
        </p>
     
    )
  }
  if (hour < 10) {  

    return (
      
       
        <p>
          boo
        </p>
     
    )
  }

  if (hour < 12) {  

    return (
      
       
        <p>
          It's late!
        </p>
     
    )
  }


if (hour < 17) {  

  return (
    
     
      <p>
        Nump!
      </p>
   
  )
}

  if (hour < 20) {  

    return (
      
       
        <p>
          Indeed
        </p>
     
    )
  }

  if (hour < 23) {  
   
    return (
      
        <p>
          Good afternoon, welcome to my website. Biatch
        </p>
     
    )
  } 
  
  else {  
    
    return (
    
        <p>
          Yo!
        </p>
      
    )
  }  
}

export default Greeting
