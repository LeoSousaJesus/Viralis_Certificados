import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Certification } from './pages/Certification';
import { Methodology } from './pages/Methodology';
import { Authenticity } from './pages/Authenticity';
import { Verify } from './pages/Verify';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col font-['Public_Sans',sans-serif]">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/authenticity" element={<Authenticity />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
