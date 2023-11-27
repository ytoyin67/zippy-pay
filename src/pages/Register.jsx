
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'



function Register() {
   
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)


  
  let navigate = useNavigate();





const handleSubmit = async (e)=>{
     e.preventDefault()
     
     
      await fetch('https://zippy-pay.onrender.com/api/user/register', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          phoneNumber: phone,
          email: email,
          password: password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response)=>{ 
        console.log(response)
        if(response.ok === true){

          alert('Registration successful, You can now login')

          
  
;
        } else {
          alert('User already Exist')
        }
        return response.json()})
      .then((data)=> console.log(data))
    setSuccess(true)
     setName("")
     setPhone("")
     setEmail("")
     setPassword("")
}


  return (
    <div className='register' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#4040a1'}}>
      <div style={{backgroundColor: '#4040a1', height: '70%',display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%'}}>
            <div className='form-container' >
                 <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column ', width: '80%' }}>
                    <h3 className='text-center mb-3 '>Sign Up</h3>

                      <input  className='my-2 border-primary width' type="text" name='name' value={name} placeholder='Name' onChange={(e)=> setName(e.target.value)}/>

                      <input className='my-2 border-primary width' type="number" name="phone" id="phone" placeholder='Phone Number' value={phone} onChange={(e)=> setPhone(e.target.value)}/>

                      <input className='my-2 border-primary width' type="email" name="email" id="email" value={email} placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>

                      <input className='my-2 border-primary width ' type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                      <label className='text-center'>
                        
                        <input className='my-2 ' type="radio" name="radio" id="radio" /> show Password
                      </label>
                      
                      <input className='my-4 btn btn-block btn-primary' type="submit" value="Sign up" />
                 </form>
                
                 <div className='d-flex gap-2 mt-2'>
                    <p>have an account?</p> <h6><Link className='text-primary' to="/login">Log in</Link></h6>
                 </div>
            </div>    

      </div>

        

    </div>
  )
}

export default Register