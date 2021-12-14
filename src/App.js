import logo from './logo.svg';
import './App.css';
import About from './pages/about/About';
import { Lyrics } from './pages/lyrics/Lyrics';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/lyrics' element={<Lyrics />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
