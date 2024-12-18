import React, { useEffect } from 'react';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    // Section展开/折叠交互
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const h2 = section.querySelector('h2');
      if (h2) {
        h2.addEventListener('click', () => {
          section.classList.toggle('expanded');
        });
      }
    });

    // 导航栏下拉菜单交互
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

    // "Contact Us" 弹窗
    const contactUs = document.getElementById('contactUs');
    if (contactUs) {
      contactUs.addEventListener('click', () => {
        alert(
          'Contact Information:\n\n' +
            'Email: privacy@hermesauto.com\n' +
            'Phone: +1 (800) 123-4567\n' +
            'Address: 1234 Hermes Drive, Silicon Valley, CA, USA'
        );
      });
    }
  }, []);

  return (
    <div>
      {/* Header Section */}
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

      {/* Privacy Policy Content */}
      <div className="container">
        <div className="content">
          <h1>Privacy Policy</h1>
          <p>
            At Hermes, we respect your privacy and are committed to protecting your personal
            information. This Privacy Policy outlines the types of personal data we collect, how we
            use it, and the measures we take to safeguard your information.
          </p>
          <section>
            <h2>1. Information We Collect</h2>
            <ul>
              <li><strong>Personal Identifiable Information (PII)</strong>: Name, email address, phone number, and billing address.</li>
              <li><strong>Payment Information</strong>: Credit/debit card details, billing information, and transaction history.</li>
              <li><strong>Usage Data</strong>: Information about how you use our website, apps, and services.</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li><strong>To Provide Services</strong>: Process transactions and purchases.</li>
              <li><strong>To Communicate with You</strong>: Send updates and notifications.</li>
            </ul>
          </section>

          <section>
            <h2>3. Data Security</h2>
            <p>
              We take the security of your personal data seriously and implement appropriate measures to protect it.
            </p>
          </section>

          <section>
            <h2>4. Contact Us</h2>
            <ul>
              <li>Email: privacy@hermesauto.com</li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Address: 1234 Hermes Drive, Silicon Valley, CA, USA</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
