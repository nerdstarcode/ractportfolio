import React from 'react'
import './index.sass'
import Signal from '../../assets/portfolio/01-Signal.png'
import Insta from '../../assets/portfolio/02-Insta.png'
import Form from '../../assets/portfolio/03-Form.png'
import Dash from '../../assets/portfolio/04-Dashboard.png'
import Port from '../../assets/portfolio/05-Port.png'
import Login from '../../assets/portfolio/06-Login.png'
const data = [
  {
    id: 1,
    image: Signal,
    title: 'Site de tatuagem',
    github: 'https://github.com/nerdstarcode/Signal',
    demo: 'https://nerdstarcode.github.io/Signal/'
  },
  {
    id: 2,
    image: Insta,
    title: 'Réplica Instagram',
    github: 'https://github.com/nerdstarcode/Clone-Instagram',
    demo: 'https://nerdstarcode.github.io/Clone-Instagram/'
  },
  {
    id: 3,
    image: Form,
    title: 'Formulário de Login',
    github: 'https://github.com/nerdstarcode/LoginBootstrap',
    demo: 'https://nerdstarcode.github.io/LoginBootstrap/'
  },
  {
    id: 4,
    image: Dash,
    title: 'Dashboard responsivo',
    github: 'https://github.com/nerdstarcode/dashboard',
    demo: 'https://nerdstarcode.github.io/dashboard/'
  },
  {
    id: 5,
    image: Port,
    title: 'Ideia de portfolio',
    github: 'https://github.com/nerdstarcode/Portfolio',
    demo: 'https://nerdstarcode.github.io/Portfolio/'
  },
  {
    id: 6,
    image: Login,
    title: 'Réplica Login Americanas',
    github: 'https://github.com/nerdstarcode/americanas-login',
    demo: 'https://nerdstarcode.github.io/americanas-login/'
  },
]
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Meu Trabalho Recente</h5>
      <h2>Portfólio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">GitHub</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article> 
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio