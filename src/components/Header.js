// src/components/Header.js
import React from 'react';

function Header({ openAddModal }) {
  return (
    <header style={headerStyle}>
      <h1>数据库管理系统</h1>
      <button className="search-btn">🔍</button>
      <button style={buttonStyle} onClick={openAddModal}>添加记录</button>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f8f8f8',
};

const buttonStyle = {
  padding: '8px 15px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Header;
