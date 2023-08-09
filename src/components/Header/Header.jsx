import React from 'react'
import './Header.css'
function Header() {
  return (
   <section className='h-wrapper'>
    <div className='flexCenter padding innerWidth h-container'>
    <img src="logo.png" alt="LOGO"  width={100}/>
    </div>
<div className='flex-Center h-menu'>
    <a href="">Home</a>
    <a href="">Home</a>
    <a href="">Home</a>
    <a href="">Home</a>
    <a href="">Home</a>
    <button className='button'>Contact Us</button>
</div>

   </section>
  )
}

export default Header