import React from 'react'
import Navbarr from '../../Components/Common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Common/Footer'

const LandingPageLayout = () => {
  return (
    <div className='bg-[#0e0f14]'>
    <Navbarr/>
    <div className='mt-30'></div>
    <div className='mt-10'>
        <Outlet/>
    </div>
    <Footer/>
</div>
  )
}

export default LandingPageLayout