import axios from 'axios';

const api = axios.create({
  baseURL: 'http://hermesdatabase.ccsdu4zzqcb7.us-east-1.rds.amazonaws.com/api/manager',
  headers: {
    'Content-Type': 'application/json',
  },
});

// API 请求封装
export const getSalesData = () => api.get('/sales');
export const getRawMaterials = () => api.get('/raw-materials');
export const getProductionOutput = () => api.get('/production-output');
export const getVehicleInventory = () => api.get('/vehicle-inventory');
export const getEmployees = () => api.get('/employees');
export const updateEmployee = (id, data) => api.put(`/employees/${id}`, data);
export const deleteEmployee = (id) => api.delete(`/employees/${id}`);

export default api;
