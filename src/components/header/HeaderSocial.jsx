import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/sthiven-melo-a67a1722b/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/nerdstarcode" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/nerd_star_code/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial