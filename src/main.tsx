import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
// import Home from './pages/Home'
// import Members from './pages/Members'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import { LanguageContext } from './contexts/LanguageContext'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <LanguageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </LanguageContext.Provider> */}

    <App></App>
  </StrictMode>,
)
