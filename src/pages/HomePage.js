import React, { useEffect } from 'react';
import './HomePage.css';

// 导入图片资源
import Model4Image from '../assets/Model4.jpg';
import Model5Image from '../assets/Model5.jpg';
import Model6Image from '../assets/Model6.jpg';

const HomePage = () => {
  useEffect(() => {
    // 添加下拉菜单和遮罩层的交互逻辑
    const navbarItems = document.querySelectorAll('.navbar-item');
    navbarItems.forEach((item) => {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      document.body.appendChild(overlay);

      item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
          dropdown.style.display = 'block';
          setTimeout(() => {
            dropdown.style.opacity = '1';
            dropdown.style.transform = 'translateY(0)';
          }, 50);
        }

        overlay.style.display = 'block';
        setTimeout(() => {
          overlay.style.opacity = '1';
        }, 50);
      });

      item.addEventListener('mouseleave', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
          dropdown.style.opacity = '0';
          dropdown.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            dropdown.style.display = 'none';
          }, 300);
        }

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
            <li className="navbar-item">
              <a href="/">Home</a>
            </li>
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
                <li>
                  <a href="javascript:void(0);" id="contactUs">Contact Us</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Introducing the New Vehicle</h1>
          <p>The future of vehicles technology is here</p>
          <a href="#" className="cta-button" id="ctaButton">Learn More</a>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="product-showcase">
        <div className="product-card">
          <img src={Model4Image} alt="Product 1" />
          <h3>Model 1</h3>
          <p>Advanced technology. Stunning design.</p>
          <a href="#" className="cta-button">Buy Now</a>
        </div>
        <div className="product-card">
          <img src={Model5Image} alt="Product 2" />
          <h3>Model 2</h3>
          <p>Power and performance in every task.</p>
          <a href="#" className="cta-button">Buy Now</a>
        </div>
        <div className="product-card">
          <img src={Model6Image} alt="Product 3" />
          <h3>Model 3</h3>
          <p>Perfect blend of style and health features.</p>
          <a href="#" className="cta-button">Buy Now</a>
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

export default HomePage;
