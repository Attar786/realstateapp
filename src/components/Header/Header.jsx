import React from 'react'

import './Header.css'
function Header() {
  return (
   <section className='h-wrapper'>
    <div className='flexCenter paddings innerWidth h-container'>
    <img src="logo.png" alt="LOGO"  width={100}/>
<div className='flexCenter h-menu'>
    <a href="">Residencies</a>
    <a href="">values</a>
    <a href="">contact us</a>
    <a href="">Get Started</a>
    <button className='button'>
      <a href="">contact us</a></button>
</div>
</div>
   </section>
  )
}

export default Header