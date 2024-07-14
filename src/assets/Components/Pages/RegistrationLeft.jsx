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
