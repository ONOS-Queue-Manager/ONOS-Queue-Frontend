import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'flow_name', headerName: 'Flow Name', width: 150 },
  { field: 'table_id', headerName: 'Table ID', width: 150 },
  { field: 'device', headerName: 'Device', width: 120 },
  { field: 'device_name', headerName: 'Device Type', width: 150 },
  { field: 'operational', headerName: 'Operational', width: 120 },
  { field: 'action', headerName: 'Action', width: 120 },
];

const rows = [
  { id: 2, flow_name: 'Lannister', table_id: 'Cersei', device: 42, device_name: 'Type B', operational: 'No', action: 'Delete' },
  { id: 3, flow_name: 'Stark', table_id: 'Arya', device: 16, device_name: 'Type C', operational: 'Yes', action: 'Edit' },
  { id: 4, flow_name: 'Targaryen', table_id: 'Daenerys', device: null, device_name: 'Type D', operational: 'No', action: 'Delete' },
  { id: 5, flow_name: 'Melisandre', table_id: null, device: 150, device_name: 'Type E', operational: 'Yes', action: 'Edit' },
  { id: 6, flow_name: 'Clifford', table_id: 'Ferrara', device: 44, device_name: 'Type F', operational: 'No', action: 'Delete' },
  { id: 7, flow_name: 'Frances', table_id: 'Rossini', device: 36, device_name: 'Type G', operational: 'Yes', action: 'Edit' },
  // Add more rows as needed
];

const QueueManage = () => {
  const navigate = useNavigate();

  const handleInsertClick = () => {
    navigate('/insertQueue');
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '5%' }}>Flow Table</h2>

      <Button
        variant="contained"
        color="primary"
        style={{
          marginBottom: '1%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          marginLeft: '10%',
        }}
        onClick={handleInsertClick}
      >
        Insert
      </Button>

      <div
        style={{
          height: 400,
          width: '80%',
          margin: '2% auto',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          marginLeft: '10%',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default QueueManage;
