import React from 'react'
import '../css/navbar.css'
import logo from '../img/logo.png'
import swamiji from '../img/c-1-removebg-preview.png'

export default function Navbar() {
    return (
        <div>
            <div className="nav-container">
                <div className="nav-bar-top">


                    <div className="nav-left">
                        <div className="nav-img">
                            <img src={logo} width="110px" />
                        </div>
                    </div>


                    <div className="nav-center">
                        <div className="nav-text">
                            <h3>
                                <span className="nav-left-top">Sirigere Education Trust</span><br />
                                <span className="nav-left-mid">Sri Taralabalu Jagadguru Institute Of Technology</span><br />
                                <span className="nav-left-top">Ranebennur  Dist:Haveri  Tq:Ranebennur</span>
                            </h3>
                        </div>
                    </div>


                    <div className="right">
                        <img src={logo} width="120px" height="120px" style={{borderRadius:"50%"}}/>
                    </div>


                </div>
                <div className="nav-bar-bottom ">
                    <div className="dropDownMenu">
                        <ul className="dropDownUl">
                            <li><a href="index.html">Home</a></li>
                            <li className="about"><a href="#">About</a>
                                <div className="dropDownSub1">
                                    <p><a href="#" className="dropdownItems">STJ Education Society</a></p>
                                    <p> <a href="about/governing council.html" className="dropdownItems">Governing Council</a></p>
                                    <p> <a href="about/GC Meeting proceedings.html" className="dropdownItems">GC Meeting
                                        Proceedings</a></p>
                                    <p> <a href="about/Organization Structure.html" className="dropdownItems">Organization
                                        Structure</a></p>
                                    <p> <a href="404.html" className="dropdownItems">Mandatory Disclosures</a></p>
                                    <p> <a href="404.html" className="dropdownItems">President Message</a></p>
                                    <p> <a href="404.html" className="dropdownItems">President Message</a></p>
                                    <p> <a href="404.html" className="dropdownItems">GC Chairman Message</a></p>
                                </div>
                            </li>
                            <li><a href="#">Admission</a></li>
                            <li className="about"><a href="#">Department</a>
                                <div className="dropDownSub1 depWidth">
                                    <p><a href="cse.html" className="dropdownItems">Computer Science and Engineering</a></p>
                                    <p> <a href="Ise.html" className="dropdownItems">Information Science and Engineering</a></p>
                                    <p> <a href="ece.html" className="dropdownItems">Electronics and Communication Engineering</a>
                                    </p>
                                    <p> <a href="eee.html" className="dropdownItem">Electrical & Electronics Engineering</a></p>
                                    <p> <a href="mech.html" className="dropdownItem">Mechanical Engineering</a></p>
                                    <p> <a href="civil.html" className="dropdownItem">Civil Engineering</a></p>
                                </div>
                            </li>
                            <li><a href="#">Placement</a></li>
                            <li><a href="#">Facilities</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
