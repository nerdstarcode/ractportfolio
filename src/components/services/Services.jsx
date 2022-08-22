import React from 'react'
import './index.sass'
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id="services">
      <h5>O Que Oferto</h5>
      <h2>Serviços</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Identidade Visual</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Desenvolvimento de logos</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Manual da logo</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Fotografia</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Portfolio</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Manutenção</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Wordpress Manutenção e Updates</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Mockup</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Website Desing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>App Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Responsive Web Desing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services