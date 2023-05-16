import React, {useState, useEffect} from 'react'
import {bkndurl} from "../helper"
// const bkndurl = 'http://localhost:8000'



const Home = () => {
  const [loading, setLoading] = useState(true);
  const [userData , setUserData] = useState({});
const [userShow , setUserShow] = useState(false);
const token = localStorage.getItem('token');

//getting data 
const GetHomeData = async ()=>{
  try {
    
    
    // console.log("local",localStorage.getItem('token'))
  const res = await fetch(`${bkndurl}/getdata`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'auth-token': `${token}`,
    }
    // ,
    // credentials: 'include'
    
  })

  const data = await res.json()

  setUserData(data)
  setUserShow(true)

  if(localStorage.getItem('token')){
    setLoading(false)
    console.log("success")
  }

 else if(!res.status === 200){
    throw new Error(res.error)
  }

  } catch (error) {
    console.log(error);
  }
  
}

useEffect(() => {
  GetHomeData()
  setLoading(false)
}, [ ]);

if (loading) {
  return <p className='text-center '>Loading...</p>; // Display a loading state while the data is being fetched
}
  return (
    <>
    <div className=' container-lg container-xl container-md container  rounded-3 '>
    <div className='d-flex flex-column rounded-5 justify-content-center align-items-center ' style={{height: "87vh", margin: '1rem auto', backgroundColor: "#83C9D1" }}>
    
    <p className='text-center  text-white '>WELCOME</p>
      {/* <p className='text-center  text-white '>{userData.name}</p> */}
      <h1 className='text-center'>{userShow ? (userData.name).toLocaleUpperCase():  "We are Mern Devlopers"}</h1>
      <h1 className='text-center text-success'>{userShow ? "Happy to see you Back":  ""}</h1>

</div>
      </div>
    </>
  )
}

export default Home;