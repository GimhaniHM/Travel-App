
import React, {useState} from 'react'
import './navbar.css' 
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import './navbar.scss'

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    //Function for toggle navbar
    const showNav = () => {
        setActive('navBar activeNavbar');
    }

        //Function for remove navbar
    const removeNavbar = () => {
        setActive('navBar');
    }

    return (
        <section className='navBarSection'>
            <header className='header flex'>
                
                <div className='logoDiv'>
                    <a href="#" className="logo flex"></a>
                    <h1>
                        <MdOutlineTravelExplore className='icon'/>
                        Travel.
                    </h1>
                </div>

                <div className={active}>
                <div onClick={removeNavbar} className="closeNavBar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navink">Contact</a>
                        </li>
                        
                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>
                    
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots  className="icon"/>    
                </div>
                
            </header>
        </section>
    )
}

export default Navbar 