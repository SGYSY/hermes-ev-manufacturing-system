import React, { useEffect } from 'react';
import './CompanyIntroductionPage.css';

const CompanyIntroductionPage = () => {
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

      {/* Company Introduction Section */}
      <section className="company-introduction">
        <div className="container">
          <h1>Welcome to Hermes</h1>
          <h2>Our Company Structure and Operation</h2>
          <p>
            Hermes is a company focusing on electric vehicle manufacturing, with complete branches,
            departments, employee architecture, raw materials supply, vehicle production, inventory
            management, and customer sales and stores controlling system.
          </p>
          <p>
            Hermes organizes its internal functions through departments, which are responsible for
            specific areas such as production, finance, or logistics. Similar to branches, a
            hierarchical structure has formed between departments, making management within the
            company more specialized.
          </p>

          <h2>Upstream and Downstream Production</h2>
          <p>
            Hermes' organization structure for upstream and downstream production is designed for
            efficiency in processing the raw material into finished products, while meeting market
            demands.
          </p>
          <p>
            Upstream production focuses on supplying important raw materials such as lithium, as
            well as key components such as batteries.
          </p>
          <p>
            Downstream production takes place primarily within the company's plants, where products
            are stored in warehouses and delivered to customers efficiently.
          </p>
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

export default CompanyIntroductionPage;
