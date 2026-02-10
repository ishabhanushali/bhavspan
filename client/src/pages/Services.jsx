import "./Services.css";

function Services() {
  return (
    <div className="services-container">

      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Enterprise integration solutions tailored for modern business needs.
        </p>
      </div>

      <div className="service-grid">

        <div className="service-card">
          <h3>Electronic Data Interchange (EDI)</h3>
          <p>
            Secure and automated B2B document exchange including invoices,
            purchase orders, shipping notices and more.
          </p>
        </div>

        <div className="service-card">
          <h3>System Integration</h3>
          <p>
            Seamless integration of ERP, CRM, APIs and enterprise systems
            ensuring unified business operations.
          </p>
        </div>

        <div className="service-card">
          <h3>API Development & Automation</h3>
          <p>
            Custom API architecture and workflow automation to improve
            operational efficiency and scalability.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Services;
