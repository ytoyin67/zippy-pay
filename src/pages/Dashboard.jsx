import React from 'react'
import zippayWhite from '../images/zippyPayWhite.jpg'
import {FaSearch} from 'react-icons/fa'


function Dashboard() {
  return (
    <div >
      <div className='dash-nav'>
        <img src={zippayWhite} style={{width: '140px'}} alt="" />
        <div className='profile'>
          <span className='border border-primary p-1'>support</span>
          <span className='border border-primary p-1 pe-5'>
            <div className='pic'></div>John
          </span>
        </div>

      </div>

      <div className='fixed-nav'>

        <div className='border border-primary' style={{borderRadius: '20px', padding: '5px 10px'}}>
          <input type="text" placeholder='Search' style={{border: 'none', padding: '7px 10px 7px 10px', width: "80%"}}/>
          <span> <FaSearch  style={{fontWeight: 'normal'}}/> </span>
        </div>

        <button className="btn-dashboard my-4 text-primary h5 ">Dashboard</button>
        <h6 className="py-2 ps-5">Balance</h6>
        <h6 className="py-2 ps-5">Exchange rate</h6>
        <h6 className="py-2 ps-5">Virtual Cards</h6>
        <h6 className="py-2 ps-5">Pay out</h6>
        <h6 className="py-2 ps-5">Pay in</h6>
        <h6 className="py-2 ps-5">API Support</h6>
        <h6 className="py-2 ps-5">API Integration</h6>
        <h6 className="py-2 ps-5">Settings</h6>

      </div>

      <div className='dashboard-wallet py-4 px-5'>
         <h4>Hello John</h4> 
         <p>Good afternoon</p>

         <div className="dash-grid">

             <div className="left">
                <div>
                  <h5 className="my-2">Balance</h5>
                  <div className="balance d-flex">
                     <div className="available ">
                         <div>
                            <p>Available balance</p>
                            <p>$ 45,880.09</p>

                         </div>
                         <img src="" alt="" />
                     </div>
                     <div className="available">
                         <div>
                            <p>Available balance</p>
                            <p>$ 45,880.09</p>

                         </div>
                         <img src="" alt="" />
                     </div>
                     <div className="available">
                         <div>
                            <p>Available balance</p>
                            <p>$ 45,880.09</p>

                         </div>
                         <img src="" alt="" />
                     </div>
                     <div className="available">
                         <div>
                            <p>Available balance</p>
                            <p>$ 45,880.09</p>

                         </div>
                         <img src="" alt="" />
                     </div>
                  </div>

                </div>

                <div className="bottom d-flex">
                   <div className='rate'>
                     <h5>Exchange Rate</h5>
                     <p>USD / NGN  <span className='ms-5'>N1,200</span></p>
                     <p>GBP / NGN <span className='ms-5'>N1,200</span></p>
                     <p>YEN / NGN<span className='ms-5'>N1,200</span></p>
                      
                   </div>
                  
                   <div className='rate'>
                     <h5>Currency calculator</h5>
                     <p>USD <span className='ms-5'>N1,200</span></p>
                     <p>GBP<span className='ms-5'>N1,200</span></p>
                     <p>YEN<span className='ms-5'>N1,200</span></p>
                      
                   </div>
                  
                </div>
                 
             </div>


             <div className="right">
                <div className="virtual">
                  <h6>Request a virtual card</h6>

                  <p>Make a request to get a virtual card, and get a instant virtual card</p>
                </div>

                <button className="btn btn-default py-2 px-3 d-block">Pay in</button>
                <button className="btn btn-default py-2 px-3 d-block">Pay out</button>
                <button className="btn btn-default py-2 px-3 d-block">API support</button>
                 
             </div>

         </div>

      </div>



    </div>
  )
}

export default Dashboard