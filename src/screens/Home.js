import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Notifications from '../components/Notifications'
import Commitment from '../components/Commitment'
import ExploreDep from '../components/ExploreDep'
import News from '../components/News'
import '../css/news.css'
export default function Home() {
 
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Notifications/>  
      <Commitment/> 
      <ExploreDep/>  
      <News/> 
    </div>
  )
}
