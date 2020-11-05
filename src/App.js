import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/styles/App.css';
import Page from './layouts/Page';
import Nav from './layouts/Nav';
import Footer from './layouts/Footer';
import Slider from './layouts/Slider';

function App() {
  return (
    <Router> <div className="app">
      <div className="logo">
        <div className="imgLogo"></div>

      </div>
      <nav className="nav">
        <Nav />
      </nav>
      <div className="slider">
        <Slider />
      </div>
      <section className="page"><Page />
        <aside>

        </aside>
      </section>
      <section>

      </section>
      <aside>

      </aside>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
    </Router>

  );
}

export default App;
