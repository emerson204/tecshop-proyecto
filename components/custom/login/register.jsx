import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Register = () => {
  return (
    <section className='flex pt-10 pb-20'>
      <Image className='max-sm:hidden md:w-[55%]' width={805} height={701} src="/login/login.png" alt="login" />
      <div className='flex flex-col gap-10 m-auto'>
        <div className='flex flex-col gap-6'>
          <p className='text-[2rem] md:text-[1.8rem] lg:text-[2.4rem] font-bold'>Create an account</p>
          <p className='text-[1.1rem] lg:text-[1.5rem]'>Enter your details below</p>
        </div>
        <div className='flex flex-col gap-8'>
          <input className='lg:text-[1.2rem] focus:outline-none border-b-2 border-[#7f7f7f] placeholder-[#7f7f7f]' type="text" placeholder='Name' />
          <input className='lg:text-[1.2rem] focus:outline-none border-b-2 border-[#7f7f7f] placeholder-[#7f7f7f]' type="text" placeholder='Email or Phone Number' />
          <input className='lg:text-[1.2rem] focus:outline-none border-b-2 border-[#7f7f7f] placeholder-[#7f7f7f]' type="text" placeholder='Password' />
        </div>
        <div className='flex flex-col gap-2'>
          <button className='rounded bg-[#db4444] text-white py-2 px-7 md:px-5 lg:px-8 lg:text-[rem]'>Create Account</button>
          <div className='flex gap-5 justify-center items-center rounded bg-white border-2 border-[#999999]'>
            <Image width={20} height={15} src="/login/Icon-Google.png" alt="icon-google" />
            <button className='text-black py-2 px-2 md:px-5 lg:px-8 lg:text-[1rem]'>Sign up with Google</button>
          </div>
        </div>
        <div className='flex justify-center gap-4'>
          <p>Already have account?</p>
          <Link href="/login">
            <p className='text-[#7f7f7f] lg:text-sm'>Log in</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Register
