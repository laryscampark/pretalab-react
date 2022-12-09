import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Inicio } from './pages/Inicio'

import { Menu } from './components/Menu'

import { Footer } from './components/Footer'

export function Router() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/sobre" element={<h1>Sobre</h1>}/>
                <Route path="/portifolio" element={<h1>Portifolio</h1>}/>
                <Route path="/contato" element={<h1>contato</h1>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}