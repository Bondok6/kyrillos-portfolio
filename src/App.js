import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Work, Contact } from './pages';
import Sidebar from './components/Navbar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Sidebar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
