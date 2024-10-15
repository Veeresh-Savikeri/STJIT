import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import AdmissionForm from '../components/AdmissionForm'
import Commitment from '../components/Commitment'

export default function Home() {
 
  return (
    <div>
      <Navbar/>
      <Slider/>  
      <Commitment/>    
    </div>
  )
}
