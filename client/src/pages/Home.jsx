import "./Home.css";

function Home() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Enterprise-Grade <span>EDI & System Integration</span> Solutions
          </h1>

          <p>
            BHAVSPAN INFO LLP specializes in secure electronic data interchange
            and seamless system integration for modern enterprises.
          </p>

          <div className="hero-buttons">
            <a href="/services" className="btn-primary">Explore Services</a>
            <a href="/contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
