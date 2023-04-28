import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {bkndurl} from "../helper"
// const bkndurl = 'http://localhost:8000'

import  '../ComponentCss/Signup.css'
const Signup = (props) => {

  const [user, setUser] = useState(
    {name : "", email:"",phone: "",  work:"", password:"", cpassword:""}
  ) 

  const Navigation = useNavigate();

  function HandalOnChange(event) {
    console.log("handal on chandge")
  let {name, value} = event.target;
    setUser({...user, [name]: value})
    console.log(user);
  }

  const HandalOnClick = async (event )=> {
    console.log("handal on click")

    // using fetch api alternative is axiose
      event.preventDefault();
    const  {name , email,phone,  work, password, cpassword} = user;

  const res = await  fetch(`${bkndurl}/register`, {
    method: 'POST',
    headers:{
      'content-Type': 'application/json'
    },
    
    
    body: JSON.stringify(
      {name , email,phone,  work, password, cpassword})
  });

  const response = await res.json()
  // console.log('outer: ' + JSON.stringify(res));
  // console.log('outer status: ' + res.status);

  
  if(res.status === 202 || res.status === 400 ||  res.status === 422 ||res.status === 202 || res.status === 500 || !res )
  // if(res.status !== 200)

  {

    console.log("Invalid Registration");
    // window.alert("Invalid Registration");
    props.showAlert("Invalid Registration", "danger")
  }else{
    //saving to the local storage
    localStorage.setItem('token',response.ClientToken);

    console.log("Registration successful ");
    // window.alert("Registration successful ");
    props.showAlert("Registration Successful", "success")
    console.log('inner: ' + res);

    Navigation(`/login`)
  }

    
  }




  return (
    <>
      <div classname="container ">
  <form method='POST' className="form mx-auto mt-3 text-white" style={{backgroundColor: "#83C9D1"}}>
    <span className="title">Register</span>
    <span className="sub mb">Register to get full access now :)</span>
    <input id="file" type="file" />
    <label className="avatar" htmlFor="file"><span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M17.1813 16.3254L15.3771 14.5213C16.5036 13.5082 17.379 12.9869 18.2001 12.8846C19.0101 12.7837 19.8249 13.0848 20.8482 13.8687C20.8935 13.9034 20.947 13.9202 21 13.9202V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V13.7522C3.06398 13.7522 3.12796 13.7278 3.17678 13.679L4.45336 12.4024C5.31928 11.5365 6.04969 10.8993 6.71002 10.4791C7.3679 10.0605 7.94297 9.86572 8.50225 9.86572C9.06154 9.86572 9.6366 10.0605 10.2945 10.4791C10.9548 10.8993 11.6852 11.5365 12.5511 12.4024L16.8277 16.679C16.9254 16.7766 17.0836 16.7766 17.1813 16.679C17.2789 16.5813 17.2789 16.423 17.1813 16.3254Z" opacity="0.1" /> <path strokeWidth={2} stroke="#ffffff" d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" /> <path strokeLinecap="round" strokeWidth={2} stroke="#ffffff" d="M17.0045 16.5022L12.7279 12.2256C9.24808 8.74578 7.75642 8.74578 4.27658 12.2256L3 13.5022" /> <path strokeLinecap="round" strokeWidth={2} stroke="#ffffff" d="M21.0002 13.6702C18.907 12.0667 17.478 12.2919 15.1982 14.3459" /> <path strokeWidth={2} stroke="#ffffff" d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z" /> </g></svg></span></label>

    <input type="text" name='name' id='name' className="input" value={user.name}   onChange={HandalOnChange}  placeholder="Enter Your Name"  />
    <input type="email" name='email' id='email' className="input" value={user.email}   onChange={HandalOnChange}  placeholder="Enter email" />
    <input type='text' name='phone' id='phone' className="input" value={user.phone}   onChange={HandalOnChange}  placeholder="Enter Your Mobile Number" />
    <input type="text" name='work' id='work' className="input" value={user.work}   onChange={HandalOnChange}  placeholder="Enter You Work" />
    <input type="password" name='password' id='password'  className="input" value={user.password}   onChange={HandalOnChange}  placeholder="Enter password" /> 
    <input type="password" name='cpassword' id='cpassword' className="input" value={user.cpassword}   onChange={HandalOnChange}  placeholder="enter confirm password" /> 

    <span className="sub ">Already have an account ? <Link to="/login">Sign in</Link></span>
    <button type='button' value='registration' onClick={HandalOnClick}>Register</button>
  </form>


    </div>

    </>
  )
}

export default Signup