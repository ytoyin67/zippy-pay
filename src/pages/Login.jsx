
import React from 'react'
import { Link } from 'react-router-dom'



function Login() {

  
  const   onChange = ()=>{
  
  }
  
  return (
    <div className='register' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#4040a1'}}>
      <div style={{backgroundColor: '#4040a1', height: '70%',display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%'}}>
            <div className='form-container' >
                 <form style={{display: 'flex', flexDirection: 'column ', width: '80%' }}>
                    <h3 className='text-center mb-3 '>Log in</h3>
                      
                      
                      
                      <input className='my-2 border-primary width' type="email" name="email" id="email" placeholder='Email' onClick={onChange}/>
                      <input className='my-2 border-primary width ' type="password" name="password" id="password" placeholder='Password' onClick={onChange} required/>
                      <label className='text-center'>
                        
                        <input className='my-2 ' type="radio" name="radio" id="radio" onClick={onChange}/> show Password
                      </label>
                      
                      <input className='my-4 btn btn-block btn-primary' type="submit" value="Sign up" />
                 </form>
                
                 <div className='d-flex gap-2 mt-2'>
                    <p>dont have an account?</p> <h6 ><Link to="/register" className='text-primary'>Sign up</Link></h6>
                 </div>
            </div>    

      </div>

        

    </div>
  )
}

export default Login