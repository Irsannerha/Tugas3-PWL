import {
    BrowserRouter, Route, Routes,
} from 'react-router-dom';

import Beranda from './pages/Beranda'
import Kontak from './pages/Kontak'
import Tentang from './pages/Tentang'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/kontak" element={<Kontak />} />
                <Route path="/tentang" element={<Tentang />} />
            </Routes>
        </BrowserRouter>
    )
}