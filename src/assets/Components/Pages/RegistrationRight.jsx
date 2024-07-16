import React, {useState} from 'react'
import {IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export const RegistrationRight = () => {

const [Eye, setEye] = useState(false);
const [Name, setName] = useState("");
const [UserName, setUserName] = useState ("");
const[Email, setEmail] = useState("");
const [Password, setPassword] = useState("");






console.log(Eye);
const handleEye = ()=>{
  setEye(!Eye)
}







  return (
    <div className='flex items-center justify-center pl-20'>
      <div>
        <div>
        <h2 className='text-[40px] text-CommonColor font-semibold leading-[44px] font-Poppins'>Sign up</h2>
        <p className='text-base text-[#6C7275] font-normal mt-6 mb-8'>Already have an account? <span><a className='font-semibold text-[#38CB89]' href="#">Sign in</a></span></p>
        </div>
        <form className='w-[456px] flex flex-col items-start justify-start gap-y-8' action="#">
               <div className='w-full'>
              <fieldset className='py-3 border-b-[1px] border-[#E8ECEF]' htmlFor="Your name">
            <input className=' bg-transparent outline-0 w-full h-full text-base font-normal leading-[26px] text-CommonColor placeholder-[#6C7275]' type="text" placeholder='Your name' />
          </fieldset>
          
           </div>
           <div className='w-full'>
              <fieldset className='py-3 border-b-[1px] border-[#E8ECEF]' htmlFor="Username">
            <input className='bg-transparent outline-0 w-full h-full text-base font-normal leading-[26px] text-CommonColor placeholder-[#6C7275]' type="text" placeholder='Username' 
            />
            
          </fieldset>
         
           </div>
           <div className='w-full'>
              <fieldset className='py-3 border-b-[1px] border-[#E8ECEF]' htmlFor="Your name">
            <input className='bg-transparent outline-0 w-full h-full text-base font-normal leading-[26px] text-CommonColor placeholder-[#6C7275]' type="email" placeholder='Email address'
            />
          </fieldset>
         
           </div>
           <div className='w-full'>
              <fieldset className='border-b-[1px] border-[#E8ECEF] py-3 flex justify-center items-center' htmlFor="Your name">
            <input className='w-full h-full bg-transparent outline-0 text-base font-normal leading-[26px] text-CommonColor placeholder-[#6C7275]' type={Eye ? ("text") : ("password")} placeholder='Password'
           />
           <span onClick={handleEye}>
            {Eye? (<IoEyeOffOutline className='text-xl text-[#6C7275]'/>) : (<IoEyeOutline className='text-xl text-[#6C7275]'/>)}
           </span>
          </fieldset>
        
           </div>
           <div>
            <fieldset className='flex justify-center items-center' htmlFor="acceptTerms">
              <input className='w-6 h-6 cursor-pointer' type="checkbox" name='acceptTerms'/>
              <span className='text-base font-normal text-[#6C7275] pl-3'>I agree with<a className='font-semibold text-CommonColor' href="#"> Privacy Policy</a> and <a className='font-semibold text-CommonColor' href="#">Terms of Use</a></span>
            </fieldset>
           </div>
           <div className='w-full'>
            <button className='w-full h-12 rounded-lg bg-CommonColor text-base text-white font-normal'>Sign Up</button>
           </div>
        </form>
      </div>
    </div>
  )
}
export default RegistrationRight;
