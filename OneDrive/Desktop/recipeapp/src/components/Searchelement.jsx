import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Trendingslider from './Trendingslider'

const Searchelement = () => {
   const   {searchTerm} =useParams()
   const [data, setData] = useState([])
   useEffect (()=>{
       const fetchData = async ()=>{
           const api =  await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
           const data = await api.json()
           console.log(data.meals)
           setData(data.meals)
       }
       fetchData()
   },[])
  return (
    <>
    <Navbar/>
    <div style={{
      width:'90%',
      display:'grid',
      gridTemplateColumns:'repeat(auto-fit,minmax(15rem,1fr))',
      gridGap:'1rem',
      marginTop:"1.5rem"
    }}>
   {
    data.map((d) =>{

      return(
        <Link to = {`/${d.idMeal}`} key={d.id}  className='link'>
        <div style={{textAlign :'center'}}>
         <div  className='img'>
         <img src={d.strMealThumb} alt='' style={{width:"13rem"}}/>
        </div>
        <h2>{d.strMeal} </h2>
        </div>
        </Link>
      )
    })
   }
   </div>
      

      <Trendingslider/>
    </>
  )
}

export default Searchelement
