import React from 'react'
import Navbar from '../home/Navbar'

const About = () => {
  return (
    <section className='bg-white h-screen w-full'>
      <div className="text-black">
        <Navbar />
        <h2 className=''>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo velit. Sed non lectus auctor, dictum ipsum vitae, pharetra dui. Aliquam erat volutpat. Donec ullamcorper libero at urna feugiat, ac consectetur tellus tristique.</p>
      </div>
    </section>
  )
}

export default About
