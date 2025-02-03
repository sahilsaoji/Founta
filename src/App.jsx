import React from 'react';
import './App.css';
import logo from './assets/FountaLogo.png';

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="nav-brand">
            <img src={logo} alt="Founta Logo" className="nav-logo" />
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Schedule an Event
                </a>
              </li>
              <li onClick={() => scrollToSection('about')}>About Us</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
    <section id="hero" className="hero">
    <div className="hero-text">
      <h1 className="hero-line-1">Connecting Ideas, Creating Memories</h1>
      <h2 className="hero-line-2">Your Company's Event, Our Platform</h2>
      <button
        className="cta"
        onClick={() =>
          window.open('https://calendly.com', '_blank', 'noopener,noreferrer')
        }
      >
      Schedule an Event
      </button>
    </div>
    </section>


      {/* Why Founta Section */}
      <section id="why" className="section">
        <h2>Why Founta?</h2>
        <p>
          Founta is your trusted partner in corporate event planning. Our mission is to make organizing
          events seamless, so you can focus on what matters most—building connections and creating
          memories. Whether you’re planning team-building activities, corporate dinners, or outdoor
          adventures, Founta has you covered.
        </p>
      </section>

      {/* Why Founta Section */}
      <section id="why" className="section">
        <h2>How it works?</h2>
        <p>
          Founta is your trusted partner in corporate event planning. Our mission is to make organizing
          events seamless, so you can focus on what matters most—building connections and creating
          memories. Whether you’re planning team-building activities, corporate dinners, or outdoor
          adventures, Founta has you covered.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Founta</h2>
        <p>
          Our goal is to take the hassle out of event planning by providing a one-stop platform for booking
          venues, organizing activities, and ensuring that your event runs smoothly.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>What we're building?</h2>
        <p>
          Our goal is to take the hassle out of event planning by providing a one-stop platform for booking
          venues, organizing activities, and ensuring that your event runs smoothly.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Founta. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
