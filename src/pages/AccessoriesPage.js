import React, { useState, useEffect } from 'react';
import './AccessoriesPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 导入图片资源
import DefaultImage from '../assets/default.png';
import Model1Image from '../assets/Model1.jpg';
import Model2Image from '../assets/Model2.jpg';
import Model3Image from '../assets/Model3.jpg';
import BlackCarImage from '../assets/black-car.png';
import WhiteCarImage from '../assets/white-car.png';
import RedCarImage from '../assets/red-car.png';
import BlueCarImage from '../assets/blue-car.png';
import SilverCarImage from '../assets/silvery-car.png';

const AccessoriesPage = () => {
  const navigate = useNavigate(); // 初始化 useNavigate
  const [previewSrc, setPreviewSrc] = useState(DefaultImage); // 默认预览图片
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isPurchaseDisabled, setIsPurchaseDisabled] = useState(true);

  useEffect(() => {
    // 添加下拉菜单和遮罩层的交互逻辑
    const navbarItems = document.querySelectorAll('.navbar-item');
    navbarItems.forEach((item) => {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      document.body.appendChild(overlay);

      item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('.dropdown');
        if(dropdown){
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
        if(dropdown){
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
    updatePurchaseButtonState();
  }, [selectedOptions]);

  // 处理选项点击
  const handleOptionClick = (section, value, preview) => {
    setSelectedOptions((prev) => ({ ...prev, [section]: value }));
    setPreviewSrc(preview); // 更新预览图片
  };

  // 更新总结信息和购买按钮状态
  const updatePurchaseButtonState = () => {
    const requiredSections = ["车型", "颜色"];
    const allSelected = requiredSections.every((section) => selectedOptions[section]);
    setIsPurchaseDisabled(!allSelected);
  };

  // 处理购买按钮点击
  const handleSubmitPurchaseClick = async () => {
    const { 车型, 颜色 } = selectedOptions;
  
    // 确定车型编号
    const modelMap = {
      "Model 1": "1",
      "Model 2": "2",
      "Model 3": "3",
    };
  
    // 确定颜色编号
    const colorMap = {
      black: "1",
      white: "2",
      red: "3",
      blue: "4",
      silver: "5",
    };
  
    // 用户 ID
    const userId = "1234";
  
    // 动态生成 order_id
    const orderId = `${modelMap[车型]}${colorMap[颜色]}${userId}`;
  
    // 模拟订单数据
    const orderData = {
      order_id: orderId, // 使用动态生成的 order_id
      customer_id: 2,
      store_id: 2,
      order_date: "2024-12-17",
      delivery_date: "2024-12-25",
      total_amount: "999.99",
      status: "Completed",
    };
  
    try {
      alert(`订单数据：\n${JSON.stringify(orderData, null, 2)}`);
      const response = await axios.post(
        "http://phphermesbackendv2-env.us-east-1.elasticbeanstalk.com/salesman.php/createOrder/2",
        orderData
      );
      alert(`返回数据：\n${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
      if (error.response) {
        alert(`订单创建失败：\n${error.message}`);
      } else if (error.request) {
        alert("无法访问服务器");
      } else {
        alert(`发生错误：\n${error.message}`);
      }
    }
  };

  // 定义跳转函数
  const handleHomeClick = () => {
    navigate('/'); // 跳转到 
    window.location.reload();
  };
  const handleBuyNowClick = () => {
    navigate('/accessories'); // 跳转到 AccessoriesPage
    window.location.reload();
  };
  const handleLearnMoreClick = () => {
    navigate('/vehicle-detail'); // 跳转到 
    window.location.reload();
  };
  const handleProductDataClick = () => {
    navigate('/product-introduction'); // 跳转到 
    window.location.reload();
  };
  const handlePurchaseClick = () => {
    navigate('/accessories'); // 跳转到 
    window.location.reload();
  };
  const handleModelClick = () => {
    navigate('/vehicle-detail'); // 跳转到 
    window.location.reload();
  };
  const handleTermsOfServiceClick = () => {
    navigate('/terms-of-service'); // 跳转到 
    window.location.reload();
  };
  const handlePrivacyPolicyClick = () => {
    navigate('/privacy-policy'); // 跳转到 
    window.location.reload();
  };

  return (
    <div className="container">
      {/* 导航栏 */}
      <header className="header">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button onClick={handleHomeClick}>Home</button>
            </li>
            <li className="navbar-item">
              <button>Model1</button>
              <ul className="dropdown">
                <li><button onClick={handleProductDataClick} >Product Data</button></li>
                <li><button onClick={handlePurchaseClick}>Purchase</button></li>
              </ul>
            </li>
            <li className="navbar-item">
              <button>Model2</button>
              <ul className="dropdown">
                <li><button onClick={handleProductDataClick}>Product Data</button></li>
                <li><button onClick={handlePurchaseClick}>Purchase</button></li>
              </ul>
            </li>
            <li className="navbar-item">
              <button>Model3</button>
              <ul className="dropdown">
                <li><button onClick={handleProductDataClick}>Product Data</button></li>
                <li><button onClick={handlePurchaseClick}>Purchase</button></li>
              </ul>
            </li>
            <li className="navbar-item">
              <button>Products</button>
              <ul className="dropdown">
                <li><button onClick={handleModelClick}>Model1</button></li>
                <li><button onClick={handleModelClick}>Model2</button></li>
                <li><button onClick={handleModelClick}>Model3</button></li>
              </ul>
            </li>
            <li className="navbar-item">
              <button>Company</button>
              <ul className="dropdown">
                <li><button onClick={handleTermsOfServiceClick}>Terms of Service</button></li>
                <li><button onClick={handlePrivacyPolicyClick}>Privacy Policy</button></li>
                <li>
                <button href="javascript:void(0);" id="contactUs">Contact Us</button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* 左侧预览区域 */}
      <div className="preview-area">
        <img src={previewSrc} alt="预览图" id="preview-image" />
      </div>

      {/* 右侧选购选项区域 */}
      <div className="options-area">
        <h1>选购你的车辆配置</h1>

        {/* 车型 */}
        <section className="selection-section">
          <h2>车型</h2>
          <div className="options">
            <div
              className={`option ${selectedOptions["车型"] === "Model 1" ? "selected" : ""}`}
              onClick={() => handleOptionClick("车型", "Model 1", Model1Image)}
            >
              <span className="title">Model 1</span>
              <p className="description">Description for Model 1</p>
            </div>
            <div
              className={`option ${selectedOptions["车型"] === "Model 2" ? "selected" : ""}`}
              onClick={() => handleOptionClick("车型", "Model 2", Model2Image)}
            >
              <span className="title">Model 2</span>
              <p className="description">Description for Model 2</p>
            </div>
            <div
              className={`option ${selectedOptions["车型"] === "Model 3" ? "selected" : ""}`}
              onClick={() => handleOptionClick("车型", "Model 3", Model3Image)}
            >
              <span className="title">Model 3</span>
              <p className="description">Description for Model 3</p>
            </div>
          </div>
        </section>

        {/* 颜色 */}
        <section className="selection-section">
          <h2>颜色</h2>
          <div className="options">
            <div
              className={`option color-option black ${
                selectedOptions["颜色"] === "black" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("颜色", "black", BlackCarImage)}
            ></div>
            <div
              className={`option color-option white ${
                selectedOptions["颜色"] === "white" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("颜色", "white", WhiteCarImage)}
            ></div>
            <div
              className={`option color-option red ${
                selectedOptions["颜色"] === "red" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("颜色", "red", RedCarImage)}
            ></div>
            <div
              className={`option color-option blue ${
                selectedOptions["颜色"] === "blue" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("颜色", "blue", BlueCarImage)}
            ></div>
            <div
              className={`option color-option silver ${
                selectedOptions["颜色"] === "silver" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("颜色", "silver", SilverCarImage)}
            ></div>
          </div>
        </section>

        {/* 配置总结 */}
        <div className="summary">
          <h2>已选配置</h2>
          <p id="summary-text">
            {Object.entries(selectedOptions).length > 0
              ? Object.entries(selectedOptions)
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(" | ")
              : "请选择车型、颜色和配件"}
          </p>
          <button
            className="purchase-button"
            disabled={isPurchaseDisabled}
            onClick={handleSubmitPurchaseClick}
          >
            立即购买
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
