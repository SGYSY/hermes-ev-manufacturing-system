import React, { useEffect, useState } from 'react';
import './UserInfoPage.css';

const UserInfoPage = () => {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 从接口获取订单数据
    const fetchOrderData = async () => {
        try {
          const response = await fetch(
            'http://phphermesbackendv2-env.us-east-1.elasticbeanstalk.com/customer.php/orders/customer/1',
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
      
          if (!response.ok) {
            // 当 HTTP 响应状态码不是 200 时，抛出错误
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
      
          if (data.status === 'success' && Array.isArray(data.data)) {
            setOrderData(data.data); // 设置订单数据
          } else {
            // 抛出接口返回的错误信息
            throw new Error(data.message || 'Failed to fetch order data.');
          }
        } catch (err) {
          // 根据错误分类显示 alert
          const errorMessage = err.message || 'An unknown error occurred.';
          let errorTitle = 'Error';
      
          if (errorMessage.includes('NetworkError') || errorMessage.includes('Failed to fetch')) {
            errorTitle = 'Network Error';
          } else if (errorMessage.includes('HTTP error')) {
            errorTitle = 'Server Error';
          } else {
            errorTitle = 'Unknown Error';
          }
      
          // 使用 alert 显示标题和详细错误信息
          //alert(`${errorTitle}:\n${errorMessage}`);
          setError(errorMessage); // 设置错误状态（用于组件内显示）
        } finally {
          setLoading(false);
        }
      };
      

    fetchOrderData();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button onClick={() => (window.location.href = '/')}>Home</button>
            </li>
            <li className="navbar-item">
              <button>User</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* User Info Content */}
      <div className="container">
        <div className="content">
          <h1>Order Information</h1>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : orderData.length > 0 ? (
            <table className="order-table">
              <thead>
                <tr>
                  <th>Store ID</th>
                  <th>Customer ID</th>
                  <th>Order Date</th>
                  <th>Delivery Date</th>
                  <th>Model ID</th>
                  <th>Vehicle ID</th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((order, index) => (
                  <tr key={index}>
                    <td>{order.store_id}</td>
                    <td>{order.customer_id}</td>
                    <td>{order.order_date}</td>
                    <td>{order.delivery_date}</td>
                    <td>{order.model_id}</td>
                    <td>{order.vehicle_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No order information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;
