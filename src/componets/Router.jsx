import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Cards from './Card'

import View from './View'
import Update from './Update'

import Insert from './Insert'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'
import Fav from './Fav'
import Remove from './Remove'
export default function Router() {
  return (
    <BrowserRouter>
    <NavBar/>
   <Routes>
    {/* <Route exact path='/' element={<Home/>}> home pagge</Route> */}
    <Route  exact path='/' element={<Cards/>}>View</Route>
   
 <Route  exact path='/Insert' element={<Insert/>}>INSERT</Route>
   
    <Route  exact path='/update/:id' element={<Update/>}>View</Route>
    <Route  exact path='/View' element={<View/>}>View</Route> 
    <Route  exact path='/Fav' element={<Fav/>}>View</Route> 
    <Route  exact path='/Remove' element={<Remove/>}>View</Route> 
    
    </Routes>
    <Footer/>
   </BrowserRouter>
   
  )
}
