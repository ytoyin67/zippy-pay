import React from 'react'
import {Link} from "react-router-dom"
import zippayWhite from '../images/zippyPayWhite.jpg'
import {FaTimes, FaBars} from 'react-icons/fa'
import { useState } from 'react'

function Header() {
  const [toggle,setToggle] = useState(false)
  return (
    <div className=' header width-element'>
      <div className='flex'>
            <div>

              <Link to="/"> <img className='img-responsive logo' src={zippayWhite} alt="" /></Link>
          </div>

          <ul className='d-none d-lg-flex flex '>
            
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/#features">Features</Link></li>
                <li><Link to="/#pricing">Pricing</Link></li>
                <li><Link to="/#resoursces">Resourses</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                
          </ul>
          {/* <div> <FaTimes style={{width:"50px", height: "30px"}}/></div> */}
          <div style={{position: 'absolute', top: '40px', right: '50px', cursor: "pointer"}}>
                {!toggle ? <FaBars onClick={()=> setToggle(true)} className='h3 bars d-lg-none '/> :
                <FaTimes onClick={()=> setToggle(!toggle)} className='h3 d-lg-none text-danger'/>}
              </div>
          
          <div className='d-none d-lg-flex'>
            <button className="btn btn-white"><Link to="/login">Login</Link></button>
            <button className="btn btn-blue"><Link to="/register">Sign Up</Link></button>
          </div>
      </div>
       
      {toggle && <div className={toggle ? "mobile mt-4" : ""}>
          <ul className='d-lg-none  '>
                
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/#features">Features</Link></li>
                <li><Link to="/#pricing">Pricing</Link></li>
                <li><Link to="/#resoursces">Resourses</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                
          </ul>
          <div>
          <div className='d-lg-none flex btn-container'>
            <button className="btn btn-white"><Link to="/login">Login</Link></button>
            <button className="btn btn-blue"><Link to="/register">Sign Up</Link></button>
          </div>
          </div>
       </div> }
      
    </div>
  )
}

export default Header