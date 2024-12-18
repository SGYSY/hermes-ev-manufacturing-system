import React, { useState } from 'react';
import { getSalesData, getProductionInfo, getVehicleInventory, getEmployees, updateEmployee, deleteEmployee } from './api';  // 导入API请求函数

const TestAPI = () => {
  const [salesData, setSalesData] = useState(null);
  const [productionData, setProductionData] = useState(null);
  const [vehicleInventory, setVehicleInventory] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [employeeUpdateStatus, setEmployeeUpdateStatus] = useState('');
  const [employeeDeleteStatus, setEmployeeDeleteStatus] = useState('');
  const [location, setLocation] = useState("ALL");  // 用于选择车型库存的位置

  // 获取销售数据概览
  const fetchSalesData = async () => {
    try {
      const response = await getSalesData();
      setSalesData(response.data);
    } catch (error) {
      console.error("Error fetching sales data", error);
    }
  };

  // 获取工厂生产信息
  const fetchProductionData = async () => {
    try {
      const response = await getProductionInfo();
      setProductionData(response.data);
    } catch (error) {
      console.error("Error fetching production data", error);
    }
  };

  // 获取车型库存信息
  const fetchVehicleInventory = async () => {
    try {
      const response = await getVehicleInventory(location);
      setVehicleInventory(response.data);
    } catch (error) {
      console.error("Error fetching vehicle inventory", error);
    }
  };

  // 获取员工信息
  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees", error);
    }
  };

  // 更新员工信息
  const handleUpdateEmployee = async (id) => {
    const updatedData = {
      name: "新员工姓名",
      phone: "1234567890",
      salary: "5000",
      branch_id: "1",
      department_id: "2",
    };
    try {
      const response = await updateEmployee(id, updatedData);
      setEmployeeUpdateStatus(response.data.message);
    } catch (error) {
      console.error("Error updating employee", error);
    }
  };

  // 删除员工
  const handleDeleteEmployee = async (id) => {
    try {
      const response = await deleteEmployee(id);
      setEmployeeDeleteStatus(response.data.message);
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

  return (
    <div>
      <h1>Test Manager API</h1>
      <div>
        <button onClick={fetchSalesData}>Get Sales Data</button>
        <button onClick={fetchProductionData}>Get Production Data</button>
        <button onClick={fetchVehicleInventory}>Get Vehicle Inventory</button>
        <button onClick={fetchEmployees}>Get Employees</button>
      </div>

      {/* 销售数据 */}
      <div>
        <h2>Sales Data</h2>
        <pre>{JSON.stringify(salesData, null, 2)}</pre>
      </div>

      {/* 生产数据 */}
      <div>
        <h2>Production Data</h2>
        <pre>{JSON.stringify(productionData, null, 2)}</pre>
      </div>

      <div>
        <h2>Vehicle Inventory</h2>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="ALL">All</option>
          <option value="Warehouse NY">Warehouse NY</option>
          <option value="Warehouse LA">Warehouse LA</option>
          <option value="Warehouse Chicago">Warehouse Chicago</option>
        </select>
        <button onClick={fetchVehicleInventory}>Fetch Inventory</button>
        <pre>{JSON.stringify(vehicleInventory, null, 2)}</pre>
      </div>


      {/* 员工信息 */}
      <div>
        <h2>Employees</h2>
        {/* 显示完整员工数据，直接显示 JSON 格式 */}
        <pre>{JSON.stringify(employees, null, 2)}</pre>
      </div>


      {/* 员工更新和删除状态 */}
      <div>
        <h3>{employeeUpdateStatus}</h3>
        <h3>{employeeDeleteStatus}</h3>
      </div>
    </div>
  );
};

export default TestAPI;
