import './Navbar.css'
import logo from '../assets/images/logo.png'

function Navbar() {

  return (
    <div className='navbar'>
        <img src={logo} className='navbar__image' />
        <p className='navbar__text'>En mathématiques, une bande de Möbius est une surface que l'on obtient en joignant les extrémités d'une bande de papier en effectuant un demi-tour.</p>
        <div className='navbar__language'>
            <select className='language__select'>
                <option value="fr">Français 🇫🇷</option>
                <option value="en">English 🇬🇧</option>
            </select>
        </div>
    </div>
  )
}

export default Navbar
