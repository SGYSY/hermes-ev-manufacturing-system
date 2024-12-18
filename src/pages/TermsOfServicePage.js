import React, { useEffect } from 'react';
import './TermsOfServicePage.css';

const TermsOfServicePage = () => {
  useEffect(() => {
    // Section expand/collapse functionality
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const h2 = section.querySelector('h2');
      h2.addEventListener('click', () => {
        section.classList.toggle('expanded');
      });
    });

    // Navbar dropdown functionality
    const navbarItems = document.querySelectorAll('.navbar-item');
    navbarItems.forEach((item) => {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      document.body.appendChild(overlay);

      item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('.dropdown');
        dropdown.style.display = 'block';
        setTimeout(() => {
          dropdown.style.opacity = '1';
          dropdown.style.transform = 'translateY(0)';
        }, 50);

        overlay.style.display = 'block';
        setTimeout(() => {
          overlay.style.opacity = '1';
        }, 50);
      });

      item.addEventListener('mouseleave', () => {
        const dropdown = item.querySelector('.dropdown');
        dropdown.style.opacity = '0';
        dropdown.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          dropdown.style.display = 'none';
        }, 300);

        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 300);
      });
    });

    // "Contact Us" functionality
    const contactUs = document.getElementById('contactUs');
    if (contactUs) {
      contactUs.addEventListener('click', () => {
        alert(
          'Contact Information:\n\n' +
            'Email: contact@hermes.com\n' +
            'Phone: +123-456-7890\n' +
            'Address: 123 Hermes Street, Vehicle City, EV Land'
        );
      });
    }
  }, []);

  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item"><a href="/">Home</a></li>
            <li className="navbar-item">
              <a href="#">Model1</a>
              <ul className="dropdown">
                <li><a href="#">Product Data</a></li>
                <li><a href="#">Purchase</a></li>
              </ul>
            </li>
            <li className="navbar-item">
              <a href="#">Model2</a>
              <ul className="dropdown">
                <li><a href="#">Product Data</a></li>
                <li><a href="#">Purchase</a></li>
              </ul>
            </li>
            <li className="navbar-item">
              <a href="#">Model3</a>
              <ul className="dropdown">
                <li><a href="#">Product Data</a></li>
                <li><a href="#">Purchase</a></li>
              </ul>
            </li>
            <li className="navbar-item">
              <a href="#">Products</a>
              <ul className="dropdown">
                <li><a href="#">Model1</a></li>
                <li><a href="#">Model2</a></li>
                <li><a href="#">Model3</a></li>
              </ul>
            </li>
            <li className="navbar-item">
              <a href="#">Company</a>
              <ul className="dropdown">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#" id="contactUs">Contact Us</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="content">
          <h1>Terms of Service</h1>
          <p>Welcome to Hermes! By accessing or using our services, you agree to comply with the following terms and conditions. Please read them carefully.</p>
          
          <section>
            <h2>1. Definitions</h2>
            <p>In these Terms of Service, the following terms have specific meanings:</p>
            <ul>
              <li><strong>"We", "Our", and "Hermes"</strong>: Refers to Hermes Inc., the company providing the vehicle-related services.</li>
              <li><strong>"You", "Your"</strong>: Refers to the user of our services, whether you're renting, purchasing, or utilizing any other services we provide.</li>
              <li><strong>"Service"</strong>: Refers to all offerings provided by Hermes, including vehicle rentals, purchases, and shared mobility solutions.</li>
            </ul>
          </section>

          <section>
            <h2>2. User Eligibility</h2>
            <p>To use Hermes services, you must meet the following eligibility criteria:</p>
            <ul>
              <li>You must be at least 18 years of age.</li>
              <li>You must have a valid driver's license (for rentals and shared mobility services) or meet other legal requirements in your jurisdiction.</li>
              <li>You must provide accurate personal information when registering or making a reservation, and ensure it is kept up-to-date.</li>
              <li>If you're under 18 but with parental consent, please consult your parent/guardian before using any service.</li>
            </ul>
          </section>

          {/* Add the remaining sections here similarly */}
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;