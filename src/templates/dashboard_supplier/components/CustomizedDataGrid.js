import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getPurchaseDetails } from '../../../api'; // 引入新 API 方法
import { getEmployees } from '../../../api'; // 引入 API 方法

export default function PurchaseDetailsDataGrid() {
  const [rows, setRows] = useState([]);

  // 根据你的数据结构定义列
  // 例如：material_id、purchase_id、supplier_id、order_date、delivery_date、quantity、unit_price、total_cost、status
  const [columns] = useState([
    { field: 'material_id', headerName: 'Material ID', flex: 1 },
    { field: 'purchase_id', headerName: 'Purchase ID', flex: 1 },
    { field: 'supplier_id', headerName: 'Supplier ID', flex: 1 },
    { field: 'order_date', headerName: 'Order Date', flex: 1 },
    { field: 'delivery_date', headerName: 'Delivery Date', flex: 1 },
    { field: 'quantity', headerName: 'Quantity', flex: 1, type: 'number' },
    { field: 'unit_price', headerName: 'Unit Price', flex: 1, type: 'number' },
    { field: 'total_cost', headerName: 'Total Cost', flex: 1, type: 'number' },
    { field: 'status', headerName: 'Status', flex: 1 },
  ]);

  useEffect(() => {
    // 调用 API 获取数据
    getPurchaseDetails()
      .then((response) => {
        if (response.data.status === 'success') {
          const data = response.data.data.purchase_details;
          // 为 DataGrid 添加 id 字段，这里使用 purchase_id 作为 id
          setRows(data.map((item) => ({ ...item, id: item.purchase_id })));
        } else {
          console.error('Failed to fetch purchase details:', response.data.message);
        }
      })
      .catch((error) => console.error('Error fetching purchase details:', error));
  }, []);
  

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        checkboxSelection
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        density="compact"
      />
    </div>
  );
}
