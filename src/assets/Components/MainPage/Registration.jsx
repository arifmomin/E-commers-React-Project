import React from 'react'
import RegistrationLeft from "../Pages/RegistrationLeft"
import RegistrationRight from "../Pages/RegistrationRight"

export const Registration = () => {
  return (
    <div className='flex'>
      <RegistrationLeft/>
      <RegistrationRight/>
    </div>
  )
}
export default Registration;