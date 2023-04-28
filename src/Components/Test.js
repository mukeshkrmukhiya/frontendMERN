import React, {useState, useEffect } from 'react'

const Test = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [userData , setUserData] = useState({name:"", email:"", subject:"", message:""});

useEffect( () => {
    try {
        fetch("http://localhost:8000/getdata",{
   
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