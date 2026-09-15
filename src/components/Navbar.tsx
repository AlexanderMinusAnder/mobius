import './Navbar.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <div className='navbar'>
        <Link to={"/"}><img src={logo} className='navbar__image' /></Link>
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
