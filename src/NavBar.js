import React, { useEffect, useState } from 'react'
import './NavBar.css'

function NavBar() {
const [show, handleShow] = useState(false)

const transitionNavBar = () => {
  if(window.scrollY > 100){
    handleShow(true)
  } else {
    handleShow(false)
  }
}

useEffect(() => {
  window.addEventListener('scroll', transitionNavBar)
  return () => window.removeEventListener('scroll', transitionNavBar)
}, [])
  return (
    <div className={`navBar ${show && 'nav_black'}`}>
      <div className="navBar_content">
        <img className='nav_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="NetFlix logo" />
        <img className='avatar_logo' src="https://w7.pngwing.com/pngs/505/761/png-transparent-login-computer-icons-avatar-icon-monochrome-black-silhouette.png" alt="" />
      </div>
      

    </div>
  )
}

export default NavBar