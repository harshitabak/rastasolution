import React from 'react'
import Navbar from './Navbar'
import Popularslider from './Popularslider'
import Trendingslider from './Trendingslider'

const Home = () => {
  return (
    <>
    <div className='main'>
      <Navbar/>
      <Popularslider/>
      <Trendingslider/>
</div>
    </>
  )
}

export default Home
