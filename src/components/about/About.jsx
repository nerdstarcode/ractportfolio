import React from 'react'
import './index.sass'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {DiCoffeescript} from 'react-icons/di'
import {IoIosAlbums} from 'react-icons/io'
function About() {
  return (
    <section id="about">
      <h5>Fique sabendo</h5>
      <h2>Sobre Mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experiencia</h5>
              <small>1+ Ano</small>
            </article>
            <article className="about__card">
              <DiCoffeescript className="about__icon"/>
              <h5>Programação</h5>
              <small>7+ Linguagens</small>
            </article>
            <article className="about__card">
              <IoIosAlbums className="about__icon"/>
              <h5>Projetos</h5>
              <small>10+ completos</small>
            </article>
          </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit doloremque? Aliquid, facere perspiciatis excepturi sequi incidunt iure eum aut, earum provident eveniet sed, rerum amet officiis! Temporibus, ratione maxime?
            </p>
            <a href="" className="btn btn-primary">Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About