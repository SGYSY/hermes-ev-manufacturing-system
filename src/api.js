import axios from 'axios';

const api = axios.create({
  baseURL: 'http://phphermesbackendv2-env.us-east-1.elasticbeanstalk.com/manager.php',  // 更改为你的实际基础 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// API 请求封装
export const getSalesData = () => api.get('/sales');  // 获取销售数据概览
export const getProductionInfo = () => api.get('/production');  // 获取工厂生产信息
export const getVehicleInventory = (location = 'ALL') => api.get(`/inventory/${location}`);  // 获取车型库存信息，默认 location 为 "ALL"
export const getEmployees = () => api.get('/employees');  // 获取员工信息
export const updateEmployee = (id, data) => api.put(`/employees/${id}`, data);  // 更新员工信息
export const deleteEmployee = (id) => api.delete(`/employees/${id}`);  // 删除员工信息

export default api;
