import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'




const AllRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        
       
        
    </Routes>
    
    </>
  )
}

export default AllRoutes