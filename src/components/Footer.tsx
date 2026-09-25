import './Footer.css'
import instagram from "../assets/images/instagram.png"
import mail from "../assets/images/mail.svg"
import facebook from "../assets/images/facebook.svg"
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <div className='footer'>
        {/* <p>Contactez nous sur wearemobius@hotmail.com</p> */}
        <ul className="footer__socials">
          <li><a target="_blank" href="https://www.instagram.com/wearemobius_?stkn=MTh3djFrMmNncWZocQ=="><img className="socials__image" src={instagram} /></a></li>
          <li><a target="_blank" href="https://www.facebook.com/profile.php?id=61589862058979"><img className="socials__image" src={facebook} /></a></li>
          <li><Link to="/contact"><img className="socials__image" src={mail} /></Link></li>
        </ul>
    </div>
  )
}

export default Footer
