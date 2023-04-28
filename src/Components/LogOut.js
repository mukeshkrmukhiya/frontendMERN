import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../App'
import {bkndurl} from "../helper"
// const bkndurl = 'http://localhost:8000'

function LogOut(props) {
    const {state, dispatch} = useContext(UserContext)
    const token =  localStorage.getItem('token');
    const Navigate  = useNavigate();

    useEffect(() => {
      console.log("logout1   " +state) //console state
        fetch(`${bkndurl}/logout`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'auth-token': `${token}`,
            }
            
          }).then((res)=>{
            localStorage.removeItem('token');
            dispatch({type: "USER", payload: false})
     

            Navigate(`/login`)
            
            if (res.status !== 200) {
                throw new Error(res.error)
            }else{
              props.showAlert("Logout sucess full ", "success")
            }
          }).catch((error)=>{
            console.log("err: " + error)
            // res.status(401).send("error in logout")
          })
    }, [])
    
  return (
    <div>LogOut</div>
  )
}

export default LogOut