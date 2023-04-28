// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import {bkndurl} from "../helper"

const Contact = (props) => {

// const bkndurl = 'http://localhost:8000'
const [userData , setUserData] = useState({name:"", email:"", subject:"", message:""});
const token =  localStorage.getItem('token');
const Navigate = useNavigate();
//getting data 
const ContactData = async ()=>{
  try {
    
  
  const res =await fetch(`${bkndurl}/getdata`, {
   
    method: 'GET',
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/json',
      'auth-token': `${token}`,
    }
    // ,
    // credentials: 'include'
    
  })

  const data = await res.json(res);
  console.log(data);

  setUserData({...userData, name: data.name, email: data.email, subject: data.subject, message: data.message})

  if(!res.status === 200){
    throw new Error(res.error)
  }

  } catch (error) {
    console.log(error);
  }
  
}

useEffect(() => {
  ContactData()
}, [ ]);

//Handal On Change Value

const HandalOnChange = (event)=>{
  const {name, value} = event.target;
  setUserData({...userData, [name]: value})
}

//Handal Onclick send data to backend

const HandalOnClick = async (e)=>{
      e.preventDefault();
      const {name , email ,  subject , message} = userData;
      

      const  res =  await fetch(`${bkndurl}/contact`,{
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
          'auth-token': `${token}`,
        },
        body: JSON.stringify({
          name, email, subject, message
        })
      })

      const data = await res.json();
console.log("contact data: " + data)

      if( res.status === 400  || res.status === 500 ){
        // alert("message Not send")
    props.showAlert("Fill contact form properly", "danger")

        console.log("message Not sent");
      }else if(localStorage.getItem('token')){
        // alert("Message sent")
    props.showAlert("Message sent", "success")

        setUserData({...userData, subject:"", message:""})
      }else{
        Navigate(`/`)
      }

}

  return (
   <>
   <div className="container-fluid mt-3 " >
 
<section className="mb-4 p-3 " style={{backgroundColor: "#83C9D1"}}>
 
  <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

  <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>
  <div className="row">

    <div className="col-md-9 mb-md-0 mb-5">
      <form id="contact-form" name="contact-form"  method="POST">
        {/*Grid row*/} 
        <div className="row">

          <div className="col-md-6">
            <div className="md-form mb-0">
              <label htmlFor="name" className>Your name</label>
              <input type="text" id="name" name="name" className="form-control" placeholder='Enter Your Name'  onChange={HandalOnChange} value={userData.name}/>
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0">
              <label htmlFor="email" className>Your email</label>
              <input type="text" id="email" name="email" className="form-control" placeholder='Enter your Email' onChange={HandalOnChange} value={userData.email} />
            </div>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-0">
              <label htmlFor="subject" className>Subject</label>
              <input type="text" id="subject" name="subject" className="form-control" placeholder='Enter Your Subject' onChange={HandalOnChange} value={userData.subject}/>
            </div>
          </div>
        </div>


        <div className="row">

          <div className="col-md-12">
            <div className="md-form">
              <label htmlFor="message">Your message</label>
              <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" placeholder='Enter Your Place Holder'  onChange={HandalOnChange} value={userData.message} />
            </div>
          </div>
        </div>

      </form>
      <div className="text-center text-md-left">
        <button className="btn  btn-primary" type='button' onClick={HandalOnClick}>Send</button>
      </div>
      <div className="status" />
    </div>


    <div className="col-md-3 text-center">
      <ul className="list-unstyled mb-0">
        <li><i className="fas fa-map-marker-alt fa-2x" />
          <p>Trimuti Chowk, 411013,Pune</p>
        </li>
        <li><i className="fas fa-phone mt-4 fa-2x" />
          <p>+91 8457951267</p>
        </li>
        <li><i className="fas fa-envelope mt-4 fa-2x" />
          <p>mukeshnmight@gmail.com</p>
        </li>
      </ul>
    </div>
  </div>
  
</section>
</div>
   </>
  )
}

export default Contact