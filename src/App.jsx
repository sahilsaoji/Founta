import React from 'react';
import './App.css';
import logo from './assets/FountaLogo.png';

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    const recipient = "Founta.ai@gmail.com";
    const subject = "Founta Contact";
    const body = "Hello, I'm interested in learning more about Founta.";
      
    // Construct mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
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
              <li onClick={() => scrollToSection('why')}>Why Founta</li>
              <li onClick={() => scrollToSection('building')}>What We're Building</li>
              <li onClick={() => scrollToSection('about')}>About Us</li>
              <li onClick={() => scrollToSection('contact')}>Contact Us</li>
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
        <div className="why-cards">
          <div className="card">
            <h3>Better Employee Satisfaction</h3>
            <p>Companies that regularly host events see a 25% increase in employee satisfaction and retention rates, making corporate events a key factor for workplace happiness.</p>
          </div>
          <div className="card">
            <h3>Stronger Team Connections</h3>
            <p>According to a Gallup study, 70% of employees feel more connected to their peers after team-building activities, leading to improved collaboration and productivity.</p>
          </div>
          <div className="card">
            <h3>Higher Company ROI</h3>
            <p>Organizations with active event programs report a 15% boost in overall company performance by fostering better communication and creative problem-solving.</p>
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section id="building" className="section what-building">
        <h2>What We're Building</h2>
        <p>
          At Founta, we are creating a platform designed to simplify corporate event planning for both managers and employees. Our platform helps companies seamlessly discover venues, book activities, and manage events all in one place. Using AI, we're advancing filtration and discovery, ensuring companies find options tailored to their specific needs. Additionally, there will be no more need for tedious conversation between vendors and companies, and we're utilizing an AI agent to handle the back-and-forth to accelerate decision-making. Vendors can list their services, making it easy for companies to find the perfect fit for their teams. We're building a space where corporate events aren’t just logistics—they’re opportunities to foster growth, creativity, and collaboration.
        </p>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section">
        <h2>How It Works</h2>
        <div className="how-cards">
          <div className="card">
            <h3>1. Discover & Browse</h3>
            <p>
              Explore a curated list of pre-vetted venues, team-building activities, and events tailored to your company's needs. Find the perfect fit for team dinners, outdoor adventures, or workshops. 
            </p>
          </div>
          <div className="card">
            <h3>2. Book & Organize</h3>
            <p>
              Easily book events and manage logistics through our streamlined booking system. Select dates, view venue availability, and handle communication with vendors directly on the platform.
            </p>
          </div>
          <div className="card">
            <h3>3. Engage & Enjoy</h3>
            <p>
              Ensure your team gets the most out of the event with features designed to increase engagement and satisfaction. Track participation, share updates, and gather feedback for future planning.
            </p>
          </div>
        </div>
      </section>

      {/* About Founta Section */}
      <section id="about" className="section">
        <h2>About Founta</h2>
        <p>
          Our team comes from a diverse background, having worked at companies like Workday, Cisco, Deloitte, and Morgan Stanley, as well as startups with fewer than 50 employees. We understand firsthand how valuable corporate events are, not only for building relationships but for improving quality of life for employees. 

          Through our experience managing and organizing events, we’ve seen how top managers recognize corporate events as one of the top five workplace values for improving team morale and overall satisfaction. Founta makes this process easier by streamlining event planning and fostering meaningful connections among employees.
        </p>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you—whether you're interested in learning more about Founta, are a vendor with a venue or event space, or a company looking to plan your next team-building event. Let us help you create memorable experiences.
        </p>
        <button className="cta" onClick={handleEmailClick}>
          Email Us
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Founta. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
