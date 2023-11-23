import React from 'react'
import eclipse from '../images/Ellipse 2.png'


function Home() {
  return (
    <div className='width-element home position-relative' >
       <div className='smart'>
         <p className='text-primary h3'>smart Payment</p>
         <p className='h2 py-2'>Payment Made faster and easier</p>
         <p className='h6 py-1'>payment made faster and easier, we offer a user friendly and intuitive interface. We leverage cutting edge web technology</p>
         <div className='py-3'>
          <button className=' btn btn-default btn-primary text-light me-4 '>Get started</button>
          <button className='btn border-primary'>Watch demo</button>
         </div>
       </div>

       <img className='eclipse' src={eclipse} alt="eclipse" style={{position: 'absolute', top: "-90px", right: '-300px'}}/>

       <div  className='feature'>
         <h3 className='text-primary'>FEATURES</h3>
         <p className='h3'>Collect payments seamlessly with zippy-pay App</p>
         <p>Improve customer experience and intention by allowing them to pay you using their preffered channel.Your customer can pay however they like as we offer different pay in method</p>
         <button className='btn btn-default border-primary px-lg-5'>leran more</button>

         <div className=' mt-5 pt-3 my-lg-5 pt-lg-5'>

            <p className='h3'>Making payments seamlessly with Zippy-pay App</p>
            <p>Improve customer experience and intention by allowing them to pay you using their preffered channel.Your customer can pay however they like as we offer different pay in method</p>
            <button className='btn btn-default border-primary px-lg-5'>leran more</button>

        </div>
   
      </div>
      

      <div className='service my-5 py-5 grid'>
        <div className='my-3'>
           <div className='video'> 
             video to be inserted here
           </div>
        </div>

        <div class>
          <div className=''>

          </div>
           <h3 className='text-primary'>SERVICES</h3>
           <p className='h3'>collect payments seamlessly with zippy-pay App</p>
           <p>Improve customer experience and intention by allowing them to pay you using their preffered channel.Your customer can pay however they like as we offer different pay in method</p>
        </div>

      </div>



      <div className='api my-lg-5 pt-lg-4'> 
        <h3 className='text-primary'>API INTEGRATION</h3>
        <p className='h3 pt-2'>Easy Integration</p>
        <p>Our APIs give you access to all the resources you need to carry out seamless payment activities from our app, including creating and maintaining virtual accounts in available currencies, making payouts to different beneficiary , and recieving payments accross several channels and methods.</p>
        <button className="btn btn-default border-primary mt-4">See our documentation</button>
      </div>
    </div>
  )
}

export default Home