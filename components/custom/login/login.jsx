import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Login = () => {
  return (
    <section className='flex pt-10 pb-20'>
      <Image width={805} height={701} className='max-sm:hidden md:w-[55%]' src="/login/login.png" alt="login" />
      <div className='flex flex-col gap-14 m-auto'>
        <div className='flex flex-col gap-6'>
          <p className='text-[2rem] md:text-[1.8rem] lg:text-[2.4rem] font-bold'>Log in to Exclusive</p>
          <p className='text-[1.1rem] lg:text-[1.5rem]'>Enter your details below</p>
        </div>
        <div className='flex flex-col gap-8'>
          <input className='lg:text-[1.2rem] focus:outline-none border-b-2 border-[#7f7f7f] placeholder-[#7f7f7f]' type="text" placeholder='Email or Phone Number' />
          <input className='lg:text-[1.2rem] focus:outline-none border-b-2 border-[#7f7f7f] placeholder-[#7f7f7f]' type="text" placeholder='Password' />
        </div>
        <div className='flex justify-between'>
          <button className='rounded bg-[#db4444] text-white py-2 px-7 md:px-5 lg:px-8 lg:text-[1.2rem]'>Log in</button>
          <Link href="/password-recovery">
            <p className='text-[#db4444] py-2 lg:text-[1.2rem]'>Forget Password?</p>
          </Link>
        </div>
        <div className='flex flex-col items-center'>
          <p>You do not have an account?</p>
          <Link href="/register">
            <p className='text-[#db4444] py-2 lg:text-[1.2rem]'>Register</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Login
