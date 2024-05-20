import React from 'react'
import './home.css'
import Navbar from '../navBar/navbar'
import HomeComp1 from '../homeComponent/homeComp1'
import HomeComp2 from '../homeComponent/homeComp2'
import HomeComp3 from '../homeComponent/homeComp3'
import HomeComp4 from '../homeComponent/homeComp4'
import Footer from '../footer/footer'

const Home = () => {
  return (
    <>
    <div className='Home'>
      <Navbar/>
      <HomeComp1/>
      <HomeComp2/>
      <HomeComp3/>
      <HomeComp4/>
      <Footer/>
    </div>
    </>
  )
}

export default Home
