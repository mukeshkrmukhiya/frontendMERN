import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Images/logo1.png'
import { UserContext } from '../App'
const Navbar = () => {
  const {state, dispatch} = useContext(UserContext)

  const RenderMenu  = ()=>{
    console.log("navbar  " + state) //console state
    if(state){
      return(
        <>
           <nav className="navbar navbar-expand-lg text-center "  >
    <div className="container-fluid " style={{fontWeight: 'bold'}}>
      <NavLink className="navbar-brand " to="/"><img src={logo} alt="logo" style={{maxHeight: "2rem", maxWidth: "7rem", borderRadius: "1rem"}} /></NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link btn btn-danger" to="/logout">LogOut</NavLink>
          </li>
          
         
        </ul>
        
      </div>
    </div>
  </nav>
        </>
      )
    }
    else{
      return(
        <>
           <nav className="navbar navbar-expand-lg text-center "  >
    <div className="container-fluid " style={{fontWeight: 'bold'}}>
      <NavLink className="navbar-brand " to="/"><img src={logo} alt="logo" style={{maxHeight: "2rem", maxWidth: "7rem", borderRadius: "1rem"}} /></NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
          </li>
         
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Registration</NavLink>
          </li>
          
          
         
        </ul>
        
      </div>
    </div>
  </nav>
        </>
      )

    }
   
  }


  return (
    <>
    
   
<RenderMenu/>

    </>
  )
}

export default Navbar