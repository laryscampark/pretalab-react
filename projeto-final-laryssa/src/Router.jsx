import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Inicio</h1>}/>
                <Route path="/sobre" element={<h1>Sobre</h1>}/>
                <Route path="/portifolio" element={<h1>Portifolio</h1>}/>
                <Route path="/contato" element={<h1>contato</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}