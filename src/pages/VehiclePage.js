import React, { useState } from 'react';
import Header from '../components/Header';
import VehicleInfo from '../components/VehicleInfo';
import VehicleOptions from '../components/VehicleOptions';
import OrderInfo from '../components/OrderInfo';
import Footer from '../components/Footer';
import './VehiclePage.css';
import vehicleImage from '../picture/vehicle.png';
import colorImage from '../picture/color.png';
import trimImage from '../picture/trim.png';
import wheelImage from '../picture/wheel.png';
import logoImage from '../picture/logo.png';

function VehiclePage() {
  const [vehicle, setVehicle] = useState({
    name: 'Myth 2',
    version: 'AWD',
    color: 'White',
    wheel: 'Standard',
    trim: 'Black'
  });

  const [order, setOrder] = useState({
    owner: 'lgy',
    payment: '¥489999',
    contact: '18586835888'
  });

  const handleOptionChange = (option, value) => {
    setVehicle((prevState) => ({
      ...prevState,
      [option]: value
    }));
  };

  return (
    <div className="vehicle-page">
      <Header />
      {/* Vehicle display with image */}
      <div className="vehicle-header">
        <img
          src={vehicleImage}
          alt={`Myth 2 ${vehicle.color}`}
          className="vehicle-image"
        />
      </div>
      
      {/* Vehicle details section */}
      {/* Vehicle details section */}
      <div className="vehicle-details">
        {/* Vehicle Version and Right Info */}
        <div className="info-section">
          <div className="info-title">Vehicle Version</div>
          <div className="info-content">
            <div className="info-column">
              <span>AWD</span>
              <span>{order.payment}</span>
              <span>700 battery (kWh)</span>
              <span>200 max speed</span>
            </div>
          </div>
        </div>

        {/* Vehicle Color and Image */}
        <div className="info-section">
          <div className="info-title">Vehicle Color</div>
          <div className="info-content">
            <div className="image-column">
              <img src={colorImage} alt={`${vehicle.color} color`} className="color-image" />
            </div>
          </div>
        </div>

        {/* Wheel Hub */}
        <div className="info-section">
          <div className="info-title">Wheel Hub</div>
          <div className="info-content">
            <div className="image-column">
              <img src={wheelImage} alt={`${vehicle.color} color`} className="color-image" />
            </div>
          </div>
        </div>

        {/* Vehicle Trim */}
        <div className="info-section">
          <div className="info-title">Vehicle Trim</div>
          <div className="info-content">
            <div className="image-column">
              <img src={trimImage} alt={`${vehicle.color} color`} className="color-image" />
            </div>
          </div>
        </div>
      </div>

        {/* Split layout: Vehicle info and Order info */}
        <div className="vehicle-and-order">
          <div className="details">
            <VehicleInfo vehicleName={vehicle.name} version={vehicle.version} />
            <VehicleOptions onOptionChange={handleOptionChange} />
          </div>
          <div className="order-info">
            <OrderInfo {...order} />
          </div>
        </div>
      
      {/* Buttons for Subscribe Now and Shopping Cart */}
      <div className="action-buttons">
        <button className="subscribe-btn">Subscribe Now</button>
        <button className="cart-btn">Shopping Cart</button>
      </div>

      {/* Footer with unordered list */}
      <Footer />
    </div>
  );
}

export default VehiclePage;
