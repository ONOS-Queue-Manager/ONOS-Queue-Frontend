import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ConfirmationDialog from '../components/ConfirmationDialog';
import EditForm from '../components/EditForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/queueManage.css'; // Import custom CSS
import { v4 as uuidv4 } from 'uuid';


const QueueManage = () => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isEditFormOpen, setEditFormOpen] = useState(false);

  const handleEditClick = (id) => {
    console.log(`Edit button clicked for ID: ${id}`);
    setSelectedItemId(id);
    setEditFormOpen(true);
  };

  const handleDeleteClick = (id) => {
    // Open the confirmation dialog
    setConfirmationOpen(true);
    setSelectedItemId(id);
  };

  const handleConfirmDelete = () => {
    // Handle delete logic here (e.g., remove the row with selectedItemId)
    console.log(`Delete confirmed for ID: ${selectedItemId}`);
     // Remove the row with the selectedItemId
     const updatedRows = rows.filter((row) => row.id !== selectedItemId);
     setRows(updatedRows);
    // Close the confirmation dialog
    setConfirmationOpen(false);
  };

  const handleCancelDelete = () => {
    // Cancel the delete action
    setConfirmationOpen(false);
  };
  const navigate = useNavigate();

  const handleInsertClick = () => {
    navigate('/insertQueue');
  };

  const handleEditFormSave = (editedData) => {
    // Handle save logic (update the row with the editedData)
    const updatedRows = rows.map((row) => (row.id === selectedItemId ? editedData : row));
    setRows(updatedRows);
    setEditFormOpen(false);
  };

  const handleEditFormCancel = () => {
    setEditFormOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID'},
    { field: 'queueId', headerName: 'Queue ID', width: 130 },
    { field: 'maxRate', headerName: 'Max Rate', width: 150 },
    { field: 'minRate', headerName: 'Min Rate', width: 150 },
    { field: 'burst', headerName: 'Burst', width: 120 },
    { field: 'priority', headerName: 'Priority', width: 150 },
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 220, 
      renderCell: (params) => (
        <div>
          <button type="button" className="btn btn-primary btn-sm btn-action" onClick={() => handleEditClick(params.row.id)}>
            Edit
          </button>
          <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(params.row.id)}>
            Delete
          </button>
        </div>
      ),
    },
  ];
  
  
  const initialRows = [
    { id: uuidv4(), queueId: "myQueue2", maxRate: 1000, minRate: 1000, burst: 42, priority: 5, action: 'Delete' },
    { id: uuidv4(), queueId: "myQueue3", maxRate: 1000, minRate: 1000, burst: 16, priority: 4, action: 'Edit' },
    { id: uuidv4(), queueId: "myQueue4", maxRate: 1000, minRate: 1000, burst: null, priority: 3, action: 'Delete' },
    { id: uuidv4(), queueId: "myQueue5", maxRate: 1000, minRate: 1000, burst: 150, priority: 2, action: 'Edit' },
    { id: uuidv4(), queueId: "myQueue6", maxRate: 1000, minRate: 1000, burst: 44, priority: 1, action: 'Delete' },
    { id: uuidv4(), queueId: "myQueue7", maxRate: 1000, minRate: 1000, burst: 36, priority: 3, action: 'Edit' },
  ];

  const [rows, setRows] = useState(initialRows);
  

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
        <ConfirmationDialog
        open={isConfirmationOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
       {isEditFormOpen && (
        <EditForm
          open={isEditFormOpen}
          onClose={handleEditFormCancel}
          onSave={handleEditFormSave}
          onCancel={handleEditFormCancel}
          rowData={rows.find((row) => row.id === selectedItemId)}
        />
      )}
      </div>
    </div>
  );
};

export default QueueManage;