import React from 'react'
import Registration from '../../../image/RegistrationLeft.png'

export const RegistrationLeft = () => {
  return (
    <div className='w-1/2 h-screen flex flex-col gap-y-[100px] justify-start items-center bg-[#F3F5F7]'>
      <h2 className='text-3xl font-bold font-[Ramaraja] text-CommonColor mt-10'>AMS</h2>
        <picture><img className='w-[500px] h-auto' src={Registration} alt={Registration} /></picture>
    </div>
  )
}
export default RegistrationLeft

// const signUp = ()=>{
//   if(!Name){
//     setNameError("Name Missing");
//   }else if(!userName){
//     setNameError("");
//     setuserNameError("UserName missing");
//   }else if(!Email){
//     setuserNameError("");
//     setEmailError ("Email missing");
//   }else if(!Password){
//     setEmailError ("");
//     setPasswordErro("password Missing");
//   }else{
//     setName("");
//     setuserName("");
//     setEmail("");
//     setPassword("");
//     setNameError("");
//     setuserNameError("");
//     setEmailError ("");
//     setPasswordErro("");
//   }
// }
// const handleName = (event)=>{
//   setName(event.target.value);
// }

//   const handleEye = () =>{
//     setEye(!Eye);
//   }

// const [Eye, setEye] = useState(false);
// const [Name, setName] = useState("");
// const [userName, setuserName] = useState("");
// const [Email, setEmail] = useState("");
// const [Password, setPassword] = useState("");

// const [NameError, setNameError] = useState("");
// const [userNameError, setuserNameError] = useState("");
// const [EmailError, setEmailError] = useState("");
// const [PasswordError, setPasswordErro] = useState("");