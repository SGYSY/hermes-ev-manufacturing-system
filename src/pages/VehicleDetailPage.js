import React, { useEffect } from 'react';
import './VehicleDetailPage.css';

const VehicleDetailPage = () => {
  useEffect(() => {
    // 添加下拉菜单和遮罩层的交互逻辑
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

    // "Contact Us" 点击事件
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
              <a href="#">Model2</a>
              <ul className="dropdown">
                <li><a href="#">Product Data</a></li>
                <li><a href="#">Purchase</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* Model Details */}
      <section id="model1" className="product-detail">
        <div className="product-header">
          <h1>Model 1: Advanced Vehicle</h1>
          <p>
            The future of automotive technology is here with Model 1, offering cutting-edge features
            and powerful performance.
          </p>
        </div>
        <div className="specs-table">
          <h2>Technical Specifications</h2>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Model 1</th>
                <th>Model 2</th>
                <th>Model 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Engine Type</td>
                <td>V8 Turbo</td>
                <td>V6 Hybrid</td>
                <td>Electric Motor</td>
              </tr>
              <tr>
                <td>Max Power (hp)</td>
                <td>500</td>
                <td>400</td>
                <td>300</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="product-description">
          <h2>Overview</h2>
          <p>
            The Model 1 offers a state-of-the-art V8 turbo engine, making it a true powerhouse on
            the road.
          </p>
          <h3>Key Features</h3>
          <ul>
            <li>Advanced Autonomous Driving Mode</li>
            <li>Infotainment System with Voice Control</li>
          </ul>
        </div>

        <div className="pricing">
          <h2>Pricing</h2>
          <p>The base price for Model 1 starts at $80,000 USD.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Hermes. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default VehicleDetailPage;
