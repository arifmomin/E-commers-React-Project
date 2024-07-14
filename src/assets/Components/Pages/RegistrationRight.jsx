import React, {useState} from 'react'
import {IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export const RegistrationRight = () => {
  const [Eye, setEye] = useState(false);
  const [Name, setName] = useState("");
  const [userName, setuserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [NameError, setNameError] = useState("");
  const [userNameError, setuserNameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordErro] = useState("");

const signUp = ()=>{
  if(!Name){
    setNameError("Name Missing");
  }else if(!userName){
    setNameError("");
    setuserNameError("UserName missing");
  }else if(!Email){
    setuserNameError("");
    setEmailError ("Email missing");
  }else if(!Password){
    setEmailError ("");
    setPasswordErro("password Missing");
  }else{
    setName("");
    setuserName("");
    setEmail("");
    setPassword("");
    setNameError("");
    setuserNameError("");
    setEmailError ("");
    setPasswordErro("");
  }
}
const handleName = (event)=>{
  setName(event.target.value);
}

  const handleEye = () =>{
    setEye(!Eye);
  }
  return (
    <div className='flex items-center justify-center pl-20'>
      <div>
        <div>
        <h2 className='text-[40px] text-CommonColor font-semibold leading-[44px] font-Poppins'>Sign up</h2>
        <p className='text-base text-[#6C7275] font-normal mt-6 mb-8'>Already have an account? <span><a className='font-semibold text-[#38CB89]' href="#">Sign in</a></span></p>
        </div>
        <form className='w-[456px] flex flex-col items-start justify-start gap-y-8' action="#" onSubmit={(e)=>{e.preventDefault()}}>
               <div className='w-full'>
              <fieldset className='py-3 border-b-[1px] border-[#E8ECEF]' htmlFor="Your name">
            <input onChange={handleName} className=' bg-transparent outline-0 w-full h-full text-base font-normal leading-[26px] text-CommonColor placeholder-[#6C7275]' type="text" placeholder='Your name' value={Name} />
          </fieldset>
          <span className='text-base font-medium text-red-700'>{NameError}</span>
           </div>
           <div className='w-full'>
              <fieldset className='py-3 border-b-[1px] border-[#E8ECEF]' htmlFor="Username">
            <input className='bg-transparent outline-0 w-full h-full text-base font-normal leading-[26px] text-CommonColor placeholder-[#6C7275]' type="text" placeholder='Username' value={userName} 
            onChange={(e)=>{setuserName(e.target.value)}} />
            
          </fieldset>
          <span className='text-base font-medium text-red-700'>{userNameError}</span>
           </div>
           <div className='w-full'>
              <fieldset className='py-3 border-b-[1px] border-[#E8ECEF]' htmlFor="Your name">
            <input className='bg-transparent outline-0 w-full h-full text-base font-normal leading-[26px] text-CommonColor placeholder-[#6C7275]' type="email" placeholder='Email address' value={Email}
            onChange={(e)=>{setEmail(e.target.value)}}/>
          </fieldset>
          <span className='text-base font-medium text-red-700'>{EmailError}</span>
           </div>
           <div className='w-full'>
              <fieldset className='border-b-[1px] border-[#E8ECEF] py-3 flex justify-center items-center' htmlFor="Your name">
            <input className='w-full h-full bg-transparent outline-0 text-base font-normal leading-[26px] text-CommonColor placeholder-[#6C7275]' type={Eye?('text') : ('password')} placeholder='Password' value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}/>
            <span onClick={handleEye}>
              {Eye?(<IoEyeOffOutline className='text-lg text-[#6C7275] cursor-pointer'/>) : (<IoEyeOutline className='text-lg text-[#6C7275] cursor-pointer'/>)}
         </span>
          </fieldset>
          <span className='text-base font-medium text-red-700'>{PasswordError}</span>
           </div>
           <div>
            <fieldset className='flex justify-center items-center' htmlFor="acceptTerms">
              <input className='w-6 h-6 cursor-pointer' type="checkbox" name='acceptTerms'/>
              <span className='text-base font-normal text-[#6C7275] pl-3'>I agree with<a className='font-semibold text-CommonColor' href="#"> Privacy Policy</a> and <a className='font-semibold text-CommonColor' href="#">Terms of Use</a></span>
            </fieldset>
           </div>
           <div className='w-full'>
            <button onClick={signUp} className='w-full h-12 rounded-lg bg-CommonColor text-base text-white font-normal'>Sign Up</button>
           </div>
        </form>
      </div>
    </div>
  )
}
export default RegistrationRight;
