import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../App'
import '../ComponentCss/Login.css'
import {bkndurl} from "../helper"
import { Link } from 'react-router-dom'
// const bkndurl = 'http://localhost:8000'

const Login = (props) => {
  
  
  const {state, dispatch} = useContext(UserContext)
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email:'', password:''
  })
  const Navigation = useNavigate();

  function HandalOnChange(event) {
    console.log("handal on chandge")
  let {name, value} = event.target;
  setUser({...user, [name]: value})
    console.log(user);
  }

  const HandalOnClick = async (event )=> {
    console.log("handal on click")
    setLoading(true)

    // using fetch api alternative is axioce
      event.preventDefault();
    const  {email, password} = user;
  const res = await  fetch(`${bkndurl}/signin`, {
    method: 'POST',
    headers:{
      'content-Type': 'application/json'
    },
    // credentials: 'include',
    body: JSON.stringify({email, password})
  });

  const response = await res.json()

  setLoading(false)
  if(res.status === 200  ){
    localStorage.setItem('token',response.ClientToken);
    dispatch({type: "USER", payload: true})
    console.log(state) //console state
    Navigation(`/`)
    console.log("Login successful ");
    // window.alert("Login successful ");
    props.showAlert("Login Successfull", "success")
   
   
  }else {
    console.log("Invalid Login detail");
    props.showAlert("Login failed", "danger ")
    // window.alert("Invalid Login detail");

   
  }

    
  }

  if (loading) {
    return <p className='text-center '>Loading...</p>; // Display a loading state while the data is being fetched
  }

  return (
    <>
    <div className="container rounded-5" >
      <div className="login-box " style={{backgroundColor: "#83C9D1",margin: '1rem auto'}}>
  <p>Login</p>
  <form method='POST'>
    <div className="user-box">
      <input className='input1' required autocomplete="off" name="email" id='email' type="text" value={user.email} onChange={HandalOnChange} />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input className='input1' required autocomplete="off" name="password" id='password' type="password" value={user.password}  onChange={HandalOnChange} />
      <label>Password</label>
    </div>
    <button type="submit"  value="login" onClick={HandalOnClick}>
      <span />
      <span />
      <span />
      <span />
      Submit
    </button>
  </form>
  <p className=' p-2'>Don't have an account?  <Link  to='/signup' className="a2"  >Sign up!</Link></p>
</div>

</div>
    </>
  )
}

export default Login