import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import mypic from '../Images/halfPhoto.jpg'
import aboutimg from '../Images/kartik.jpg'
import { Link } from 'react-router-dom'
import {bkndurl} from "../helper"

const About = () => {
  // const bkndurl = 'http://localhost:8000'
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const token =  localStorage.getItem('token');

  const Navigate = useNavigate();

  const callAboutPage = async () => {

    try {
      const res = await fetch(`${bkndurl}/about`, {

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
      setLoading(false)

      // console.log("response" +data);
      if (localStorage.getItem('token')) {
        console.log("success full")
      }

      else if (res.status !== 200) {
        Navigate("/login")
        throw new Error(res.error)
      }


    } catch (error) {
      console.log(error);
      Navigate('/')
      // res.status(404).send({"error": "c not found"})


    }
  }


  useEffect( () => {
    callAboutPage();
  }, [])

  
  if (loading) {
    return <p className='text-center '>Loading...</p>; // Display a loading state while the data is being fetched
  }
  return (
    <>
      <div className='container-lg container-xl container-md container my-3  rounded-5 text-center Regular shadow  ' style={{ fontWeight: 'bold', backgroundColor: "#83C9D1", maxHeight: "60%", fontFamily: 'Roboto Slab serif' }}  >
        <form method="GET">
          <div>
            <div class="row border-bottom " >

              <div class="col-4">
                <img src={userData.name === "mukesh kumar mukhiya" ? mypic : aboutimg} alt="images" className='img-fluid img-thumbnail ' style={{ maxHeight: '15rem', maxwidth: '8rem' }} />
              </div>
              <div class="col-8  text-center"  >
                <p>{userData.name}</p>
                <p>webdevloper</p>
                <p>Ranking: <span>1/10</span> </p>
                {/* <p><span>About</span> <span>Timeline</span></p> */}

              </div>
            </div>

            <div class="row d-flex  flex-column-reverse flex-md-row flex-lg-row row-cols-1">

              <div class="col col-md-4 col-lg-4  text-sm-center  ps-5  border-end text-success  bg-gradient  ">
                <h3>My profile Links</h3>
                <p> <Link className=' text-decoration-none  ' to="https://github.com/mukeshkrmukhiya" target="_blank">Github</Link> </p>
                <p> <Link className=' text-decoration-none  ' to="https://www.linkedin.com/in/mukeshkrmukhiya/" target="_blank">LinkedIN</Link> </p>
                <p> <Link className=' text-decoration-none  ' to="https://www.facebook.com/profile.php?id=100011525521232&mibextid=ZbWKwL" target="_blank">FaceBook</Link> </p>
                <p> <Link className=' text-decoration-none  ' to="https://instagram.com/mukeshkr.mukhiya?igshid=ZDdkNTZiNTM=" target="_blank">Instragram</Link> </p>
                <p> <Link className=' text-decoration-none  ' to="/" target="_blank">Web devloper</Link> </p>
                <p> <Link className=' text-decoration-none  ' to="http://bvucoepune.edu.in/" target="_blank">Engineering</Link> </p>

              </div>
              <div class="col col-md-8 col-lg-8 flex-md-row flex-lg-row border-bottom ">
                <div className='d-flex justify-content-between '>
                  <p>User Id</p>
                  <p>{userData._id}</p>
                </div>
                <div className='d-flex justify-content-between '>
                  <p>Name</p>
                  <p>{userData.name}</p>
                </div>
                <div className='d-flex justify-content-between '>
                  <p>Email</p>
                  <p>{userData.email}</p>
                </div>
                <div className='d-flex justify-content-between '>
                  <p>Phone</p>
                  <p>{userData.phone}</p>
                </div>
                <div className='d-flex justify-content-between '>
                  <p>Profession</p>
                  <p>{userData.work}</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About