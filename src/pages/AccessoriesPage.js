import React, { useState, useEffect } from 'react';
import './AccessoriesPage.css';

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
  const [previewSrc, setPreviewSrc] = useState(DefaultImage); // 默认预览图片
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isPurchaseDisabled, setIsPurchaseDisabled] = useState(true);

  useEffect(() => {
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
  const handlePurchaseClick = () => {
    const summary = Object.entries(selectedOptions)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    alert(`你已选择以下配置：\n${summary}`);
  };

  return (
    <div className="container">
      {/* 导航栏 */}
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
            onClick={handlePurchaseClick}
          >
            立即购买
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;