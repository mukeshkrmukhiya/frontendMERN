import React, { useEffect } from 'react'
import {bkndurl} from "../helper"

const Test = () => {

useEffect( () => {
    try {
        fetch(`${bkndurl}/getdata`,{
   
    method: 'GET',
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    
  }).then(res=>res.json()).then((data)=> {console.log(data)})
    } catch (error) {
        console.log(error);
    }
  
  

  
}, [])

    



  
  return(
    <>
        <h1>Test</h1>
        {/* <h2>{userData.name}</h2> */}
    </>
  )
}

export default Test