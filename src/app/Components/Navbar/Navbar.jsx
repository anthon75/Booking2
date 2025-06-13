import React from 'react'
import Logo from '../Helpers/logo';
import styles from './Navbar.module.css';
import { GiHamburgerMenu } from "react-icons/gi";


const navbar = () => {
  return (
    <div className={`${styles.navbar}`}>
             <div>
          <Logo/>
        </div>
        <div className={`${styles.navlinks}`}>
          <h1><a href="">Home</a></h1>
           <h1><a href="">Hotels</a></h1>
            <h1><a href="">Flights</a></h1>
             <h1><a href="">Car Rentals</a></h1>

        </div>
        <div className={`${styles.buttons}`}>
          <button className='px-4 py-2 border-white border rounded hover:bg-white transition bg-blue-400 font-semibold '><a href="">Sign up</a></button>
          <button className='px-4 py-2 border-white border rounded hover:bg-white transition bg-blue-400 font-semibold '><a href="">Register</a></button>
        </div>
       <div className='flex size-12'>
          <GiHamburgerMenu />
       </div>
      </div>
   
  );
}

export default navbar
