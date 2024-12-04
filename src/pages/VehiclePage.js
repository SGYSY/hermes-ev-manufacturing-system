// src/pages/VehiclePage.js
import React, { useState } from 'react';
import Header from '../components/Header';
import VehicleInfo from '../components/VehicleInfo';
import VehicleOptions from '../components/VehicleOptions';
import OrderInfo from '../components/OrderInfo';
import Footer from '../components/Footer';
import './VehiclePage.css';

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
    <div className="App">
      <Header />
      <div className="content">
        <div className="vehicle-display">
          <img
            src={`/${vehicle.color.toLowerCase()}.jpg`} 
            alt={`Myth 2 ${vehicle.color}`} 
            className="vehicle-image"
          />
        </div>
        <VehicleInfo vehicleName={vehicle.name} version={vehicle.version} />
        <VehicleOptions onOptionChange={handleOptionChange} />
        <OrderInfo {...order} />
      </div>
      <Footer />
    </div>
  );
}

export default VehiclePage;
