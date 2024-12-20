import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { createPurchaseOrder, updatePurchaseOrder, deletePurchaseOrder } from '../../../api'; // 引入实际 API 方法

export default function PurchaseOrders() {
  const [rows, setRows] = useState([]); // 用于存储订单数据
  const [dialogOpen, setDialogOpen] = useState(false); // 控制弹窗开关
  const [currentOrder, setCurrentOrder] = useState(null); // 当前编辑的订单
  const [columns] = useState([
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'supplier_id', headerName: 'Supplier ID', flex: 1 },
    { field: 'material_id', headerName: 'Material ID', flex: 1 },
    { field: 'order_date', headerName: 'Order Date', flex: 1 },
    { field: 'delivery_date', headerName: 'Delivery Date', flex: 1 },
    { field: 'quantity', headerName: 'Quantity', flex: 1 },
    { field: 'total_cost', headerName: 'Total Cost', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.row)}>
            Update
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleDelete(params.row.id)}
            style={{ marginLeft: 10 }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ]);

  useEffect(() => {
    // 模拟加载数据（可以替换为真实 API 数据获取逻辑）
    const mockData = [
      {
        id: 1,
        supplier_id: 1,
        material_id: 1001,
        order_date: '2024-03-17',
        delivery_date: '2024-03-24',
        quantity: 100,
        total_cost: 5000,
        status: 'Ordered',
      },
      {
        id: 2,
        supplier_id: 2,
        material_id: 1002,
        order_date: '2024-03-18',
        delivery_date: '2024-03-25',
        quantity: 150,
        total_cost: 7500,
        status: 'In Transit',
      },
    ];
    setRows(mockData);
  }, []);

  const handleCreate = () => {
    setCurrentOrder({
      supplier_id: '',
      material_id: '',
      order_date: '',
      delivery_date: '',
      quantity: '',
      total_cost: '',
      status: 'Ordered',
    });
    setDialogOpen(true);
  };

  const handleUpdate = (order) => {
    setCurrentOrder(order);
    setDialogOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        const response = await deletePurchaseOrder(id);
        if (response.data.status === 'success') {
          alert('Order deleted successfully');
          setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        } else {
          alert('Failed to delete order: ' + response.data.message);
        }
      } catch (error) {
        console.error('Error deleting order:', error);
      }
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setCurrentOrder(null);
  };

  const handleDialogSubmit = async () => {
    try {
      if (currentOrder.id) {
        // 更新订单
        const response = await updatePurchaseOrder(currentOrder.id, currentOrder);
        if (response.data.status === 'success') {
          alert('Order updated successfully');
          setRows((prevRows) =>
            prevRows.map((row) => (row.id === currentOrder.id ? { ...row, ...currentOrder } : row))
          );
        } else {
          alert('Failed to update order: ' + response.data.message);
        }
      } else {
        // 创建订单
        const response = await createPurchaseOrder(currentOrder);
  
        // 打印完整的服务器响应
        console.log('Full server response:', response);
        console.log('Expected response data:', response.data);
        console.log('Expected response data.data:', response.data?.data);
  
        if (response.data?.status === 'success') {
          const purchaseId = response.data?.data?.purchase_id;
          if (purchaseId) {
            alert('Order created successfully');
            setRows((prevRows) => [
              ...prevRows,
              { ...currentOrder, id: purchaseId },
            ]);
          } else {
            console.error('Purchase ID is missing in response:', response.data);
            alert('Failed to retrieve purchase ID from server response');
          }
        } else {
          alert('Failed to create order: ' + response.data?.message || 'Unknown error');
        }
      }
      handleDialogClose();
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };
  
  

  return (
    <div>
      <h2>Purchase Orders</h2>
      <Button variant="contained" color="primary" onClick={handleCreate} style={{ marginBottom: 10 }}>
        Create Order
      </Button>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{currentOrder?.id ? 'Update Order' : 'Create Order'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Supplier ID"
            type="number"
            fullWidth
            value={currentOrder?.supplier_id || ''}
            onChange={(e) => setCurrentOrder({ ...currentOrder, supplier_id: parseInt(e.target.value) || '' })}
          />
          <TextField
            margin="dense"
            label="Material ID"
            type="number"
            fullWidth
            value={currentOrder?.material_id || ''}
            onChange={(e) => setCurrentOrder({ ...currentOrder, material_id: parseInt(e.target.value) || '' })}
          />
          <TextField
            margin="dense"
            label="Order Date"
            type="text" // 改为 text 以允许用户输入字符串
            fullWidth
            placeholder="YYYY-MM-DD"
            value={currentOrder?.order_date || ''}
            onChange={(e) => setCurrentOrder({ ...currentOrder, order_date: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Delivery Date"
            type="text" // 改为 text 以允许用户输入字符串
            fullWidth
            placeholder="YYYY-MM-DD"
            value={currentOrder?.delivery_date || ''}
            onChange={(e) => setCurrentOrder({ ...currentOrder, delivery_date: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Quantity"
            type="number"
            fullWidth
            value={currentOrder?.quantity || ''}
            onChange={(e) => setCurrentOrder({ ...currentOrder, quantity: parseInt(e.target.value) || '' })}
          />
          <TextField
            margin="dense"
            label="Total Cost"
            type="number"
            fullWidth
            value={currentOrder?.total_cost || ''}
            onChange={(e) => setCurrentOrder({ ...currentOrder, total_cost: parseInt(e.target.value) || '' })}
          />
          <TextField
            margin="dense"
            label="Status"
            select
            fullWidth
            value={currentOrder?.status || ''}
            onChange={(e) => setCurrentOrder({ ...currentOrder, status: e.target.value })}
            SelectProps={{
              native: true,
            }}
          >
            <option value="Ordered">Ordered</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDialogSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
