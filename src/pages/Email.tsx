import { useRef, useState } from 'react';
import './Email.css'
import emailjs from "@emailjs/browser";
import loading from "../assets/images/loading.png"

function Email() {

  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e: any) => {
    e.preventDefault()

     if (!form.current || !serviceId || !templateId || !publicKey) {
      return;
    }

    setIsLoading(prev => !prev)

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(() => {
      alert("Message envoyé !");
      form.current?.reset();
      setIsLoading(prev => !prev)
    },
    (error: any) => {
      alert("Le message n'as pas pu être envoyé")
      console.log(error)
    })
  }

  return (
    <div className='email'>
        <h1 className='title'>Nous contacter</h1>

      <div className='email__form-container'>
        <form ref={form} className='email__form' onSubmit={sendEmail}>

          <div className='email__form--field'>
            <label htmlFor="user_name">Nom</label>
            <input 
              type='text'
              placeholder='Votre nom'
              name='user_name'
              id='user_name'
              className='email__form--input'
              required
            />
          </div>

          <div className='email__form--field'>
            <label htmlFor="user_email">Email</label>
              <input
              type='email'
              placeholder='Votre mail'
              name='user_email'
              id='user_email'
              className='email__form--input'
              required
              />
          </div>

          <div className='email__form--field'>
            <label htmlFor="subject">Objet</label>
              <input
              type='text'
              placeholder='Objet de votre mail'
              name='subject'
              id='subject'
              className='email__form--input'
              required
            />
          </div>  

          <div className='email__form--field'>
            <label htmlFor="message">Message</label>
            <textarea
              placeholder='Votre message'
              name='message'
              id='message'
              required
            />
          </div>
        
          {isLoading ? 
            <img src={loading} />
          :
            <button type='submit'>Envoyer</button>
          }
        </form>
      </div>
    </div>
  )
}

export default Email
