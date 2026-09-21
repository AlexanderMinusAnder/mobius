import './Members.css'
import mobius from "../assets/images/mobius.jpeg"
import kenny from "../assets/images/kenny.jpeg"
import drayven from "../assets/images/drayven.jpeg"
import rox from "../assets/images/rox.jpeg"
import nathan from "../assets/images/nathan.jpeg"
import { useEffect } from 'react'
import useCurrentLanguage from '../hooks/useCurrentLanguage'

function Members() {

  const member = useCurrentLanguage().members

  const members: object[] = [
  {
    name: "Kenny",
    description: member.kenny,
    image: kenny
  },
  {
    name: "Drayven",
    description: member.drayven,
    image: drayven
  },
  {
    name: "Rox",
    description: member.rox,
    image: rox
  },
  {
    name: "Nathan",
    description: member.nathan,
    image: nathan
  }
  ]

  useEffect(() => {
    window.scroll(0, 0)
  })

  return (
    <div className='members'>
      <h1 className='title'>{member.title}</h1>

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
