import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Work, Contact, Error } from './pages';
import Sidebar from './components/Navbar/Sidebar';
import MenuIcon from './components/Navbar/MenuIcon';
import Menu from './components/Navbar/Menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <header>
        <MenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen ? (
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        ) : (
          <Sidebar />
        )}
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
