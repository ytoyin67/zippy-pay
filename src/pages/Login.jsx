
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'



function Login() {

  const [email2, setEmail2] = useState("")
  const [password2, setPassword2] = useState("")
  const [success2, setSuccess2] = useState(false)


  
const handleSubmit = async (e)=>{
  e.preventDefault()
  
  
   await fetch('https://zippy-pay.onrender.com/api/user/login', {
     method: 'POST',
     body: JSON.stringify({
    
       email: email2,
       password: password2
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   }).then((response)=>{ 
     console.log(response)
     if(response.status === 'ok'){
         alert('You are now Login')
     } else {
        alert('Please Verify your Email')
     }
     return response.json()})
   .then((user)=>{

    localStorage.setItem('user', JSON.stringify(user))


     console.log(user)})
     setSuccess2(true)
      setEmail2("")
     setPassword2("")
}

  
  return (
    <div className='register' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#4040a1'}}>
      <div style={{backgroundColor: '#4040a1', height: '70%',display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%'}}>
            <div className='form-container' >
                 <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column ', width: '80%' }}>
                    <h3 className='text-center mb-3 '>Log in</h3>
                      
                      
                      
                      <input className='my-2 border-primary width' type="email" value={email2}  name="email" id="email" placeholder='Email' onChange={(e)=> setEmail2(e.target.value)} required/>

                      <input className='my-2 border-primary width ' type="password" value={password2} name="password" id="password" placeholder='Password'onChange={(e)=> setPassword2(e.target.value)} required/>
                      <label className='text-center'>
                        
                        <input className='my-2 ' type="radio" name="radio" id="radio" /> show Password
                      </label>
                      
                      <input className='my-4 btn btn-block btn-primary' type="submit" value="Login" />
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