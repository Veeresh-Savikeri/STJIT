import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Notifications from '../components/Notifications'
import Commitment from '../components/Commitment'
import ExploreDep from '../components/ExploreDep'

export default function Home() {
 
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Notifications/>  
      <Commitment/> 
      <ExploreDep/>   
    </div>
  )
}
