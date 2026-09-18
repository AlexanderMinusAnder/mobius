import './Members.css'
import mobius from "../assets/images/mobius.jpeg"
import kenny from "../assets/images/kenny.jpeg"
import drayven from "../assets/images/drayven.jpeg"
import rox from "../assets/images/rox.jpeg"
import nathan from "../assets/images/nathan.jpeg"
import { useEffect } from 'react'

const members: object[] = [
  {
    name: "Kenny",
    description: "Le leader, auteur-compositeur principal et membre fondateur de Möbius. Ses riffs précis et incisifs, associés à sa voix puissante, propulsent la musique du groupe dans une nouvelle ère de puissance. Il cache son front et ses yeux, ce qui le rend assez insaisissable.",
    image: kenny
  },
  {
    name: "Drayven",
    description: "Un guitariste soliste qui manie sa guitare comme une puissante épée. Son style apporte une touche de power metal épique au son de Möbius. Son jeu rapide et technique s'harmonisent parfaitement avec les riffs agressifs de Kenny et les lignes de basse groovy de Rox.",
    image: drayven
  },
  {
    name: "Rox",
    description: "Le bassiste de Möbius. Ses lignes de basse groovy, graves et puissantes contrastent avec son attitude calme et sereine. Que ce soit sur scène ou en studio, il garde toujours son sang-froid… et son chapeau.",
    image: rox
  },
  {
    name: "Nathan",
    description: "Nathan est le batteur du coin. Dites bonjour à Nathan !",
    image: nathan
  }
]

function Members() {

  useEffect(() => {
    window.scroll(0, 0)
  })

  return (
    <div className='members'>
      <h1 className='title'>Qui sont les membres de Möbius</h1>

      <img src={mobius} className='members__image'/>

      <div className='member__list'>
        {
          members.map((member: any) => {
            return (
              <div className='member'>
                <div className='member__name'>
                  <h2>{member.name}</h2>
                </div>
                <div className='member__description'>
                  <p>{member.description}</p>
                </div>
                <div className='member__image'>
                  <img src={member.image} />
                </div>
              </div>
            )
          })
      }
      </div>

      

    </div>
  )
}

export default Members
