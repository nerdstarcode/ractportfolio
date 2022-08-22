import React from 'react'
import './index.sass'
import {BsGithub} from 'react-icons/bs'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'
import {FaRegCopyright} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sthiven</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#Testemonials">Testemonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/nerdstarcode"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/sthiven-melo-a67a1722b/"><RiLinkedinBoxLine/></a>
        <a href="https://www.instagram.com/nerd_star_code/?hl=en"><BsInstagram/></a>
        <a href="https://api.whatsapp.com/send?phone=5521987304708"><SiWhatsapp/></a>
      </div>
      <div className="footer__copyright">
        <small>
          <FaRegCopyright/> NerdStarCode. Todos os direitos reservados
        </small>
      </div>
    </footer>
  )
}

export default Footer