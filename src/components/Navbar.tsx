import './Navbar.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import useCurrentLanguage from '../hooks/useCurrentLanguage'

function Navbar() {

  const currentLanguage = useCurrentLanguage()
  const languageContext = useContext(LanguageContext)

  const selectLanguage = (lang: string) => {
    languageContext.setLanguage(lang)
    console.log(currentLanguage)
  }

  return (
    <div className='navbar'>
        <Link to={"/"}><img src={logo} className='navbar__image' /></Link>
        <p className='navbar__text'>{currentLanguage.navbar}</p>
        <div className='navbar__language'>
            <select className='language__select' onChange={(e) => {selectLanguage(e.target.value)}}>
                <option value="fr">Français 🇫🇷</option>
                <option value="en">English 🇬🇧</option>
            </select>
        </div>
    </div>
  )
}

export default Navbar
