import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Nate } from './components/Nate';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import FixedButton from './components/FixedButton';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nate" element={<Nate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FixedButton/>
      </div>
    </BrowserRouter>
  );
}

export default App;
