import React, { useEffect, useState } from 'react';
import { getSalesData, getRawMaterials, getProductionOutput, getVehicleInventory, getEmployees } from './api';

export default function TestAPI() {
  const [salesData, setSalesData] = useState(null);
  const [rawMaterials, setRawMaterials] = useState(null);
  const [productionOutput, setProductionOutput] = useState(null);
  const [vehicleInventory, setVehicleInventory] = useState(null);
  const [employees, setEmployees] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // 测试获取销售数据
    getSalesData()
      .then((res) => setSalesData(res.data))
      .catch((err) => setError(`获取销售数据失败: ${err.message}`));

    // 测试获取原材料数据
    getRawMaterials()
      .then((res) => setRawMaterials(res.data))
      .catch((err) => setError(`获取原材料数据失败: ${err.message}`));

    // 测试获取生产输出数据
    getProductionOutput()
      .then((res) => setProductionOutput(res.data))
      .catch((err) => setError(`获取生产输出数据失败: ${err.message}`));

    // 测试获取车辆库存数据
    getVehicleInventory()
      .then((res) => setVehicleInventory(res.data))
      .catch((err) => setError(`获取车辆库存数据失败: ${err.message}`));

    // 测试获取员工数据
    getEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => setError(`获取员工数据失败: ${err.message}`));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>API 测试结果</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h3>销售数据：</h3>
      <pre>{salesData ? JSON.stringify(salesData, null, 2) : '加载中...'}</pre>

      <h3>原材料数据：</h3>
      <pre>{rawMaterials ? JSON.stringify(rawMaterials, null, 2) : '加载中...'}</pre>

      <h3>生产输出数据：</h3>
      <pre>{productionOutput ? JSON.stringify(productionOutput, null, 2) : '加载中...'}</pre>

      <h3>车辆库存数据：</h3>
      <pre>{vehicleInventory ? JSON.stringify(vehicleInventory, null, 2) : '加载中...'}</pre>

      <h3>员工数据：</h3>
      <pre>{employees ? JSON.stringify(employees, null, 2) : '加载中...'}</pre>
    </div>
  );
}
