import './Footer.css'
import instagram from "../assets/images/instagram.png"
import mail from "../assets/images/mail.svg"
import facebook from "../assets/images/facebook.svg"

function Footer() {

  const sendMail = () => {
    window.open("mailto:wearemobius@hotmail.com")
  }

  return (
    <div className='footer'>
        {/* <p>Contactez nous sur wearemobius@hotmail.com</p> */}
        <ul className="footer__socials">
          <li><a target="_blank" href="https://www.instagram.com/wearemobius_?stkn=MTh3djFrMmNncWZocQ=="><img className="socials__image" src={instagram} /></a></li>
          <li><a target="_blank" href="https://www.facebook.com/profile.php?id=61589862058979"><img className="socials__image" src={facebook} /></a></li>
          <li><a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=wearemobius@hotmail.com"><img className="socials__image" src={mail} /></a></li>
        </ul>
    </div>
  )
}

export default Footer
