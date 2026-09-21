import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LanguageContext } from "./contexts/LanguageContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Members from "./pages/Members"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {

    const [language, setLanguage] = useState("fr")

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/members" element={<Members />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </LanguageContext.Provider>
    )
}

export default App