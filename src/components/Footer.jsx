import React from 'react'
import zippayWhite from '../images/zippyPayWhite.jpg'
import {Link} from "react-router-dom"


function Footer() {
  return (
    <div className='footer'>
       <div className="grid-footer">
         <div>
           <div>
            <div className='bg-light mt-5 sub-width p-3'>
              <h3 >Subscribe to our newsletter</h3>
              <p>stay updated, receiove tips and articles.
              </p>
              <div className='subscribe'>
                <input type="text" placeholder='your email'/>
                <button className='btn btn-default'>subscribe</button>
              </div>
            </div>
              <img className='mt-4 
              ' src={zippayWhite} style={{width: '140px',marginLeft: '80px'}} alt="" />
           </div>
         </div>
        <div className=' footer-flex'>
               <div className='pe-3 mobile-center'>
                  <h3 className='text-primary'>Navigation</h3>
                  <ul>
                      <li className='h5'> <Link to="/">Home</Link></li>
                        <li className='h5'><Link to="/features">Features</Link></li>
                        <li className='h5'><Link to="/pricing">Pricing</Link></li>
                        <li className='h5'><Link to="/resoursces">Resourses</Link></li>
                        <li className='h5'><Link to="/support">Support</Link></li>
                    
                  </ul>
              </div>
            <div className='px-4 mobile-center'>
              <h3 className='text-primary'>contact us</h3>
              <p className='h5'>support@zippypay</p>
              <p className='h5'>00948478</p>
            </div>
            <div className='px-4 mobile-center'>
              <h3 className='text-primary'>Get started</h3>
              <p className='h5'><Link to="/signup">Sign up</Link></p>
              <p className='h5'><Link to="/login">Log in</Link></p>
                
            </div>
         

         </div>
       </div>
    </div>
  )
}

export default Footer