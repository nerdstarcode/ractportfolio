import React from 'react'
import './index.sass'
import AVTR1 from '../../assets/a.png'
import AVTR2 from '../../assets/a.png'
import AVTR3 from '../../assets/a.png'
import AVTR4 from '../../assets/a.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data =[
  {
    avatar: AVTR1,
    name: 'xxx',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia suscipit ipsa enim, dolore aut natus accusamus? Officiis, earum assumenda?',
  },
  {
    avatar: AVTR2,
    name: 'xxx',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia suscipit ipsa enim, dolore aut natus accusamus? Officiis, earum assumenda?',
  },
  {
    avatar: AVTR3,
    name: 'xxx',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia suscipit ipsa enim, dolore aut natus accusamus? Officiis, earum assumenda?',
  },
  {
    avatar: AVTR4,
    name: 'xxx',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia suscipit ipsa enim, dolore aut natus accusamus? Officiis, earum assumenda?',
  },
]
function Testemonials() {
  return (
    <section id="testemonials">
      <h5>Review de Clientes e Parceiros de Trabalho</h5>
      <h2>Depoimentos</h2>
      <Swiper className="container testemonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testemonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testemonials