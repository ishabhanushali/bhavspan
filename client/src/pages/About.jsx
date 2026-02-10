import "./About.css";

function About() {
  return (
    <div className="about-container">

      <div className="about-hero">
        <h1>About BHAVSPAN INFO LLP</h1>
        <p>
          Delivering secure, scalable and enterprise-grade EDI and system
          integration solutions for modern businesses.
        </p>
      </div>

      <div className="about-section">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            BHAVSPAN INFO LLP is a Navi Mumbai based IT company specializing in
            Electronic Data Interchange (EDI) and enterprise system integration.
            We help organizations streamline operations, automate workflows and
            ensure secure B2B communication.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            To empower enterprises with reliable integration architecture,
            seamless data exchange and high-performance systems that enhance
            operational efficiency.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Expertise</h2>
          <p>
            EDI Implementation, API Integration, ERP & CRM Connectivity,
            Data Mapping, Automation Solutions and Enterprise Integration.
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
