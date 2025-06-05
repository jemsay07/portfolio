import React from 'react'

const Footer = () => {
  return (
    <section id="footer" className='w-full px-[12%] py-10 scroll-mt-20 bg-sky-900'>
      <div className='container mx-auto text-center text-white'>
        Copyright &copy; {new Date().getFullYear()} Jemson Sayre. All rights reserved.
      </div>
    </section>
  )
}

export default Footer
