import React, { useState } from 'react';
import './App.css';
import logo from './assets/FountaLogo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="nav-brand">
            <img src={logo} alt="Founta Logo" className="nav-logo" />
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li onClick={() => {
                window.open('https://cal.com/founta-fy311y/30min', '_blank', 'noopener,noreferrer');
                setIsMenuOpen(false);
              }}>
                Schedule an Event
              </li>
              <li onClick={() => {
                scrollToSection('why');
                setIsMenuOpen(false);
              }}>Why Founta</li>
              <li onClick={() => {
                scrollToSection('building');
                setIsMenuOpen(false);
              }}>What We're Building</li>
              <li onClick={() => {
                scrollToSection('about');
                setIsMenuOpen(false);
              }}>About Us</li>
              <li onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}>Contact Us</li>
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
              window.open('https://cal.com/founta-fy311y/30min', '_blank', 'noopener,noreferrer')
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
            <h3>Better Employee Engagement</h3>
            <p>
              Companies that host regular corporate events experience a <a href="https://www.gallup.com/workplace/236366/employee-engagement-drives-growth.aspx" target="_blank" rel="noopener noreferrer">24% higher employee engagement</a>, which directly impacts job satisfaction and overall retention.
            </p>
          </div>
          <div className="card">
            <h3>Stronger Team Collaboration</h3>
            <p>
              Team-building activities contribute to a <a href="https://www.mural.co/blog/team-building" target="_blank" rel="noopener noreferrer">50% improvement in communication</a> among employees, leading to better collaboration and problem-solving.
            </p>
          </div>
          <div className="card">
            <h3>Higher ROI from Events</h3>
            <p>
              Organizations with well-structured corporate event programs see a <a href="https://prismhq.com/increase-productivity-with-existing-workforce/" target="_blank" rel="noopener noreferrer">15% boost in productivity</a>, driven by improved team dynamics and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section id="building" className="section what-building">
        <h2>What We're Building</h2>
        <p>
          At Founta, we are creating a platform designed to simplify corporate event planning for both managers and employees. Our platform helps companies seamlessly discover venues, book activities, and manage events all in one place. Using AI, we're advancing filtration and discovery, ensuring companies find options tailored to their specific needs. Additionally, there will be no more need for tedious conversation between vendors and companies, and we're utilizing an AI agent to handle the back-and-forth to accelerate decision-making. Vendors can list their services, making it easy for companies to find the perfect fit for their teams. We're building a space where corporate events aren't just logistics—they're opportunities to foster growth, creativity, and collaboration.
        </p>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section">
        <h2>How It Works</h2>
        <div className="how-cards">
          <div className="card">
            <h3>1. Personalized In-Person Planning</h3>
            <p>
              Our team works closely with you to understand your goals and customize the perfect event. From venue selection to activity planning, we handle every detail in person to ensure your team's experience is exceptional.
            </p>
          </div>
          <div className="card">
            <h3>2. Seamless Transition to Our Platform</h3>
            <p>
              As we build and refine our platform, you'll gradually be onboarded to an automated one-stop shop. With the same personalized touch and customer satisfaction, you'll experience streamlined event planning where everything from booking to communication is managed effortlessly.
            </p>
          </div>
          <div className="card">
            <h3>3. Engage, Enjoy, and Grow</h3>
            <p>
              Once your events are booked and organized, all that's left is to enjoy! Track your team's engagement, gather feedback, and make every event memorable as we help your team grow closer and more productive.
            </p>
          </div>
        </div>
      </section>


      {/* About Founta Section */}
      <section id="about" className="section">
        <h2>About Founta</h2>
        <p>
          Our team comes from a diverse background, having worked at companies like Workday, Cisco, Deloitte, and Morgan Stanley, as well as startups with fewer than 50 employees. We understand firsthand how valuable corporate events are, not only for building relationships but for improving quality of life for employees. 

          Through our experience managing and organizing events, we've seen how top managers recognize corporate events as one of the top five workplace values for improving team morale and overall satisfaction. Founta makes this process easier by streamlining event planning and fostering meaningful connections among employees.
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
