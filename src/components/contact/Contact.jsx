import React from 'react'
import './index.sass'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zaaoc3q', 'template_gzqjq58', form.current, 'cEtYqHBrtcSCVMJ9Y')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <section id="contact">
      <h5>Entrar Em Contato</h5>
      <h2>Contate-me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>sthivendevelop@gmail.com</h5>
            <a target="_blank" href="mailto:sthivendevelop@gmail.com">Envie uma mensagem</a>
          </article>
          <article className="contact__option">
            <RiLinkedinBoxLine className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>Sthiven Melo</h5>
            <a target="_blank" href="https://www.linkedin.com/in/sthiven-melo-a67a1722b/">Envie uma mensagem</a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+55 21 98730-4708</h5>
            <a target="_blank" href="https://api.whatsapp.com/send?phone+5521987304708">Envie uma mensagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu Nome Completo' required/>
          <input type="text" name='email' placeholder='Seu Email' required/>
          <textarea name="message" rows="7" placeholder="Sua Mensagem" required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact