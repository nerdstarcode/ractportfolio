import React from 'react'
import './index.sass'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá! Eu sou</h5>
        <h1>Sthiven Melo</h1>
        <h5 className="text-light">Developer Junior</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header